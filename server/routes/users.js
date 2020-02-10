var express = require('express');
var router = express.Router();
var db = require('../db');
const config = require('../config');
var bcrypt = require('bcrypt');

router.post('/register', function (req, res, next) {
  // let findUser = false;
  // const handler = (err, result) => {
  //   if (!err && result.rowCount == 0 ) {
  //     findUser = false;
  //   } else {
  //     findUser = true;
  //   }
  // }
  // db.findUser([email], handler);

  

  const {username, email, password} = req.body.userData; 
  const hash = bcrypt.hashSync(password, config.SALT_ROUNDS);
  const values = [username,email, hash];

  const handler = (err, result) => {
    if (!err) {
      res.json({
        success: true,
        message: 'User registered.',
        data: result
      });
    } else {
      res.json({
        success: false,
        message: 'User not registered.',
        error: err
      });
    
    }
  }
  db.insertUser(values, handler);
});

module.exports = router;
