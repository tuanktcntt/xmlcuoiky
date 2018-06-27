var express = require('express');
var xmldom = require('xmldom').DOMParser;
var router = express.Router();
var fs =require('fs');


/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Danh_sach_cau_thu', {});
});

module.exports = router;