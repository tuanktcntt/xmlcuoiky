var express = require('express');
var xmldom = require('xmldom').DOMParser;
var router = express.Router();
var fs =require('fs');
//bien luu tru danh sach doi bong
var Danh_sach_doi_bong= [];

fs.readFile('./Ho_so_doi_bong.xml', 'utf-8', function (err, data) {
  if (err) {
    throw err;
  };
  doc = new xmldom().parseFromString(data, 'application/xml');
  
  //doc danh sach ho so doi bong
  Doi = doc.getElementsByTagName('Doi');
  var Danh_sach_cau_thu=doc.getElementsByTagName('Cau_thu');
  var temp;
  for(var i = 0; i < Doi.length; i++)
  {
    var San_nha=Doi[i].getAttribute("San_nha");
    var Ten_doi=Doi[i].getAttribute("Ten");
    var Ma_doi = Doi[i].getAttribute("Ma_so_doi");
    //doc danh sach cau thu
    var Cau_thu_doi = [];
    
    for(var k=0; k<Danh_sach_cau_thu.length; k++){
      if(Danh_sach_cau_thu[k].getAttribute("Ma_so_doi") == Ma_doi){
        var Cau_thu_tam = {
          Ten : Danh_sach_cau_thu[k].getAttribute("Ten"),
          Ngay_sinh : Danh_sach_cau_thu[k].getAttribute("Ngay_sinh"),
          Laoi_cau_thu : Danh_sach_cau_thu[k].getAttribute("Loai_cau_thu")
        }
        Cau_thu_doi.push(Cau_thu_tam);
      }
    }
    temp ={
      "San_nha": San_nha,
      "Ten_doi": Ten_doi,
      "So_luong_cau_thu": Cau_thu_doi.length,
      "Cau_thu": Cau_thu_doi
    }
    Danh_sach_doi_bong.push(temp);
  };
});

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Ho_so_doi_bong', { Danh_sach_doi_bong: Danh_sach_doi_bong });
});
console.log(Danh_sach_doi_bong);
module.exports = router;
