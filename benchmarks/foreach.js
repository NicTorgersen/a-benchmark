module.exports = function (data) {
  function benchmark (test) {
    data.forEach((size) => {
      test(size)
    })
  }

  return {
    benchmark: benchmark
  }
}