//Xem Tivi (Tên, Đơn giá Bán , Số lượng Tồn ,Doanh thu)
//Nhóm Tivi (Tên,Số lượng Tồn, Doanh thu)
//Nhân viên bán hàng ( Họ tên , Doanh thu)
var express = require('express');
var router = express.Router();

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Bang_xep_hang', {});
});

module.exports = router;