var express = require('express');
var router = express.Router();
var Danh_sach_tran =[];

fs.readFile('./Lich_thi_dau.xml', 'utf-8', function (err, data) {
  if (err) {
    throw err;
  };
  doc = new xmldom().parseFromString(data, 'application/xml');
  
  //doc danh sach tran dau
  Danh_sach_tran = doc.getElementsByTagName('Tran');
  //var Danh_sach_cau_thu=doc.getElementsByTagName('Cau_thu');
  //var temp;
  for(var i = 0; i < Danh_sach_tran.length; i++)
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
    console.log(temp);
  };
});

/* GET sellerpage*/
router.get('/', function(req, res, next) {
  res.render('Ket_qua_thi_dau', {});
});
module.exports = router;