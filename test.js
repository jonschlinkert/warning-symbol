'use strict';

/* deps: mocha */
var assert = require('assert');
var warning = require('./');

describe('warning', function () {
  it('should return a warning symbol based on OS:', function () {
    if (process.platform === 'win32') {
      assert.equal(warning, '‼');
    } else {
      assert.equal(warning, '⚠');
    }
  });
});
