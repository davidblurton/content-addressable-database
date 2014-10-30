var levelup = require('level');
var db = levelup('./db', { valueEncoding: 'json' });

var hash = require('./hash');

module.exports = {
  get: function(key, cb) {
    db.get(key, cb);
  },

  put: function(data, cb) {
    var key = hash.digest(data);
    db.put(key, data, function(err) {
      cb(err, key);
    });
  }
};
