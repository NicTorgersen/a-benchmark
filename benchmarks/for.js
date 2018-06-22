module.exports = function (data) {
  function benchmark (cb) {
    for (var i = 0; i < data.length; i++) {
      cb(data[i])
    }
  }

  return {
    benchmark: benchmark
  }
}