-- =============================================================================
-- HALABA City FC — Non-Destructive Cloudflare D1 Index Reference Migration
-- Target Database: halaba-fc-db (013cfba5-7db0-4275-8329-d17d5505cd23)
--
-- IMPORTANT SAFETY NOTES:
-- 1. All 9 application tables already exist in live halaba-fc-db:
--      matches, news_articles, players, staff, sponsors,
--      club_settings, standings, standings_settings, standings_history
--    (plus Cloudflare system tables _cf_KV and schema_migrations).
-- 2. The live database has NO products table (shop merchandise uses Firestore
--    fallback cleanly when /api/products reports configured: false).
-- 3. Do NOT create, drop, rename, reset, or alter any existing D1 tables.
-- 4. Only non-destructive CREATE INDEX IF NOT EXISTS statements matching the
--    confirmed live column names are retained here for reference.
-- =============================================================================

CREATE INDEX IF NOT EXISTS idx_matches_date_kickoff
  ON matches (match_date, kickoff_time);

CREATE INDEX IF NOT EXISTS idx_matches_status
  ON matches (status);

CREATE INDEX IF NOT EXISTS idx_news_articles_date
  ON news_articles (article_date DESC, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_players_number
  ON players (number ASC, name ASC);

CREATE INDEX IF NOT EXISTS idx_sponsors_active_order
  ON sponsors (active, display_order ASC);

CREATE INDEX IF NOT EXISTS idx_standings_comp_season_points
  ON standings (competition, season, points DESC, goal_difference DESC, goals_for DESC);

CREATE INDEX IF NOT EXISTS idx_standings_history_comp_season_date
  ON standings_history (competition, season, created_at DESC);
