module.exports = function () {
	function benchmark () {
		const data = []

		for (var i = 0; i < 100; i++) {
			data.push({
				height: i*100,
				width: i*200,
			})
		}

		console.time('for')

		for (var i = 0; i < data.length; i++) {
			data[i].height = data[i].height / 2
			data[i].width = data[i].width / 2
		}

		console.timeEnd('for')

		console.time('forEach')

		data.forEach((data) => {
			data.height = data.height / 2
			data.width = data.width / 2	
		})

		console.timeEnd('forEach')
	}

	return {
		benchmark: benchmark
	}
}