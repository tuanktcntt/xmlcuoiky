var express = require('express');
var router = express.Router();

/* GET customerpage*/
router.get('/', function(req, res, next) {
  res.render('Lich_thi_dau', {});
});

module.exports = router;