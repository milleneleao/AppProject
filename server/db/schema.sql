
CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  usermail VARCHAR(255),
  userpassword VARCHAR(100),
  date_created DATE,
  last_login DATE
);

CREATE TABLE client (
cid     SERIAL PRIMARY KEY,
uid      integer,
kidsName VARCHAR(255),
parentName VARCHAR(255),
fromCountry json ,
livingCountry json ,
picture bytea,
timezone json,
credit float,
 FOREIGN KEY (uid) REFERENCES users (uid)
);

