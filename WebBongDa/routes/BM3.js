var express = require('express');
var router = express.Router();

/* GET sellerpage*/
router.get('/', function(req, res, next) {
  res.render('Ket_qua_thi_dau', {});
});
module.exports = router;