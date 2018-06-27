var express = require('express');
var router = express.Router();
var xmldom = require('xmldom').DOMParser;
var fs=require('fs');
var Danh_sach_tran_dau =[];

fs.readFile('./Ket_qua_thi_dau.xml', 'utf-8', function (err, data) {
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
    var Ma_so_tran=Danh_sach_tran[i].getAttribute("Ma_so_tran");
    var Doi_1=Danh_sach_tran[i].getAttribute("Doi_1");
    var Doi_2 = Danh_sach_tran[i].getAttribute("Doi_2");
    var Ngay_gio = Danh_sach_tran[i].getAttribute("Ngay_gio");
    var San = Danh_sach_tran[i].getAttribute("Sân");
    var Ti_so = Danh_sach_tran[i].getAttribute("Ty_so");
    var Cau_thu = doc.getElementsByTagName("Cau_thu");
    //var Ten_cau_thu=Cau_thu.getAttributeNS("Ten_cau_thu");
    //console.log(Cau_thu);
    var Ma_tran =Danh_sach_tran[i].getAttribute("Ma_so_tran");
    var Cau_thu_ghi_ban =[];
    for( var j=0;j<Cau_thu.length; j++){
      if(Cau_thu[j].getAttribute("Ma_so_tran")==Ma_tran){
        var temp={
          STT: Cau_thu[j].getAttribute("STT"),
          Ten: Cau_thu[j].getAttribute("Ten_cau_thu"),
          Doi: Cau_thu[j].getAttribute("Ten_doi"),
          Loai_ban_thang: Cau_thu[j].getAttribute("Loai_ban_thang"),
          Thoi_diem: Cau_thu[j].getAttribute("Thoi_Diem")
        }
        Cau_thu_ghi_ban.push(temp);
      }
    }
    var temp = {
      Ma_so_tran: Ma_so_tran,
      Doi_1 : Doi_1,
      Doi_2 : Doi_2,
      Ngay_gio : Ngay_gio,
      San : San,
      Ti_so : Ti_so,
      Cau_thu: Cau_thu_ghi_ban
    }
    console.log(temp);
    Danh_sach_tran_dau.push(temp);
  };
});

/* GET sellerpage*/
router.get('/', function(req, res, next) {
  res.render('Ket_qua_thi_dau', {Danh_sach_tran: Danh_sach_tran_dau});
});
module.exports = router;