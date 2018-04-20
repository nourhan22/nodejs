var express = require('express');
var router = express.Router();
const student=require("../models/student");
/* GET users listing. */
//gettting data
router.get('/', function(req, res, next) {
  //res.send(' nouraaaaaaaaaaaaaa ');
  //debugger;
  student.find({})
  .then(data=>{res.json(data);})
  .catch(err=>{next(err);});
});
//post the data
router.post('/send', function(req, res, next){
  debugger;
  student.create(req.body, function(err, data){
    res.json(data);
  });
});

module.exports = router;
