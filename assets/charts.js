Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["2", "3", "4", "5", "6", "7", "8","9", "10", "11", "12", "13", "14", "15","16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"],
		datasets: [{
			label: '7.2.5 HP and Damage % increase',
			backgroundColor: 'rgba(213, 0, 0, .7)',
			borderColor: 'rgba(213, 0, 0, .7)',
			fill: false,
			steppedLine: true,
			pointRadius: 1,
			pointHitRadius: 5,
			borderJoinStyle: 'round',
			data: [10, 21, 34, 47, 62, 78, 95, 115, 136, 160, 186, 214, 246, 280, 318, 360, 406, 456, 512, 573, 641, 715, 796, 885],
		}, {
			label: '7.2 HP and Damage % increase',
			backgroundColor: 'rgba(255, 152, 0, .7)',
			borderColor: 'rgba(255, 152, 0, .7)',
			fill: false,
			steppedLine: true,
			pointRadius: 1,
			pointHitRadius: 5,
			borderJoinStyle: 'round',
			data: [8, 17, 26, 37, 47, 59, 72,86, 100, 116, 134,152, 172, 194, 218, 243, 271, 300, 332, 367, 404, 444, 488, 535],
		}]
	},
	options: {
		tooltips: {
			mode: 'index',
		}
	}
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('loot');
var chart = new Chart(ctx, {
	type: 'horizontalBar',
	yAxisID: "Keystone Level",
	data: {
		labels: ["30", "27", "24", "21", "18", "15", "12"],
		datasets: [{
			label: 'Pieces of loot',
			backgroundColor: 'rgba(76, 175, 80, 1)',
			borderColor: 'rgba(76, 175, 80, 1)',
			beginAtZero: true,
			data: [8, 7, 6, 5, 4, 3, 3, 0],
		}]
	},
	options: {
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Keystone level',
				}
			}]
		}
	}
});