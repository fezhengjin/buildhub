var express = require('express');
var router = express.Router();
var spider = require('../lib/spider');

router.get('/', function(req, res, next) {
  if (!req.query.url) res.json({});
  spider.fetchBuildData(req.query.url)
  .then(function(json) {
    res.json(json);
  });
});

module.exports = router;
