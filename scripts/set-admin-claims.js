/**
 * HALABA City FC — Official Firebase Administrator Role Setup Script
 * 
 * This trusted administrative script grants administrator custom claims ({ admin: true, role: 'admin' })
 * and registers the admin user in Cloud Firestore.
 * 
 * Usage Instructions:
 * 1. Download your Firebase Service Account JSON key from the Firebase Console:
 *    Project Settings -> Service Accounts -> Generate New Private Key
 * 2. Save it locally (e.g. serviceAccountKey.json) - NEVER commit this file to Git!
 * 3. Set the environment variable:
 *    export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"
 * 4. Run:
 *    node scripts/set-admin-claims.js <admin-email>
 * 
 * Example:
 *    node scripts/set-admin-claims.js admin@halabafc.et
 *    node scripts/set-admin-claims.js halabacityfc@gmail.com
 */

import process from 'node:process';

let admin;
try {
  // @ts-ignore
  const mod = await import('firebase-admin');
  admin = mod.default || mod;
} catch (e) {
  console.error('\x1b[31m[ERROR] firebase-admin is required to run this CLI script.\x1b[0m');
  console.error('Install it temporarily with: npx firebase-admin or npm install -g firebase-admin');
  process.exit(1);
}

const targetEmail = process.argv[2] || process.env.ADMIN_EMAIL;

if (!targetEmail) {
  console.error('\x1b[31m[ERROR] Please specify the administrator email address to promote.\x1b[0m');
  console.log('\nUsage:');
  console.log('  node scripts/set-admin-claims.js <admin-email>');
  console.log('\nExample:');
  console.log('  node scripts/set-admin-claims.js admin@halabafc.et');
  process.exit(1);
}

try {
  // Initialize Firebase Admin with Google Application Credentials or default environment
  if (!admin.apps.length) {
    admin.initializeApp();
  }
} catch (initErr) {
  console.error('\x1b[31m[ERROR] Failed to initialize Firebase Admin SDK:\x1b[0m', initErr.message);
  console.error('\nPlease ensure GOOGLE_APPLICATION_CREDENTIALS is set to your service account key file:');
  console.error('  export GOOGLE_APPLICATION_CREDENTIALS="/path/to/serviceAccountKey.json"');
  process.exit(1);
}

async function promoteAdmin(email) {
  const cleanEmail = email.trim().toLowerCase();
  console.log(`\x1b[34m[INFO] Searching for Firebase user with email: ${cleanEmail}...\x1b[0m`);

  try {
    const user = await admin.auth().getUserByEmail(cleanEmail);
    console.log(`\x1b[32m[FOUND] User UID: ${user.uid} (${user.displayName || 'No display name'})\x1b[0m`);

    // 1. Set Firebase Authentication Custom Claims
    const claims = {
      admin: true,
      role: 'admin',
      updatedAt: new Date().toISOString(),
    };
    await admin.auth().setCustomUserClaims(user.uid, claims);
    console.log(`\x1b[32m[SUCCESS] Custom claims set on Firebase Auth: { admin: true, role: 'admin' }\x1b[0m`);

    // 2. Also register in the Firestore /admins collection for multi-layer security rule verification
    const db = admin.firestore();
    await db.collection('admins').doc(user.uid).set({
      uid: user.uid,
      email: cleanEmail,
      displayName: user.displayName || 'Club Administrator',
      role: 'admin',
      grantedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    console.log(`\x1b[32m[SUCCESS] Registered in Firestore collection 'admins/${user.uid}'\x1b[0m`);

    console.log('\n\x1b[32m=======================================================');
    console.log(`Administrator setup successfully completed for: ${cleanEmail}`);
    console.log('The user can now log in at the HALABA City FC Admin Portal with full privileges.');
    console.log('=======================================================\x1b[0m\n');
  } catch (err) {
    if (err.code === 'auth/user-not-found') {
      console.error(`\x1b[31m[ERROR] No Firebase account found for: ${cleanEmail}\x1b[0m`);
      console.error('The administrator must first have an account registered in Firebase Authentication.');
    } else {
      console.error('\x1b[31m[ERROR] Failed to set administrator claims:\x1b[0m', err.message || err);
    }
    process.exit(1);
  }
}

promoteAdmin(targetEmail);
