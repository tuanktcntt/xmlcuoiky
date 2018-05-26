var express = require('express');
var router = express.Router();

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Danh_sach_cac_cau_thu_ghi_ban', {});
});

module.exports = router;