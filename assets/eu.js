var d = new Date();

var oneday = 24*60*60*1000;
var firstDate = new Date(Date.UTC(2017, 2, 29, 7, 0, 0));
var secondDate = d;

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneday)));

var weeks = Math.floor(diffDays/7);


var week = (weeks%10) + 1;
var nextweek;
var weekafternext;

if (week == 9){

	nextweek = 10;
	weekafternext = 1;

}

else if(week == 10){

	nextweek = 1;
	weekafternext = 2;
}
else {

	nextweek = week + 1;
	weekafternext = week + 2;
}

var tw1 = document.getElementById("sched").rows[week].cells[0].innerHTML;
var tw2 = document.getElementById("sched").rows[week].cells[1].innerHTML;
var tw3 = document.getElementById("sched").rows[week].cells[2].innerHTML;


var nw1 = document.getElementById("sched").rows[nextweek].cells[0].innerHTML;
var nw2 = document.getElementById("sched").rows[nextweek].cells[1].innerHTML;
var nw3 = document.getElementById("sched").rows[nextweek].cells[2].innerHTML;

var wan1 = document.getElementById("sched").rows[weekafternext].cells[0].innerHTML;
var wan2 = document.getElementById("sched").rows[weekafternext].cells[1].innerHTML;
var wan3 = document.getElementById("sched").rows[weekafternext].cells[2].innerHTML;



document.getElementById("thisweekeu").innerHTML = "<span class=\"title__intro\">EU</span>" + tw1 + ", " + tw2 + ", " + tw3;
document.getElementById("nextweekeu").innerHTML = "<span class=\"title__intro\">EU</span>" + nw1 + ", " + nw2 + ", " + nw3;
document.getElementById("weekafternexteu").innerHTML = "<span class=\"title__intro\">EU</span>" + wan1 + ", " + wan2 + ", " + wan3;
