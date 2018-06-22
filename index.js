// filesystem
const fs = require('fs')

// data to test with...
const testData = () => {
  const data = []
  for (var i = 0; i < 100; i++) {
    data.push({
      height: i*100,
      width: i*200,
    })
  }
  return data
}

// initialize test files from benchmarks-directory
const tests = fs.readdirSync('./benchmarks').filter(file => {
  return file.indexOf('_') === -1
}).map(file => {
  return {
    runtime: require(`./benchmarks/${file}`)(testData()),
    name: file,
  }
})

// run the benchmarks
tests.forEach((test) => {
  test.name = test.name.replace('.js', '') // there's no need to output .js
  console.time(test.name)
  test.runtime.benchmark(({width, height}) => {
    width = width / 2
    height = height / 2
  })
  console.timeEnd(test.name)
	console.log('------------------------')
})