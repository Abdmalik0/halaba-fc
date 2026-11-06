
interface Env {
  DB: {
    prepare: (sql: string) => {
      first: <T>() => Promise<T | null>;
    };
  };
}

export const onRequestGet = async (context: { env: Env }) => {
  try {
    const result = await context.env.DB
      .prepare("SELECT 1 AS connected")
      .first<{ connected: number }>();

    const connected = result?.connected === 1;

    return new Response(
      JSON.stringify({
        success: connected,
        database: connected ? "connected" : "unavailable"
      }),
      {
        status: connected ? 200 : 503,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        database: "unavailable"
      }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  }
};
