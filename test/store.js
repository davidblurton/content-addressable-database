var should = require('should');
var store = require('../lib/store');

var testData = { hello: 'world', array: [1, 2, 3] };

describe('store', function() {
  describe('put', function() {
    it('should get a hash back when storing data', function() {
      store.put(testData, function(err, key) {
        should.not.exist(err);
        key.should.be.type('string');
        key.should.have.length(40);
      });
    });
    
    it('should get back what it stored', function() {
      store.put(testData, function(err, key) {
        should.not.exist(err);

        store.get(key, function(err, data) {
          should.not.exist(err);
          data.should.eql(testData);
        });
      });
    });
  });
});
