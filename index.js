const fs = require('fs')

// data to test with...
const dataObj = {
  width: 0,
  height: 0,
}
const testData = () => {
  const data = []
  for (var i = 0; i < 100; i++) {
    let dataToPush = Object.assign({}, dataObj)
    Object.keys(dataToPush).forEach((val, idx) => {
      dataToPush[val] = (idx + (Math.random() * 100)) * 100
    })
    data.push(dataToPush)
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
console.time('= all')

tests.forEach((test, idx) => {
  let hasPlus = ( (idx > 0) ? '+ ' : '' )
  test.name = test.name.replace('.js', '') // there's no need to output .js
  console.time(hasPlus + test.name)
  test.runtime.benchmark(({width, height}) => {
    width = width / 2
    height = height / 2
  })
  console.timeEnd(hasPlus + test.name)
  console.log('------------------------')
})

console.timeEnd('= all')