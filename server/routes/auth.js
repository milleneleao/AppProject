const express = require('express');
const router = express.Router();

//config
const config = require('../config');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var db = require('../db');

/*
Receive email and password
Find user
generate token
*/
router.post('/login', (req, res, next) => {
  const { email, password } = req.body.userData;

  if (email === undefined) {
    res.status(401).json({
      success: false,
      code: 'DD101_AP1_ERROR_01',
      message: `Please don't leave this blank.`
    });
  } if (password === undefined) {
    res.status(401).json({
      success: false,
      code: 'DD102_AP1_ERROR_02',
      message: `Please don't leave this blank.`
    });
  }
  else {
  
    const handler = (err, result) => {
      if (!err && result.rowCount !== 0 && bcrypt.compareSync(password, result.rows[0].userpassword)) {
        let tokenData = {
          name: result.rows[0].usermail,
          email: result.rows[0].username
        }
        let generatedToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn: '1m' });
        res.json({
          success: true,
          token: generatedToken
        });
      } else {
        res.status(401).json({
          success: false,
          code: 'DD101_API_ERROR_03',
          message: err || 'User does not exists.'
        });
      }
    }
    db.findUser([email], handler);
  }
});


router.get('/verifytoken',(req,res,next) => {
  //[0] = Bearer -- [1] = token
  let token = req.headers['authorization'].split(' ')[1];
  jwt.verify(token, config.JWT_KEY,(err,decode) => {
    if (!err){
      res.json({
        success: true,
        message: 'Token is valid.'
      })
    } else {
      res.status(401).json({
        success: false,
        error: err
      })
    }
  })
})

module.exports = router;