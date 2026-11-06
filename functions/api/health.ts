/**
 * Cloudflare Pages Function: /api/health
 * Health check endpoint for HALABA City FC central API.
 */

export async function onRequestGet(): Promise<Response> {
  const payload = {
    success: true,
    service: 'HALABA City FC API',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const onRequest = onRequestGet;
