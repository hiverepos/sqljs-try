BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "SupportsJSON" (
  "id" INTEGER,
  "body" TEXT,
  "d" INT GENERATED ALWAYS AS (json_extract("body", '$.d')) VIRTUAL,
  PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "profiles" (
  "id" INTEGER,
  "name" TEXT,
  "url" TEXT,
  "description" TEXT,
  "picture" TEXT,
  "media" TEXT,
  PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "SupportsJSON"
VALUES (1, '{"d":"42"}');
INSERT INTO "SupportsJSON"
VALUES (3, '{"d":502}');
INSERT INTO "SupportsJSON"
VALUES (4, '{"name":"shady","d":10}');
INSERT INTO "profiles"
VALUES (
    1,
    'Nadia Abo Kamel',
    'https://www.facebook.com/dana.hsn.5',
    'test',
    'https://i.imgur.com/HHyQyT4.jpg',
    NULL
  );
INSERT INTO "profiles"
VALUES (
    2,
    'Farida Sawy',
    NULL,
    NULL,
    'https://i.imgur.com/rUnn072.jpg',
    NULL
  );
INSERT INTO "profiles"
VALUES (
    3,
    'Neama Ashraf',
    NULL,
    NULL,
    'https://i.imgur.com/O2Ha6YT.png',
    'https://i.imgur.com/btRC9ID.png,https://i.imgur.com/p6SxAXw.jpg'
  );
COMMIT;