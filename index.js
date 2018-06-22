const tests = [
	require('./for-v-foreach')
]

tests.forEach((test) => {
	const theTest = test()
	theTest.benchmark()
})