
module.exports = (pool) => pool.query(`
CREATE TABLE IF NOT EXISTS "guilds" (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  prefix VARCHAR(10) NOT NULL DEFAULT 'm!',
  "weebGreetings" TEXT,
  levelup BOOLEAN DEFAULT true,
  social BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS members (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  points BIGINT DEFAULT 0,
  level INTEGER DEFAULT 0,
  daily TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  reputation INTEGER DEFAULT 0,
  repcooldown TIMESTAMP,
  title TEXT
);

CREATE TABLE IF NOT EXISTS bot (
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  "guildBlacklist" TEXT[],
  "userBlacklist" TEXT[]
);
`);
