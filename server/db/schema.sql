CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  date_created DATE,
  last_login DATE
);

CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  usermail VARCHAR(255),
  userpassword VARCHAR(100),
  date_created DATE,
  last_login DATE
);