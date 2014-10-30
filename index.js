var express = require('express');
var bodyParser = require('body-parser');

var hash = require('./lib/hash');
var store = require('./lib/store');

var app = express();
var router = express.Router();

router.get('/:key', function(req, res, next) {
  store.get(req.params.key, function(err, data) {
    if(err) next(err);
    res.send(data);
  });
});

router.post('/', function(req, res, next) {
  var data = req.body;

  store.put(data, function(err, key) {
    if(err) next(err);
    res.send(key);
  });
});

app.use(bodyParser.json());
app.use('/data', router);

app.listen(3000);
