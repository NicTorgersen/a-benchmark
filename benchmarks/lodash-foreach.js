const _ = require('lodash/core');

module.exports = function (data) {
  function benchmark (test) {
    _.forEach(data, (size) => {
      test(size)
    })
  }

  return {
    benchmark: benchmark
  }
}