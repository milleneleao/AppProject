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
  findUser: (values, handler) => {
    pool.query(`SELECT * FROM users WHERE usermail = $1`, values, (err, result) => {
      handler(err, result);
    })
  },
  insertClient: (values, handler) => { pool.query(`INSERT INTO client(uid, kidsname, parentname, fromcountry,livingcountry,picture,timezone,credit)
    VALUES($1, $2, $3,  $4,  $5,  $6,  $7,  $8 )`, values, (err, result) => {
    handler(err, result);
  })
}

}
