var express = require('express');
var router = express.Router();


router.get('/v1', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ data: 'hello there' }));
});


router.post('/v2', (req, res, next) => {
  console.log(req.body.name);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ data: 'this is good response' }));
});
module.exports = router;
