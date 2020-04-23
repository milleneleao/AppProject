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
        //console.log(val);
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
  const { uid, valor } = req.body.userData;
  //console.log(uid,valor);
  //console.log( req.body.userData);
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
  db.updateCredit([uid, valor], handler);



});

router.post('/course', (req, res, next) => {
  const { uid, cco, data_course } = req.body.userData;
  //console.log( req.body.userData);
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
  db.insertCourse([uid, cco, data_course], handler);
});

router.get('/image/:id', (req, res, next) => {
  //  console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      var base64data = null
      if (result.rowCount > 0 && result.rows[0].picture) {
        base64data = Buffer.from(result.rows[0].picture, 'binary').toString();
      }
      res.json({
        success: true,
        message: '',
        data: base64data 
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
  //console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      res.json({
        success: true,
        message: '',
        data: result.rows[0].credit
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

router.get('/course/:id', (req, res, next) => {
  //console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      var data = null;
      if (result.rowCount > 0) data = `[`;
      let id = 0;
      for (var i = 0; i < result.rowCount; i++) {
        aux = JSON.parse(result.rows[i].data_course);
        for (var k in aux) {
          var start = new Date(aux[k].start);
          var end = new Date(aux[k].end);
          if (start > Date.now()) {
            data += `{"id":"${id}","start":"${start}","end":"${end}"}`;
            id++;
          }
        }
      }
      if (data) data += `]`;
      console.log(data);
      res.json({
        success: true,
        message: '',
        data: data
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
  db.findData_course([req.params.id], handler);
});

router.get('/course_teacher', (req, res, next) => {
  //console.log(req.params.id);
  const handler = (err, result) => {
    if (!err) {
      var data = null;
      if (result.rowCount > 0) data = `[`;
      let id = 0;
      for (var i = 0; i < result.rowCount; i++) {
        aux = JSON.parse(result.rows[i].data_course);
        for (var k in aux) {
          var start = new Date(aux[k].start);
          var end = new Date(aux[k].end);
          var student = result.rows[i].kidsname;
          var uid  = result.rows[i].uid;
          if (start > Date.now()) {
            data += `{"id":"${k}","start":"${start}","end":"${end}","student":"${student}","uid":"${uid}"},`;
            id++;
          }
        }
      }
      if (data){
        console.log(data);
        data = data.substring(0, data.length - 1);
        data += `]`;
      } 
      console.log(data);
      res.json({
        success: true,
        message: '',
        data: data
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
  db.findData_courses_Teacher([], handler);
});


router.get('/dashboard/:id', (req, res, next) => {

  const handler = (err, result) => {
    if (!err) {
      var base64data = Buffer.from(result.rows[0].picture, 'binary').toString();
      var kidsName = result.rows[0].kidsname;
      var credit = result.rows[0].credit;
      res.json({
        success: true,
        message: '',
        image: base64data,
        kidsName: kidsName,
        credit: credit, 
        data_course: ""
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
  db.findData([req.params.id], handler);


});

router.get('/username', (req, res, next) => {

  const handler = (err, result) => {
    if (!err) {
      console.log(result.rows[0].username);
      var username = result.rows[0].username;
   
      res.json({
        success: true,
        message: '',
        username: username
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
  db.findClient_uid([], handler);


});





module.exports = router;
