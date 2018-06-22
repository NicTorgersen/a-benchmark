module.exports = function (data) {
	function benchmark (test) {
		for (var i = 0; i < data.length; i++) {
			test(data[i])
		}
	}

	return {
		benchmark: benchmark
	}
}