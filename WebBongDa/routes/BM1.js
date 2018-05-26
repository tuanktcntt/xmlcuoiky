var express = require('express');
var xmldom = require('xmldom').DOMParser;
var router = express.Router();
var fs =require()

//bien luu tru danh sach doi bong
var Danh_sach_doi_bong= [];
fs.readFile('./Ho_so_doi_bong.xml', 'utf-8', function (err, data) {
  if (err) {
    throw err;
  };
  doc = new xmldom().parseFromString(data, 'application/xml');
  
  //doc danh sach ho so doi bong
  Doi = doc.getElementsByTagName('Doi');
  for(var i = 0; i < Doi.length; i++)
  {
    var San_nha=Doi[i].getAttribute("San_nha");
    var Ten_doi=Doi[i].getAttribute("Ten_doi");
    var Danh_sach_cau_thu=Doi[i].getElementsByTagName('Danh_sach_cau_thu');
    var Cau_thu =[];
    /*for(var j=0; j<Danh_sach_cau_thu.length; j++){
      Cau_thu[j]= 
    }*/
    Danh_sach_doi_bong.push(temp);
  };
});

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Ho_so_doi_bong', {});
});

module.exports = router;
