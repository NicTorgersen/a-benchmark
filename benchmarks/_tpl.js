module.exports = function (data) {
	function benchmark (test) {
		test()
	}

	return {
		benchmark: benchmark
	}
}