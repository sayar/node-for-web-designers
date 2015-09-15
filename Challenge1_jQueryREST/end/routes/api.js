var express = require('express');
var router = express.Router();

//RAMI: Added API
/* GET message */
router.get('/', function(req, res, next) {
  res.json({'status': 200, 'message': 'API Message: HELLO WORLD!'});
});

module.exports = router;
