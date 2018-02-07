Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('canvas').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["2", "3", "4", "5", "6", "7", "8","9", "10", "11", "12", "13", "14", "15","16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26","27", "28", "29", "30"],
		datasets: [{
			label: '7.3.5 HP & Damage multiplier',
            backgroundColor: 'rgba(255, 152, 0, .9)',
            borderColor: 'rgba(213, 0, 0, .7)',
			borderWidth: 3,
			fill: false,
			steppedLine: false,
			pointRadius: 4,
			pointHitRadius: 12,
			// pointBorderColor: 'rgba(213, 0, 0, 1)',
			// pointBackgroundColor: 'rgba(255, 152, 0, .7)',
			borderJoinStyle: 'round',
			data: [1.1, 1.21, 1.34, 1.47, 1.62, 1.78, 1.95, 2.15, 2.36, 2.60, 2.86, 3.14, 3.46, 3.80, 4.18, 4.60, 5.06, 5.56, 6.12, 6.73, 7.41, 8.15, 8.96, 9.85, 10.83, 11.92, 13.11, 14.42, 15.86]
		}, {
            label: '7.2    HP & Damage multiplier',
            backgroundColor: 'rgba(213, 0, 0, .9)',
            borderColor: 'rgba(255, 152, 0, .7)',
            borderWidth: 2,
            fill: false,
            steppedLine: false,
            pointRadius: 2,
            pointHitRadius: 12,
            // pointBorderColor: 'rgba(255, 152, 0, 1)',
            // pointBackgroundColor: 'rgba(213, 0, 0, .7)',
            borderJoinStyle: 'round',
            data: [1.08, 1.17, 1.26, 1.37, 1.47, 1.59, 1.72, 1.86, 2.00, 2.16, 2.34, 2.52, 2.72, 2.94, 3.18, 3.43, 3.71, 4.00, 4.32, 4.67, 5.04, 5.44, 5.88, 6.35]
        }]
	},
	options: {
		tooltips: {
			mode: 'index',
		}
	}
});

//No longer in use
/*
Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('loot');
var chart = new Chart(ctx, {
	type: 'horizontalBar',
	yAxisID: "Keystone Level",
	data: {
		labels: ["24", "21", "18", "15", "12"],
		datasets: [{
			label: 'Pieces of loot',
			backgroundColor: 'rgba(76, 175, 80, 1)',
			borderColor: 'rgba(76, 175, 80, 1)',
			beginAtZero: true,
			data: [6, 5, 4, 3, 3, 0],
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
*/