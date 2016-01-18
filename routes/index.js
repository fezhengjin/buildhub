var express = require('express');
var router = express.Router();
var sources = require('../lib/source');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'BuildHub - XSKY', sources: sources});
});

module.exports = router;
