Chart.defaults.global.defaultFontColor = "#f8f8f2";
Chart.defaults.global.defaultFontFamily = "'Roboto', 'Arial', sans serif";
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
    beginAtZero:true,
    userCallback: function(value, index, values) {
        value = value.toString();
        value = value.split(/(?=(?:...)*$)/);
        value = value.join(',');
        return value;
    }
}
});
/* 7.2 - Tomb of the Sarengheti*/
var ctx = document.getElementById("dungeons_season_7_2_0").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [102468,15358,142082,127514,139210,135565,132119,142743,42465,66306,145297,116854],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [24217,22322,23871 ,33878,19468,11793,43266,19166,44328,38790,15971,22610],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
/* 7.2.5 */
var ctx = document.getElementById("dungeons_season_7_2_5").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [115908,17408,170488,140207,188550,168996,154341,184503,24636,56838,160033,158404],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [77449,44581,82870,107671,70902,46365,120202,78102,72099,65187,64915,70960],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],  
        }]
    },
});
/* 7.3.0 - Argus */
var ctx = document.getElementById("dungeons_season_7_3_0").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","SEAT","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [118909,76980,181397,168271,195336,158370,183291,200537,80719,152513,14776,155393,157094],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [55751,40465,65764,77986,55013,31408,91894,58895,51186,38563,35780,46958,58160],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
var ctx = document.getElementById("dungeons_season_7_3_2").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","SEAT","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [366344,330263,574760,559622,647408,468805,637165,692870,291292,630951,68772,430743,524247],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [175148,145369,224668,254099,195318,101381,301314,191506,173064,131049,110601,147795,185860],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
var ctx = document.getElementById("dungeons_season_post_legion").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","SEAT","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [26099,25153,39265,39597,46642,33184,48468,47471,23618,44477,5385,25418,39011],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [8054,6721,11019 ,12086,8563,4731,14336,8828,7815,5705,4933,6410,7488],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
var ctx = document.getElementById("dungeons_season_pre_bfa").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","SEAT","ARC","VOTW"],
        datasets: [{
            label: 'In Time',
            data: [19817,14898,30469,33489,33109,21156,33387,30698,16611,20298,3691,19536,29126],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Timer Failed',
            data: [4404,4774,5038,4332,3891,1814,7919,5529,4660,4959,2291,3836,3280],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
var ctx = document.getElementById('totals').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: ["BRH","COEN","COS","DHT","EOA","HOV","MOS","NL","LOWR","UPPR","SEAT","ARC","VOTW"],
            datasets: [{
                label: 'Total successes',
                data: [749545,480060,1138461,1068700,1250255,986076,1188771,1298822,479341,971383,92624,936420,1024736],
                backgroundColor: [
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                    'rgba(80,250,123,1)',
                ],
            }, {
                label: 'Total failures',
                data: [345023,264232,413230,490052,353155,197492,578931,362026,353152,284253,153605,285885,348358],
                backgroundColor: [
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                    'rgba(255,85,85,1)',
                ],
            }],
        },
        options: {
            responsive: true
        }
    });
var ctx = document.getElementById('grandtotals').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'pie',
        data: {
            labels: [
                'Total successes',
                'Total failures',
            ],
            datasets: [{
                data: [11665194,4429394],
                backgroundColor: [
                    'rgba(80,250,123,1)',
                    'rgba(255,85,85,1)',
                ],
            }],
        },
        options: {
            responsive: true
        }
    });
/*
var ctx = document.getElementById('grandtotals-all').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'pie',
        data: {
            labels: [
                'Fortified',
                'Tyrannical',
            ],
            datasets: [{
                data: [8402350,7690294],
                backgroundColor: [
                    'rgba(255,85,85,1)',
                    'rgba(139,233,253,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  //get the concerned dataset
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  //calculate the total of this data set
                  var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue + currentValue;
                  });
                  //get the current items value
                  var currentValue = dataset.data[tooltipItem.index];
                  //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                  var percentage = Math.floor(((currentValue/total) * 100)+0.5);

                  return percentage + "%";
                }
              }
            } 
        }
    });
*/
/* line chart for keystone completion*/
var ctx = document.getElementById('season_7_2_0').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"],
        datasets: [{
            label: 'Fortified - Success',
            data: [176166,125292,107473,72493,48978,38022,24485,15044,9102,4917,2368,990,370,138,46,18,2],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,1)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,1)'],
            fill: false,
            data: [211113,144631,118190,76645,48618,36010,22610,12619,6805,3056,1228,379,130,38,5]
        }, { 
            label: 'Fortified - Failure',
            backgroundColor: ['rgba(255,85,85,.1'],
            borderColor: ['rgba(255,85,85,.1)'],
            data: [26985,25982,22052,15571,13943,14293,10590,8248,6539,4952,3351,1671,788,304,112,43,19,1],
            fill: false,
        }, {
            label: 'Tyrannical - Failure',
            backgroundColor: ['rgba(139,233,253,.1)'],
            borderColor: ['rgba(139,233,253,.1)'],
            data: [33995,31562,25443,16392,13705,13683,10003,7397,5378,3478,2009,815,259,91,23,3],
            fill: false,
        }

        ]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total runs'
                }
            }]
        }
    }
});
var ctx = document.getElementById('season_7_2_5').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],
        datasets: [{
            label: 'Fortified - Success',
            data: [121580,105713,85263,82908,121018,164582,90219,45960,20870,9074,3333,1053,228,28,2],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,.65)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,.65)'],
            fill: false,
            data: [93358,88215,80193,77989,104056,150548,59395,23174,8090,2509,690,213,45,6]
        }, {
            label: 'Fortified - Failure',
            data: [39099,38091,36916,42447,64621,121830,85012,45754,27676,14485,6712,2234,571,79,10,1],
            fill: false,
        }, {
            label: 'Tyrannical - Failure',
            data: [24016,26319,28749,33460,52070,110386,55989,24177,12423,5537,2024,467,127,20,1],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total runs'
                }
            }]
        }
    }
});
/*
var ctx = document.getElementById("tyr_or_fort").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["Fortified","Tyrannical"],
        datasets: [{
            label: 'Successes',
            data: [5977053, 5688043],
            backgroundColor: [
                'rgba(80,250,123,1)',
                'rgba(80,250,123,1)',
            ],
        },{
            label: 'Failures',
            data: [2425297,2002251],
            backgroundColor: [
                'rgba(255,85,85,1)',
                'rgba(255,85,85,1)',
            ],
        }]
    },
});
*/
var ctx = document.getElementById('season_7_3_0').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"],
        datasets: [{
            label: 'Fortified - Success',
            data: [244048,177800,129689,95344,76678,64252,41914,28259,16676,8217,3303,1150,353,62,5],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,.65)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,.65)'],
            fill: false,
            data: [309861,205824,156783,100075,72335,55869,29496,15315,6772,2466,781,223,33,2,1]
        }, {
            label: 'Fortified - Failure',
            data: [57830,51648,42083,37600,36481,39683,32113,25994,18931,11650,5984,2019,557,140,25,2],
            fill: false,
            backgroundColor: ['rgba(255,85,85,.1'],
            borderColor: ['rgba(255,85,85,.1)'],
        }, {
            label: 'Tyrannical - Failure',
            data: [65972,58754,49834,36838,34747,35937,26885,17863,10611,5132,1918,482,99,11],
            fill: false,
            backgroundColor: ['rgba(139,233,253,.1)'],
            borderColor: ['rgba(139,233,253,.1)'],
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total Runs'
                }
            }]
        }
    }
});
var ctx = document.getElementById('season_7_3_2').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        datasets: [{
            label: 'Fortified - Success',
            data: [181436,168570,165526,192189,310218,813211,460355,281024,197712,142627,109425,72080,45955,27163,14706,6794,2638,720,107,9],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,.65)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,.65)'],
            fill: false,
            data: [184108,168679,165314,183014,304081,897608,484075,260904,160354,93361,62393,34295,18741,9110,3404,1057,237,41,1]
        }, {
            label: 'Fortified - Failure',
            data: [50890,56110,62564,79507,123070,231005,166051,108099,92998,84697,79081,59914,42176,26275,13632,6115,2159,617,116,9,1],
            fill: false,
            backgroundColor: ['rgba(255,85,85,.1'],
            borderColor: ['rgba(255,85,85,.1)'],
        }, {
            label: 'Tyrannical - Failure',
            data: [47550,53332,59902,71634,111117,213401,151524,94464,74282,59057,48436,31505,19369,10408,4327,1367,352,53,6],
            fill: false,
            backgroundColor: ['rgba(139,233,253,.1)'],
            borderColor: ['rgba(139,233,253,.1)'],
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total Runs'
                }
            }]
        }
    }
});
var ctx = document.getElementById('season_post_legion').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        datasets: [{
            label: 'Fortified - Success',
            data: [17207,16898,16486,18194,25477,77131,42179,23647,16299,12039,10198,7818,5654,3907,2563,1541,755,312,110,26,1],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,.65)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,.65)'],
            fill: false,
            data: [10033,9695,9262,9527,12508,40597,21958,11177,7236,4565,3491,2238,1440,895,451,198,60,12,2,1]
        }, {
            label: 'Fortified - Failure',
            data: [3222,3951,4451,5204,7064,11321,8067,5393,4830,4528,4728,3992,3454,2623,1795,1036,488,182,54,10,2],
            fill: false,
            backgroundColor: ['rgba(255,85,85,.1'],
            borderColor: ['rgba(255,85,85,.1)'],
        }, {
            label: 'Tyrannical - Failure',
            data: [1621,1961,2095,2440,3119,4944,3488,2195,1870,1693,1513,1194,946,583,385,177,54,14,1,1],
            fill: false,
            backgroundColor: ['rgba(139,233,253,.1)'],
            borderColor: ['rgba(139,233,253,.1)'],
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total Runs'
                }
            }]
        }
    }
});
var ctx = document.getElementById('season_pre_bfa').getContext('2d');
var myChart = new Chart(ctx,{
    type: 'line',
    data: {
        labels: ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
        datasets: [{
            label: 'Fortified - Success',
            data: [8078,8072,8127,8571,10499,22130,14904,9658,7188,5313,4743,3630,3084,2322,1679,1166,735,439,216,88,21,2],
            backgroundColor: ['rgba(255,85,85,1'],
            borderColor: ['rgba(255,85,85,.65)'],
            fill: false,
        }, {
            label: 'Tyrannical - Success',
            backgroundColor: ['rgba(139,233,253,1)'],
            borderColor: ['rgba(139,233,253,.65)'],
            fill: false,
            data: [12902,13678,13800,16236,19497,35935,23773,15273,10989,7443,6007,4002,2685,1618,951,467,199,62,13,1]
        }, {
            label: 'Fortified - Failure',
            data: [1059,1225,1437,1568,1795,2839,2121,1542,1340,1130,1175,971,987,895,680,497,334,181,85,27,15,1],
            fill: false,
            backgroundColor: ['rgba(255,85,85,.1'],
            borderColor: ['rgba(255,85,85,.1)'],
        }, {
            label: 'Tyrannical - Failure',
            data: [1771,2037,2262,2594,3402,5231,3851,2697,2519,1980,1881,1542,1180,906,489,274,129,34,10,1],
            fill: false,
            backgroundColor: ['rgba(139,233,253,.1)'],
            borderColor: ['rgba(139,233,253,.1)'],
        }]
    },
    options: {
        responsive: true,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Keystone level'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Total Runs'
                }
            }]
        }
    }
});
/* comp stuff */
var ctx = document.getElementById("specs_7_3_2").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["Blood Death Knight","Havoc Demon Hunter","Vengeance Demon Hunter","Balance Druid","Restoration Druid","Marksmanship Hunter","Beast Mastery Hunter","Fire Mage","WindWalker Monk","Holy Paladin","Retribution Paladin","Protection Paladin","Assassination Rogue","Elemental Shaman","Affliction Warlock"],
        datasets: [{
            label: 'Presence',
            data: [126444,58048,16888,43134,78209,50951,6905,23508,77485,67091,11638,1968,20883,6545,136803],
            backgroundColor: [
            'rgba(196,31,59,1)',    //dk
            'rgba(163,48,201,1)',   //dh
            'rgba(163,48,201,1)',   //dh
            'rgba(255,125,10,1)',   //druid
            'rgba(255,125,10,1)',   //druid
            'rgba(171,212,115,1)',  //hunter
            'rgba(171,212,115,1)',  //hunter
            'rgba(64,199,235,1)',   //mage
            'rgba(0,255,150,1)',    //monk
            'rgba(245,140,186,1)',  //paladin
            'rgba(245,140,186,1)',  //paladin
            'rgba(245,140,186,1)',  //paladin
            'rgba(255,245,105,1)',  //rogue
            'rgba(0,112,222,1)',    //shaman
            'rgba(135,135,237,1)',  //warlock

            ],
        }],
    }, options: {
        scales:{
            xAxes: [{
                ticks: {
                    autoSkip: false
                }
        }]
        },
        legend:{
            display: false,
        }
    }
});
/* comp stuff */
var ctx = document.getElementById("specs_post_legion").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["Blood Death Knight","Havoc Demon Hunter","Vengeance Demon Hunter","Balance Druid","Restoration Druid","Marksmanship Hunter","Beast Mastery Hunter","Fire Mage","WindWalker Monk","Holy Paladin","Retribution Paladin","Assassination Rogue","Elemental Shaman","Affliction Warlock"],
        datasets: [{
            label: 'Presence',
            data: [12485,4790,1261,5255,6188,3588,817,3297,8323,7558,868,2280,190,11830],
            backgroundColor: [
            'rgba(196,31,59,1)',    //dk
            'rgba(163,48,201,1)',   //dh
            'rgba(163,48,201,1)',   //dh
            'rgba(255,125,10,1)',   //druid
            'rgba(255,125,10,1)',   //druid
            'rgba(171,212,115,1)',  //hunter
            'rgba(171,212,115,1)',  //hunter
            'rgba(64,199,235,1)',   //mage
            'rgba(0,255,150,1)',    //monk
            'rgba(245,140,186,1)',  //paladin
            'rgba(245,140,186,1)',  //paladin
            'rgba(255,245,105,1)',  //rogue
            'rgba(0,112,222,1)',    //shaman
            'rgba(135,135,237,1)',  //warlock
            ],
        }],
    }, options: {
        scales:{
            xAxes: [{
                ticks: {
                    autoSkip: false
                }
        }]
        },
        legend:{
            display: false,
            position: 'left',
        }
    }
});
var ctx = document.getElementById("specs_pre_bfa").getContext('2d');
var myChart = new Chart(ctx,{
    type: 'bar',
    data: {
        labels: ["Blood Death Knight","Havoc Demon Hunter","Vengeance Demon Hunter","Balance Druid","Restoration Druid","Beast Mastery Hunter","Frost Mage","WindWalker Monk","Mistweaver Monk","Holy Paladin","Retribution Paladin","Protection Paladin","Discipline Priest","Holy Priest","Shadow Priest","Assassination Rogue","Outlaw Rogue","Affliction Warlock","Fury Warrior"],
        datasets: [{
            label: 'Presence',
            data: [4251,4567,165,888,2371,1333,2172,159,74,1269,421,151,773,80,78,1104,360,1911,708],
            backgroundColor: [
            'rgba(196,31,59,1)',    //dk
            'rgba(163,48,201,1)',   //dh
            'rgba(163,48,201,1)',   //dh
            'rgba(255,125,10,1)',   //druid
            'rgba(255,125,10,1)',   //druid
            'rgba(171,212,115,1)',  //hunter
            'rgba(64,199,235,1)',   //mage
            'rgba(0,255,150,1)',    //monk
            'rgba(0,255,150,1)',    //monk
            'rgba(245,140,186,1)',  //paladin
            'rgba(245,140,186,1)',  //paladin
            'rgba(245,140,186,1)',  //paladin
            'rgba(255,255,255,1)',  //priest
            'rgba(255,255,255,1)',  //priest
            'rgba(255,255,255,1)',  //priest
            'rgba(255,245,105,1)',  //rogue
            'rgba(255,245,105,1)',  //rogue
            'rgba(135,135,237,1)',  //warlock
            'rgba(199,156,110,1)',  //warrior

            ],
        }],
    }, options: {
        scales:{
            xAxes: [{
                ticks: {
                    autoSkip: false
                }
        }]
        },
        legend:{
            display: false,
            position: 'left',
        }
    }
});
var ctx = document.getElementById('comps_7_3_2_10_14').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [682,609,553,552,536],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_post_legion_10_14').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [53,53,53,49,46],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_pre_bfa_10_14').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [31,29,27,26,26],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_7_3_2_15_19').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [2470,2041,1937,1867,1775],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_post_legion_15_19').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [206,155,137,129,125],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_pre_bfa_15_19').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [65,60,52,52,51],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_7_3_2_20').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [4893,3567,2816,2641,2459],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_post_legion_20').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [857,483,370,361,280],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });
var ctx = document.getElementById('comps_pre_bfa_20').getContext('2d');
var myChart = new Chart(ctx,{
        type: 'bar',
        data: {
            labels: [
                'Group 1',
                'Group 2',
                'Group 3',
                'Group 4',
                'Group 5'
            ],
            datasets: [{
                data: [82,72,62,61,60],
                backgroundColor: [
                'rgba(98,114,164,1)', 
                'rgba(255,184,108,1)',
                'rgba(255,121,198,1)',
                'rgba(189,147,249,1)',
                'rgba(241,250,140,1)',
                ],
            }],
        },
        options: {
            responsive: true,
            legend:{
                display: false,
            }
        }
    });