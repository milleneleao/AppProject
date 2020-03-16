var express = require('express');
var router = express.Router();
var util = require('util');
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

module.exports = router;
