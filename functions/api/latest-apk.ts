/**
 * Cloudflare Pages Function: /api/latest-apk
 * Queries GitHub Releases for the latest .apk file from Abdmalik0/halaba-fc.
 * Supports ?download=1 or ?download=true to issue an immediate 302 redirect
 * directly to the latest APK asset download URL.
 */

interface ApkInfo {
  downloadUrl: string;
  fileName: string;
  version: string;
  sizeBytes: number;
  sizeFormatted: string;
  publishedAt: string;
  cachedAt: number;
  fromCache?: boolean;
}

// In-isolate cache with 5-minute TTL
let cachedApkInfo: ApkInfo | null = null;

export async function onRequestGet(context: { request: Request }): Promise<Response> {
  const url = new URL(context.request.url);
  const shouldDownload = url.searchParams.get('download') === '1' || url.searchParams.get('download') === 'true';
  const now = Date.now();

  const jsonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=300, s-maxage=300',
  };

  // Default fallback pointing to verified APK release on GitHub
  const defaultApk: ApkInfo = {
    downloadUrl: 'https://github.com/Abdmalik0/halaba-fc/releases/download/v1.0/HalabaCityFC-v1.0-debug.apk',
    fileName: 'HalabaCityFC-v1.0-debug.apk',
    version: 'v1.0',
    sizeBytes: 23365247,
    sizeFormatted: '22.3 MB',
    publishedAt: '2026-10-29T10:00:00Z',
    cachedAt: now,
  };

  // Return cached info if fresh (< 5 mins)
  if (cachedApkInfo && now - cachedApkInfo.cachedAt < 5 * 60 * 1000) {
    if (shouldDownload) {
      return Response.redirect(cachedApkInfo.downloadUrl, 302);
    }
    return new Response(
      JSON.stringify({ success: true, ...cachedApkInfo, fromCache: true }),
      { status: 200, headers: jsonHeaders }
    );
  }

  try {
    const ghRes = await fetch('https://api.github.com/repos/Abdmalik0/halaba-fc/releases', {
      headers: {
        'User-Agent': 'HalabaCityFC-App',
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (ghRes.ok) {
      const releases: any = await ghRes.json();
      if (Array.isArray(releases) && releases.length > 0) {
        for (const rel of releases) {
          const apkAsset = rel.assets?.find(
            (a: any) => typeof a?.name === 'string' && a.name.toLowerCase().endsWith('.apk')
          );

          if (apkAsset && apkAsset.browser_download_url) {
            const sizeMB = (apkAsset.size / (1024 * 1024)).toFixed(1);
            cachedApkInfo = {
              downloadUrl: apkAsset.browser_download_url,
              fileName: apkAsset.name,
              version: rel.tag_name || 'v1.0',
              sizeBytes: apkAsset.size,
              sizeFormatted: `${sizeMB} MB`,
              publishedAt: apkAsset.updated_at || rel.published_at || new Date().toISOString(),
              cachedAt: now,
            };
            break;
          }
        }
      }
    }
  } catch (err: any) {
    console.warn('[LatestAPK] Error fetching GitHub releases:', err?.message || err);
  }

  const finalApk = cachedApkInfo || { ...defaultApk, cachedAt: now };

  if (shouldDownload) {
    return Response.redirect(finalApk.downloadUrl, 302);
  }

  return new Response(
    JSON.stringify({
      success: true,
      ...finalApk,
    }),
    { status: 200, headers: jsonHeaders }
  );
}

export const onRequest = onRequestGet;
