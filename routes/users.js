var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.param('username')
  res.render('users', { title: 'Express Route for users', username: name});
  // res.send('respond with a resource');
});

module.exports = router;
