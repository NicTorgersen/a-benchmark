const fs = require('fs')
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

const tests = fs.readdirSync('./benchmarks').filter(file => {
  return file.indexOf('_') === -1
}).map(file => {
  return {
    runtime: require(`./benchmarks/${file}`)(testData()),
    name: file,
  }
})

tests.forEach((test) => {
  console.time(test.name)
  test.runtime.benchmark(({width, height}) => {
    width = width / 2
    height = height / 2
  })
  console.timeEnd(test.name)
	console.log('------------------------')
})