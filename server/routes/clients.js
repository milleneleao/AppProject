var express = require('express');
var router = express.Router();
const formidable = require('formidable');

var db = require('../db');
const config = require('../config');

router.post('/register', function (req, res, next) {
  const form = formidable({ multiples: true });
  var uid = null;
  var kidsName = "";
  var parentName = "";
  var fromCountry = null;
  var livingCountry = null
  var timezone = null
  var image = null
  form.parse(req);
  form.on('field', (name, val) => {
    switch (name) {
      case "uid":
        uid = val;
        break;
      case "kidsName":
        kidsName = val;
        break;
      case "parentName":
        parentName = val;
        break;
      case "fromCountry":
        fromCountry = val;
        break;
      case "livingCountry":
        livingCountry = val;
        break;
      case "timezone":
        timezone = val;
        break;
      case "image":
        console.log(val);
        image = val;
        break;
      default:
      // code block
    }

  });
  form.on('end', () => {
    if (res.headersSent) {
      console.log('Response sent already')
    } else {
      // handle what you want to handle at the end of the form when all task in series are finished
      const values = [uid, kidsName, parentName, fromCountry,
        livingCountry, image, timezone, 30];
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
            code: "",
            error: err
          });

        }
      }
      // console.log(values);
      db.insertClient(values, handler);
    }
  });
});

router.post('/credit', (req, res, next) => {
  const {uid, valor} = req.body.userData;
console.log(uid,valor);
console.log( req.body.userData);
  const handler = (err, result) => {
    if (!err) {
      res.json({
        success: true,
        message: ''
      });
    } else {
      console.log(err);
      res.json({
        success: false,
        message: '',
        code: err.code,
        error: err
      });

    }
  }
  db.updateCredit([uid,valor], handler);

  
  
});

router.get('/image/:id', (req, res, next) => {
  console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      var base64data = Buffer.from(result.rows[0].picture, 'binary').toString();
      res.json({
        success: true,
        message: '',
        data:  base64data
      });
    } else {
      console.log(err);
      res.json({
        success: false,
        message: '',
        code: err.code,
        error: err
      });

    }
  }
  db.findImage([req.params.id], handler);
});

router.get('/credit/:id', (req, res, next) => {
  console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      res.json({
        success: true,
        message: '',
        data:  result.rows[0].credit
      });
    } else {
      console.log(err);
      res.json({
        success: false,
        message: '',
        code: err.code,
        error: err
      });

    }
  }
  db.findCredit([req.params.id], handler);
});


module.exports = router;
