const _ = require('lodash/core');

module.exports = function (data) {
  function benchmark (cb) {
    _.forEach(data, (size) => {
      cb(size)
    })
  }

  return {
    benchmark: benchmark
  }
}