var crypto = require('crypto');
var hash = crypto.createHash('sha1');

var algorithm = 'sha1';
var encoding = 'hex';

module.exports = {
  digest: function(json) {
    var hash = crypto.createHash(algorithm);
    hash.update(JSON.stringify(json));
    return hash.digest(encoding);
  }
};
