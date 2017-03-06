//lookatallthisfuckingjs
var Title={
  delay: 200,
  distance: 200,
}

var Reveal ={ 
	delay: 400,
	distance: '90px',
	origin: 'left',
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
}

var Info={
  delay: 1000
}

var Late ={
	delay: 1500,
}
var Later ={
  delay: 3000,
  origin: 'right',
}

window.sr = ScrollReveal();
sr.reveal('#r-title', Title);
sr.reveal('#r-info', Info);
sr.reveal('.chart', Late);
sr.reveal('#r-stats1', Late, 500);
sr.reveal('#r-stats2', Later, 500);
sr.reveal('.arrow', Late);

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
  type: 'pie',
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
/* var ctx = document.getElementById("datachart").getContext('2d');
//var myChart = new Chart(ctx, {
//  type: 'pie',
//  data: {
//    labels: ["/", "/routes", "/calc"],
//    datasets: [{
//      backgroundColor: [
//        "#29B6F6",
//        "#006D9E",
//        "#003048"
//      ],
//      data: [11.45, 53.42, .91]
//    }]
//  }
//});
// uptimeish script
*/
window.onload=function() {
  upTime('feb,14,2017,17:49:00');
}
function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);

  document.getElementById('days').innerText = days;

  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}