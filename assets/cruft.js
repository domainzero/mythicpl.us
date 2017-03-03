//lookatallthisfuckingjs
var Reveal ={ 
	delay: 400,
	distance: '90px',
	origin: 'left',
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
}
var Late ={
	delay: 2000,
	origin: 'right',
}

window.sr = ScrollReveal();
sr.reveal('.content-block', Reveal);
sr.reveal('.chart', Late);
sr.reveal('.stats-list__item', Late, 500);

//attempting to inline all this shit to one script
Chart.defaults.global.defaultFontFamily = 'Roboto Condensed';
Chart.defaults.global.defaultFontColor = '#fff';
var ctx = document.getElementById('sessions-chart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
	labels: ['November', 'December', 'January', 'Februrary'],
	datasets: [{
		label: 'Sessions/month',
		data: [52334,52294,88619,89553],
		backgroundColor: "rgba(41,182,246,.6)",
		borderWidth: "1",
		borderColor: "#fff",
	}]
}
});
var ctx = document.getElementById("users-chart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["US", "Germany", "UK", "Canada", "Sweden", "Everyone Else"],
    datasets: [{
      backgroundColor: [
        "#29B6F6",
        "#03A9F4",
        "#039BE5",
        "#0288D1",
        "#0277BD",
        "#01579B"
      ],
      data: [109883, 28779, 18801, 16589, 14640, 94108]
    }]
  }
});