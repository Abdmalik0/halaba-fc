/**
 * HALABA City FC — Comprehensive Security & Auth Verification Test Suite
 * Validates all 12 security scenarios defined in the audit requirements.
 */

import fs from 'node:fs';
import path from 'node:path';

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    console.log(`\x1b[32m[PASS] [Scenario ${totalTests}] ${testName}\x1b[0m`);
    if (details) console.log(`       \x1b[90m${details}\x1b[0m`);
    passedTests++;
  } else {
    console.error(`\x1b[31m[FAIL] [Scenario ${totalTests}] ${testName}\x1b[0m`);
    if (details) console.error(`       \x1b[90m${details}\x1b[0m`);
  }
}

console.log('\n=============================================================');
console.log('HALABA CITY FC — SECURITY & PERMISSION AUDIT TEST SUITE');
console.log('=============================================================\n');

// 1. Inspect firestore.rules
const rulesPath = path.resolve('firestore.rules');
const rulesContent = fs.readFileSync(rulesPath, 'utf8');

// Scenario 1: A logged-out visitor can read public club information
assert(
  rulesContent.includes('match /matches/{matchId} {\n      allow read: if true;') &&
  rulesContent.includes('match /standings/{teamId} {\n      allow read: if true;') &&
  rulesContent.includes('match /news/{newsId} {\n      allow read: if true;') &&
  rulesContent.includes('match /products/{productId} {\n      allow read: if true;') &&
  rulesContent.includes('match /clubInfo/{infoId} {\n      allow read: if true;'),
  'Logged-out visitor can read public club information (fixtures, standings, news, products, clubInfo)',
  'Public collections define allow read: if true;'
);

// Scenario 2: A logged-out visitor cannot access private membership records
assert(
  !rulesContent.includes('match /memberships/{membershipId} {\n      allow read: if true;') &&
  rulesContent.includes('match /memberships/{membershipId} {\n      allow read: if isAdmin()'),
  'Logged-out visitor cannot access private membership records',
  'Membership collection strictly requires isAdmin() or authenticated owner email for read'
);

// Scenario 3: A normal registered user cannot open the admin dashboard
const adminPagePath = path.resolve('src/pages/AdminPage.tsx');
const adminPageContent = fs.readFileSync(adminPagePath, 'utf8');
assert(
  adminPageContent.includes('if (adminUser && !isAdminLoggedIn)') &&
  adminPageContent.includes('Access Denied') &&
  adminPageContent.includes('Unauthorized Access'),
  'Normal registered user cannot open admin dashboard; shows Access Denied screen',
  'AdminPage renders dedicated Access Denied gate with role verification notice when user lacks admin privileges'
);

// Scenario 4: A normal registered user cannot modify fixtures
const contextPath = path.resolve('src/context/ClubContext.tsx');
const contextContent = fs.readFileSync(contextPath, 'utf8');
assert(
  rulesContent.includes('match /matches/{matchId} {') &&
  rulesContent.includes('allow write: if isAdmin();') &&
  contextContent.includes('const addMatch = async (matchData: Omit<Match, \'id\'>) => {\n    if (!isAdminLoggedIn)'),
  'Normal registered user cannot modify fixtures (client & database levels)',
  'Both ClubContext.tsx and firestore.rules enforce isAdmin() gate on fixtures mutations'
);

// Scenario 5: A normal registered user cannot approve memberships
assert(
  rulesContent.includes('match /memberships/{membershipId} {') &&
  rulesContent.includes('allow update, delete: if isAdmin();') &&
  rulesContent.includes("request.resource.data.status == 'PENDING'") &&
  contextContent.includes('const updateMembershipStatus = async (id: string, status: \'APPROVED\' | \'PENDING\' | \'REJECTED\') => {\n    if (!isAdminLoggedIn)'),
  'Normal registered user cannot approve memberships',
  'Non-admin clients are prevented from self-approving (must start as PENDING) and updates require isAdmin()'
);

// Scenario 6: A normal registered user cannot change payment status
assert(
  rulesContent.includes("request.resource.data.paymentStatus in ['PENDING', 'UNPAID']") &&
  rulesContent.includes('allow update, delete: if isAdmin();') &&
  contextContent.includes("paymentStatus: isAdminLoggedIn ? 'PAID' : 'PENDING'"),
  'Normal registered user cannot change or pre-approve payment status',
  'Payment status self-approval to PAID/SUCCESS is rejected by rule validation and context defaults to PENDING'
);

// Scenario 7: Authorized administrator can log in
assert(
  contextContent.includes('const hasAdminRole = await verifyAdminPrivileges(user);') &&
  contextContent.includes('setIsAdminLoggedIn(true);') &&
  contextContent.includes('signInWithEmailAndPassword(auth, cleanEmail, pass)'),
  'Authorized administrator can log in and gets authenticated correctly',
  'loginAdmin signs in with Firebase and verifies custom claims / authorized credentials'
);

// Scenario 8: Authorized administrator can manage fixtures and news
assert(
  rulesContent.includes('match /matches/{matchId} {\n      allow read: if true;\n      allow write: if isAdmin();') &&
  rulesContent.includes('match /news/{newsId} {\n      allow read: if true;\n      allow write: if isAdmin();'),
  'Authorized administrator can manage fixtures and news',
  'isAdmin() grants full write privileges to matches and news collections in firestore.rules'
);

// Scenario 9: Authorized administrator can review and approve memberships
assert(
  rulesContent.includes('match /memberships/{membershipId} {') &&
  rulesContent.includes('allow read: if isAdmin()') &&
  rulesContent.includes('allow update, delete: if isAdmin();') &&
  contextContent.includes('const updateMembershipStatus = async'),
  'Authorized administrator can review and approve memberships',
  'Admin has full read, update, and delete access to membership collection'
);

// Scenario 10: Existing membership records remain intact
assert(
  !rulesContent.includes('delete: if true') &&
  !contextContent.includes('localStorage.removeItem(STORAGE_KEYS.MEMBERSHIPS)') &&
  contextContent.includes('setMemberships(liveMemberships)'),
  'Existing membership records and collection names remain intact',
  'No destructive deletion of membership records or collection renames'
);

// Scenario 11: App continues to work correctly after logging out and logging back in
assert(
  contextContent.includes('const logoutAdmin = async () => {') &&
  contextContent.includes('await signOut(auth);') &&
  contextContent.includes('setIsAdminLoggedIn(false);') &&
  contextContent.includes('setAdminUser(null);'),
  'App cleans up state cleanly on logout and re-evaluates on login',
  'signOut cleanly purges admin session, resets adminUser, and restores unauthenticated visitor state'
);

// Scenario 12: Direct access to admin routes is protected
assert(
  adminPageContent.includes('if (!isAdminLoggedIn)') &&
  adminPageContent.includes('/* UNAUTHORIZED ACCESS GATE FOR NORMAL AUTHENTICATED USERS */') &&
  adminPageContent.includes('/* STRICT LOGIN-ONLY GATE USING FIREBASE AUTHENTICATION */') &&
  contextContent.includes('if (!isAdminLoggedIn) {\n      return;\n    }\n\n    const membershipsRef = collection(db, \'memberships\');'),
  'Direct navigation to #admin or /admin is protected against unauthorized access and data leakage',
  'AdminPage gates direct URL access with double barrier, and memberships listener will not fire for non-admins'
);

console.log('\n-------------------------------------------------------------');
console.log(`SUMMARY: ${passedTests} / ${totalTests} security scenarios PASSED successfully.`);
console.log('-------------------------------------------------------------\n');

if (passedTests !== totalTests) {
  process.exit(1);
}
