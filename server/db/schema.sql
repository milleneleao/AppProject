
CREATE TABLE users (
  uid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  usermail VARCHAR(255),
  userpassword VARCHAR(100),
  date_created DATE,
  last_login DATE
<<<<<<< HEAD
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

=======
); 
>>>>>>> c14df670661c7d848900d529c49b081d441f7c5d
