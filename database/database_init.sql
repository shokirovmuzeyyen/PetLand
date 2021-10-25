CREATE TABLE "users" (
  "user_id" VARCHAR(64) NOT NULL UNIQUE,
  "name" VARCHAR(128),
  "surname" VARCHAR(128),
  "email" VARCHAR(128) NOT NULL UNIQUE,
  "password" VARCHAR NOT NULL,
  "phone_number" VARCHAR(13) NOT NULL,
  "address" TEXT, NOT NULL
);

CREATE TABLE "posts" (
  "post_id" VARCHAR(64) NOT NULL UNIQUE,
  "image" BYTEA,
  "name" VARCHAR(64),
  "location" TEXT NOT NULL,
  "user_id" VARCHAR(64),
  "extra_info" TEXT,
  "posted_at" TIMESTAMP
);

CREATE TABLE "favorites" (
  "fav_id" VARCHAR(64) NOT NULL UNIQUE,
  "user_id" VARCHAR(64),
  "post_id" VARCHAR(64)
);

CREATE TABLE "comments" (
  "comment_id" VARCHAR(64) NOT NULL UNIQUE,
  "user_id" VARCHAR(64),
  "post_id" VARCHAR(64),
  "comment" TEXT,
  "posted_at" TIMESTAMP
);

CREATE TABLE "messages" (
  "dm_id" VARCHAR(64) NOT NULL UNIQUE,
  "sender_id" VARCHAR(64),
  "receiver_id" VARCHAR(64),
  "message" TEXT,
  "sent_at" TIMESTAMP
);


ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "messages" ADD FOREIGN KEY ("sender_id") REFERENCES "users" ("user_id");

ALTER TABLE "messages" ADD FOREIGN KEY ("receiver_id") REFERENCES "users" ("user_id");

ALTER TABLE "favorites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "favorites" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("post_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("post_id");