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

  let code = undefined;
  if((!email || email.length === 0) && (!password || password.length === 0)){
    code = 'DD101_API_ERROR_01'
  } else if (!email || email.length === 0) {
    code = 'DD101_API_ERROR_02'
  } else if (!password || password.length === 0) {
    code = 'DD101_API_ERROR_03'
  } 


  if (code !== undefined){
    res.status(401).json({
      success: false,
      code: code,
      message: `Please don't leave this blank.`
    });
  
  }  else {
    const handler = (err, result) => {
      let code = undefined;
      if(err){
        code = 'DD101_API_ERROR_04';
      } else if ( result.rowCount === 0 ){
        code = 'DD101_API_ERROR_05'
      } else if (!bcrypt.compareSync(password, result.rows[0].userpassword)){
        code = 'DD101_API_ERROR_06'
      }
  
      if (code === undefined){
        let tokenData = {
          name: result.rows[0].username,
          email: result.rows[0].usermail
        }

        var showProfile = false;
        if (!result.rows[0].client){ showProfile = true;}
        const handlerClient = (errc, result1) => {


          if (!errc && result1.rowCount > 0 && result.rows[0].client) {
            showProfile = true;
          }

          
          
        console.log( result.rows[0].client);
        console.log(showProfile);

        let generatedToken = jwt.sign(tokenData, config.JWT_KEY, { expiresIn: '1m' });
          res.json({
            success: true,
            token: generatedToken,
            name:  result.rows[0].username,
            uid: result.rows[0].uid,
            client: result.rows[0].client,
            showProfile: showProfile,
          });
          
        }
        db.findClient([result.rows[0].uid], handlerClient);
      } else {
        res.status(401).json({
          success: false,
          code: code,
          message: err || ''
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