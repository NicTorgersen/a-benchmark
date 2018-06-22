module.exports = function (data) {
  function benchmark (cb) {
    data.forEach((size) => {
      cb(size)
    })
  }

  return {
    benchmark: benchmark
  }
}