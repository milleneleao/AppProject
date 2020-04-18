var config = require('../config');
const { Pool } = require('pg');

const pool = new Pool({
  user: config.USER,
  host: config.HOST,
  database: config.DB,
  password: config.PSW,
  post: config.PORT
});




module.exports = {
  insertUser: (values, handler) => {
    pool.query(`INSERT INTO users(username, usermail, userpassword, date_created)
                VALUES($1, $2, $3, NOW() )`, values, (err, result) => {
      handler(err, result);
    })
  },
  insertClient: (values, handler) => {
    pool.query(`INSERT INTO client(uid, kidsname, parentname, fromcountry,livingcountry,picture,timezone,credit)
                 VALUES($1, $2, $3,  $4,  $5,  $6,  $7,  $8 )`, values, (err, result) => {
      handler(err, result);
    })
  },
  insertCourse: (values, handler) => {
    pool.query(`INSERT INTO client_course(uid, cco, data_course)
                 VALUES($1, $2, $3)`, values, (err, result) => {
      handler(err, result);
    })
  },
  findUser: (values, handler) => {
    pool.query(`SELECT * FROM users WHERE usermail = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findClient: (values, handler) => {
    pool.query(`SELECT * FROM client WHERE uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findImage: (values, handler) => {
    pool.query(`SELECT picture FROM client WHERE uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findCredit: (values, handler) => {
    pool.query(`SELECT credit FROM client WHERE uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findData:  (values, handler) => {
    pool.query(`SELECT * FROM client WHERE client.uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findData_course: (values,handler) => {
    pool.query(`SELECT * FROM client_course WHERE uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  findData_courses_Teacher: (values,handler) => {
    pool.query(`SELECT cc.*, kidsname ,client.uid FROM client_course cc, client where client.uid = cc.uid`, values, (err, result) => {
      handler(err, result);
    })
  },
  findClient_uid: (values, handler) => {
    pool.query(`SELECT * FROM users WHERE client = false`, values, (err, result) => {
      handler(err, result);
    })
  },
  updateCredit: (values, handler) => {
    pool.query(`update client set credit = $2 WHERE uid = $1`, values, (err, result) => {
      handler(err, result);
    })
  }
}
