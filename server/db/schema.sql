CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) ,
  usermail VARCHAR(255) UNIQUE,
  userpassword VARCHAR(100),
  date_created DATE,
  last_login DATE
);