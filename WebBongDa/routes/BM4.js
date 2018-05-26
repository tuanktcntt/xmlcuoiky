var express = require('express');
var router = express.Router();

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Danh_sach_cau_thu', {});
});

module.exports = router;