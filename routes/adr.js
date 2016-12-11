var express = require('express');
var router = express.Router();
var http = require('http');

/* Interact with the API */
router.get('/drugs', function(req, res, next) {
  
  var options = {
    host: '54.173.130.143',
    port: 80,
    path: '/drugs'
  };

  http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);

    res.on("data", function(chunk) {
      res.status(200).json({
        drugs: chunk
      });
    });

  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

});

module.exports = router;
