// Get dificulty legends

var dif_easy = translator.get("Easy");
var dif_medium = translator.get("Medium");
var dif_hard = translator.get("Hard");

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml';

		  function init() {
		    Tabletop.init( { key: publicSpreadsheetUrl,
		                     callback: showInfo,
		                     simpleSheet: true } )
		  }

function showInfo(data, tabletop) {
  var totvotes = data["0"].totvotes;
  var newvotes = data["0"].newvotes;
  var boleasy = data["0"].boleasy;
  var bolmedi = data["0"].bolmedi;
  var bolhard = data["0"].bolhard;
  var rageasy = data["0"].rageasy;
  var ragmedi = data["0"].ragmedi;
  var raghard = data["0"].raghard;
  var saneasy = data["0"].saneasy;
  var sanmedi = data["0"].sanmedi;
  var sanhard = data["0"].sanhard;

  var teeeasy = data["0"].teeeasy;
  var teemedi = data["0"].teemedi;
  var teehard = data["0"].teehard;

  var bureasy = data["0"].bureasy;
  var burmedi = data["0"].burmedi;
  var burhard = data["0"].burhard;
  var neceasy = data["0"].neceasy;
  var necmedi = data["0"].necmedi;
  var nechard = data["0"].nechard;
  var voleasy = data["0"].voleasy;
  var volmedi = data["0"].volmedi;
  var volhard = data["0"].volhard;
  var skieasy = data["0"].skieasy;
  var skimedi = data["0"].skimedi;
  var skihard = data["0"].skihard;
  var grieasy = data["0"].grieasy;
  var grimedi = data["0"].grimedi;
  var grihard = data["0"].grihard;
  var quaeasy = data["0"].quaeasy;
  var quamedi = data["0"].quamedi;
  var quahard = data["0"].quahard;
  var expeasy = data["0"].expeasy;
  var expmedi = data["0"].expmedi;
  var exphard = data["0"].exphard;
  var foreasy = data["0"].foreasy;
  var formedi = data["0"].formedi;
  var forhard = data["0"].forhard;
  var tyreasy = data["0"].tyreasy;
  var tyrmedi = data["0"].tyrmedi;
  var tyrhard = data["0"].tyrhard;

  document.getElementById('totvotes').innerHTML = totvotes;
  document.getElementById('newvotes').innerHTML = newvotes;

  window.addEventListener('DOMContentLoaded', init)

  //tier 1 affixes
  
  Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
  var ctx = document.getElementById('bolstering').getContext('2d');
  var chart = new Chart(ctx, {
  	type: 'doughnut',
  	data: {
  		labels: [dif_easy, dif_medium, dif_hard],
  		datasets: [{
  			data: [boleasy, bolmedi, bolhard],
  			backgroundColor: [
  				'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(213, 0, 0, 1)',
            ]
  		},
  		]
  	},
  });

  Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
  var ctx = document.getElementById('raging').getContext('2d');
  var chart = new Chart(ctx, {
  	type: 'doughnut',
  	data: {
  		labels: [dif_easy, dif_medium, dif_hard],
  		datasets: [{
  			data: [rageasy, ragmedi, raghard],
  			backgroundColor: [
  				'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(213, 0, 0, 1)',
            ]
  		},
  		]
  	},
  });

  Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
  var ctx = document.getElementById('sanguine').getContext('2d');
  var chart = new Chart(ctx, {
  	type: 'doughnut',
  	data: {
  		labels: [dif_easy, dif_medium, dif_hard],
  		datasets: [{
  			data: [saneasy, sanmedi, sanhard],
  			backgroundColor: [
  				'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(213, 0, 0, 1)',
            ]
  		},
  		]
  	},
  });

  Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
  var ctx = document.getElementById('teeming').getContext('2d');
  var chart = new Chart(ctx, {
  	type: 'doughnut',
  	data: {
  		labels: [dif_easy, dif_medium, dif_hard],
  		datasets: [{
  			data: [teeeasy, teemedi, teehard],
  			backgroundColor: [
  				'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(213, 0, 0, 1)',
            ]
  		},
  		]
  	},
  });

  Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
  var ctx = document.getElementById('bursting').getContext('2d');
  var chart = new Chart(ctx, {
  	type: 'doughnut',
  	data: {
  		labels: [dif_easy, dif_medium, dif_hard],
  		datasets: [{
  			data: [bureasy, burmedi, burhard],
  			backgroundColor: [
  				'rgba(76, 175, 80, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(213, 0, 0, 1)',
            ]
  		},
  		]
  	},
  });

//tier 2 affixes 

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('necrotic').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [neceasy, necmedi, nechard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('skittish').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [skieasy, skimedi, skihard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('volcanic').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [voleasy, volmedi, volhard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('explosive').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [expeasy, expmedi, exphard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('quaking').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [quaeasy, quamedi, quahard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('grievous').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [grieasy, grimedi, grihard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

//tier 3 affixes

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('fortified').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [foreasy, formedi, forhard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

Chart.defaults.global.defaultFontFamily = "'Roboto Condensed', 'Helvetica', 'Arial', sans-serif";
var ctx = document.getElementById('tyrannical').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: [dif_easy, dif_medium, dif_hard],
		datasets: [{
			data: [tyreasy, tyrmedi, tyrhard],
			backgroundColor: [
				'rgba(76, 175, 80, 1)',
              'rgba(255, 152, 0, 1)',
              'rgba(213, 0, 0, 1)',
          ]
		},
		]
	},
});

}
window.addEventListener('DOMContentLoaded', init)