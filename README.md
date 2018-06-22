# a-benchmark

A simple benchmarking template for various testing or whatever.

Place test files in the `benchmarks`directory with the following signature (\_tpl.js):

```javascript
module.exports = function (data) {
  function benchmark (callback) {
    callback(data)
  }

  return {
    benchmark: benchmark
  }
}
```