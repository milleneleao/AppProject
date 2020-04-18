var express = require('express');
var router = express.Router();
var db = require('../db');
const config = require('../config');
var bcrypt = require('bcrypt');

router.post('/register', function (req, res, next) {

  const {username, email, password} = req.body.userData; 

  console.log(username);
  console.log(email);
  console.log(password);
  let code = undefined;
  if((!username || username.length === 0) && (!email || email.length === 0) && (!password || password.length=== 0)){
    code = 'DD102_API_ERROR_01' 
  } else if ((!username || username.length === 0) && (!email || email.length === 0)) {
    code = 'DD102_API_ERROR_02'
  } else if ((!username || username.length === 0) && (!password || password.length === 0)) {
    code = 'DD102_API_ERROR_03'
  } else if ((!email || email.length === 0)  && (!password || password.length === 0)) {
    code = 'DD102_API_ERROR_04'
  } else if (!username || username.length === 0) {
    code = 'DD102_API_ERROR_05'
  } else if (!email === email.length === 0) {
    code = 'DD103_API_ERROR_06'
  } else if (!password || password.length === 0) {
    code = 'DD102_API_ERROR_07'
  }

  console.log(code);
  if (code === undefined){
    const hash = bcrypt.hashSync(password, config.SALT_ROUNDS);
    console.log(hash);
    const values = [username,email, hash];

    const handler = (err, result) => {
    if (!err) {
      res.json({
        success: true,
        message: 'User registered.',
        data: result
      });
    } else {
      let code = 'DD102_API_ERROR_08';
      if (err.constraint && err.constraint == 'users_usermail_key')
      {code = 'DD102_API_ERROR_09'}
      res.json({
        success: false,
        message: 'User not registered.',
        code: code,
        error: err
      });
    
    }
  }
  db.insertUser(values, handler);
  } else {
    console.log(code);
    res.json({
      success: false,
      code: code,
      message: ''
    });
  }
});

module.exports = router;