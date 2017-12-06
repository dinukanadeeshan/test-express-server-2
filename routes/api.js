var express = require('express');
var router = express.Router();


router.get('/v1', (req, res, next) => {
  res.send('hello there');
});

module.exports = router;
