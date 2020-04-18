
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
fromCountry VARCHAR(255),
livingCountry VARCHAR(255),
picture bytea,
timezone VARCHAR(255),
credit float,
 FOREIGN KEY (uid) REFERENCES users (uid)
);



CREATE TABLE client_course (
ccid         SERIAL PRIMARY KEY,
uid          integer,
cco          integer,
data_course  VARCHAR(4000),
 FOREIGN KEY (uid) REFERENCES users (uid)
);

<<<<<<< HEAD

CREATE TABLE teachers (
  uid SERIAL PRIMARY KEY,
  teachername VARCHAR(255) UNIQUE,
  tachermail VARCHAR(255),
  teacherpassword VARCHAR(100),
  date_created DATE,
  last_login DATE
);

=======
ALTER TABLE users ADD COLUMN client BOOLEAN NOT NULL DEFAULT true;
INSERT INTO public.users(username, usermail, userpassword, date_created, last_login, client)
	VALUES ('professor', 'professor@school.ca', '$2b$13$a04kc0y0QKUzbyIwUcqTe.gAFAiIIurqh5l8lxE0vHj864NjckAn6',
			'2020-03-24', null,false);
>>>>>>> d1e4c233f0ee3f59818cb2ab29a66c128acfc168
