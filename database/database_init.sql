CREATE EXTENSION citext;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email citext UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL,
  phone TEXT NOT NULL,
  address VARCHAR(100) NOT NULL
);

CREATE TABLE post(
  post_id SERIAL PRIMARY KEY,
  p_image bytea,
  name VARCHAR(20),
  location VARCHAR(40) NOT NULL,
  user_id integer references users(user_id),
  extra_info TEXT,
  ts TIMESTAMP,
  vaccinated BOOLEAN
);

CREATE TABLE comment(
  comment_id SERIAL PRIMARY KEY,
  user_id integer references users(user_id),
  post_id integer references post(post_id),
  ts TIMESTAMP,
  comment TEXT
);

CREATE TABLE favorite(
  favorite_id SERIAL PRIMARY KEY,
  user_id integer references users(user_id),
  post_id integer references post(post_id)
);

CREATE TABLE message(
  dm_id SERIAL PRIMARY KEY,
  sender_id integer references users(user_id),
  receiver_id integer references users(user_id),
  ts TIMESTAMP,
  message TEXT
);
