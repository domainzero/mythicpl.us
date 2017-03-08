var artifactLevelCost = {
	1:  [ 100, 100 ],
	2:  [ 300, 400 ],
	3:  [ 325, 725 ],
	4:  [ 350, 1075 ],
	5:  [ 375, 1450 ],
	6:  [ 400, 1850 ],
	7:  [ 425, 2275 ],
	8:  [ 450, 3250 ],
	9:  [ 525, 3875 ],
	10: [ 625, 4625 ],
	11: [ 750, 4625 ],
	12: [ 875, 5500 ],
	13: [ 1000, 6500 ],
	14: [ 6840, 13340 ],
	15: [ 8830, 22170 ],
	16: [ 11280, 33450 ],
	17: [ 14400, 47850 ],
	18: [ 18620, 66470 ],
	19: [ 24000, 90470 ],
	20: [ 30600, 121070 ],
	21: [ 39520, 160590 ],
	22: [ 50880, 211470 ],
	23: [ 64800, 276270 ],
	24: [ 82500, 358770 ],
	25: [ 105280, 464050 ],
	26: [ 138650, 602700 ],
	27: [ 182780, 785480 ],
	28: [ 240870, 1026350 ],
	29: [ 315520, 1341870 ],
	30: [ 417560, 1759430 ],
	31: [ 546000, 2305430 ],
	32: [ 718200, 3023630 ],
	33: [ 946660, 3970290 ],
	34: [ 1245840, 5216130 ],
	35: [ 1635200, 6851330 ],
	36: [ 1915000, 8766330 ],
	37: [ 2010000, 10776330 ],
	38: [ 2110000, 12886330 ],
	39: [ 2215000, 15101330 ],
	40: [ 2325000, 17426330 ],
	41: [ 2440000, 19866330 ],
	42: [ 2560000, 22426330 ],
	43: [ 2690000, 25116330 ],
	44: [ 2825000, 27941330 ],
	45: [ 2965000, 30906330 ],
	46: [ 3115000, 34021330 ],
	47: [ 3270000, 37291330 ],
	48: [ 3435000, 40726330 ],
	49: [ 3605000, 44331330 ],
	50: [ 3785000, 48116330 ],
	51: [ 3975000, 52091330 ],
	52: [ 4175000, 56266330 ],
	53: [ 4385000, 60651330 ],
	54: [ 4605000, 65256330 ],
	55: [ 4835000, 70091330 ], 
	56: [ 5075000, 75166330 ],
	57: [ 6000000, 81166330 ],
	58: [ 6000000, 87166330 ],
	59: [ 6000000, 93166330 ],
	60: [ 6000000, 99166330 ],
	61: [ 6000000, 105166330 ],
	62: [ 6000000, 111166330 ],
	63: [ 6000000, 117166330 ],
	64: [ 6000000, 123166330 ],
	65: [ 6000000, 129166330 ],
	66: [ 6000000, 135166330 ],
	67: [ 6000000, 141166330 ],
	68: [ 6000000, 147166330 ],
	69: [ 6000000, 153166330 ],
	70: [ 6000000, 159166330 ],
	71: [ 6000000, 165166330 ],
	72: [ 6000000, 171166330 ],
	73: [ 6000000, 177166330 ],
	74: [ 6000000, 183166330 ],
	75: [ 6000000, 189166330 ],
	76: [ 6000000, 195166330 ],
	77: [ 6000000, 201166330 ],
	78: [ 6000000, 207166330 ],
	79: [ 6000000, 213166330 ],
	80: [ 6000000, 219166330 ],
	81: [ 6000000, 225166330 ],
	82: [ 6000000, 231166330 ],
	83: [ 6000000, 237166330 ],
	84: [ 6000000, 243166330 ],
	85: [ 6000000, 249166330 ],
	86: [ 6000000, 255166330 ],
	87: [ 6000000, 261166330 ],
	88: [ 6000000, 267166330 ],
	89: [ 6000000, 273166330 ],
	90: [ 6000000, 279166330 ],
	91: [ 6000000, 285166330 ],
	92: [ 6000000, 291166330 ],
	93: [ 6000000, 297166330 ],
	94: [ 6000000, 303166330 ],
	95: [ 6000000, 309166330 ],
	96: [ 6000000, 315166330 ],
	97: [ 6000000, 321166330 ],
	98: [ 6000000, 327166330 ],
	99: [ 6000000, 333166330 ],
	100:[ 6000000, 339166330 ],
	101:[ 6000000, 345166330 ],
	102:[ 6000000, 351166330 ],
	103:[ 6000000, 357166330 ],
	104:[ 6000000, 363166330 ],
	105:[ 6000000, 369166330 ],
	106:[ 6000000, 375166330 ],
	107:[ 6000000, 381166330 ],
	108:[ 6000000, 387166330 ],
	109:[ 6000000, 393166330 ],
	110:[ 6000000, 399166330 ],
	111:[ 6000000, 405166330 ],
}; 
var artifactKnowledge = {
	0:  1,
	1:  1.25,
	2:  1.5,
	3:  1.9,
	4:  2.4,
	5:  3,
	6:  3.75,
	7:  4.75,
	8:  6,
	9:  7.5,
	10: 9.5,
	11: 12,
	12: 15,
	13: 18.75,
	14: 23.5,
	15: 29.5,
	16: 37,
	17: 46.5,
	18: 58,
	19: 73,
	20: 91,
	21: 114,
	22: 143,
	23: 179,
	24: 224,
	25: 250,
	26: 1000,
	27: 1300,
	28: 1700,
	29: 2200,
	30: 2900,
	31: 3800,
	32: 4900,
	33: 6400,
	34: 8300,
	35: 10800,
	36: 14000,
	37: 18200,
	38: 23700,
	39: 30800,
	40: 40000,
	41: 52000,
	42: 67600,
	43: 87900,
	44: 114300,
	45: 148600,
	46: 193200,
	47: 251200,
	48: 326600,
	49: 424500,
	50: 552000,
};
var apRewards = {
	T1: 500,
	T2: 800,
	T3: 1000, 
	T4: 1200,
}
var ARTIFACT_LEVEL_35 = 35;
var ARTIFACT_LEVEL_54 = 54;
var MAX_ARTIFACT_LEVEL = 111;
var MAX_ARTIFACT_KNOWLEDGE = 50;

var currentArtifactLevel = 0;           // user input
var currentArtifactKnowledge = 0;		// user input
var currentAPinLevel = 0;				// user input

var currentTotalAP = 0;
var maxLevelAP = artifactLevelCost[MAX_ARTIFACT_LEVEL][1];

var apToLevel = 0;
var apToMax = 0;
var apTo35 = 0;
var apTo54 = 0;
var akMultiplier = 0;

var show35Info = 0;
var show54Info = 0;

var mplusT1toLevel = 0;
var mplusT2toLevel = 0;
var mplusT3toLevel = 0;
var mplusT4toLevel = 0;

var mplusT1to35 = 0;
var mplusT2to35 = 0;
var mplusT3to35 = 0;
var mplusT4to35 = 0;

var mplusT1to54 = 0;
var mplusT2to54 = 0;
var mplusT3to54 = 0;
var mplusT4to54 = 0;

var mplusT1toMax = 0;
var mplusT2toMax = 0;
var mplusT3toMax = 0;
var mplusT4toMax = 0;

//helper functions
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}
// calculate current total AP in weapon
function CalculateAPTotal () {
	currentTotalAP = Number(artifactLevelCost[currentArtifactLevel][1]) + Number(currentAPinLevel);
}
//calculate AP to next level up
function CalculateAPtoLevel () {
	if (currentArtifactLevel < MAX_ARTIFACT_LEVEL) {
		apToLevel = Number(artifactLevelCost[Number(currentArtifactLevel) + 1][0]) - Number(currentAPinLevel);
	}
	else {
		apToLevel = 0; // should already be 0, but what the hell
	}
}
//calculate AP to max level. 111 on PTR/7.2
function CalculateAPtoMax () {
	if (currentArtifactLevel < MAX_ARTIFACT_LEVEL) {
		apToMax = Number(maxLevelAP) - Number(currentTotalAP);	
	}
	else {
		apToMax = 0; // again, should be 0, but just to be sure.
	}
}
// Calculate AP to artifact level 35
function CalculateAPto35 () {
	if (currentArtifactLevel < ARTIFACT_LEVEL_35) {
		apTo35 = Number(artifactLevelCost[Number(ARTIFACT_LEVEL_35)][1]) - Number(currentTotalAP);
		show35Info = 1;
	}
	else {
		apTo35 = 0; // again, should be 0, but just to be sure.
	}
}
// Calculate AP to current artifact max, 54
function CalculateAPto54 () {
	if (currentArtifactLevel < ARTIFACT_LEVEL_54) {
		apTo54 = Number(artifactLevelCost[Number(ARTIFACT_LEVEL_54)][1]) - Number(currentTotalAP);
		show54Info = 1;
	}
	else {
		apTo54 = 0; // again, should be 0, but just to be sure.
	}
}
//Get the AK multiplier
function GetAKMultiplier () {
	akMultiplier = artifactKnowledge[currentArtifactKnowledge];
}
//DO THE MATH
function CalculateRuns () {
	var t1ScaledRewards = apRewards["T1"] * akMultiplier;
	var t2ScaledRewards = apRewards["T2"] * akMultiplier;
	var t3ScaledRewards = apRewards["T3"] * akMultiplier;
	var t4ScaledRewards = apRewards["T4"] * akMultiplier;
	// Calculate M+ runs to level
	mplusT1toLevel = Math.round((apToLevel / t1ScaledRewards) + .5);
	mplusT2toLevel = Math.round((apToLevel / t2ScaledRewards) + .5);
	mplusT3toLevel = Math.round((apToLevel / t3ScaledRewards) + .5);
	mplusT4toLevel = Math.round((apToLevel / t4ScaledRewards) + .5);
	// Calculate M+ runs to 35
	mplusT1to35 = Math.round((apTo35 / t1ScaledRewards) + .5);
	mplusT2to35 = Math.round((apTo35 / t2ScaledRewards) + .5);
	mplusT3to35 = Math.round((apTo35 / t3ScaledRewards) + .5);
	mplusT4to35 = Math.round((apTo35 / t4ScaledRewards) + .5);
	// Calculate M+ runs to 54
	mplusT1to54 = Math.round((apTo54 / t1ScaledRewards) + .5);
	mplusT2to54 = Math.round((apTo54 / t2ScaledRewards) + .5);
	mplusT3to54 = Math.round((apTo54 / t3ScaledRewards) + .5);
	mplusT4to54 = Math.round((apTo54 / t4ScaledRewards) + .5);
	// Calculate M+ runs to max
	mplusT1toMax = Math.round((apToMax / t1ScaledRewards) + .5);
	mplusT2toMax = Math.round((apToMax / t2ScaledRewards) + .5);
	mplusT3toMax = Math.round((apToMax / t3ScaledRewards) + .5);
	mplusT4toMax = Math.round((apToMax / t4ScaledRewards) + .5);
}
function GetUserInputFromPage () {
	currentArtifactLevel = document.getElementById("currentlvl").value;
	currentArtifactKnowledge = document.getElementById("currentak").value;
	currentAPinLevel = document.getElementById("currentap").value;
}
function UpdateResultsToPage () {
	// totals
	document.getElementById("totalap").innerText= numberWithCommas(currentTotalAP);
	document.getElementById("tolevel").innerText= numberWithCommas(apToLevel);
	document.getElementById("tomax").innerText= numberWithCommas(apToMax);
	// to 35
	document.getElementById("m23to35").innerText= numberWithCommas(mplusT1to35);
	document.getElementById("m46to35").innerText= numberWithCommas(mplusT2to35);
	document.getElementById("m79to35").innerText= numberWithCommas(mplusT3to35);
	document.getElementById("m10to35").innerText= numberWithCommas(mplusT4to35);
	// to 54
	document.getElementById("m23to54").innerText= numberWithCommas(mplusT1to54);
	document.getElementById("m46to54").innerText= numberWithCommas(mplusT2to54);
	document.getElementById("m79to54").innerText= numberWithCommas(mplusT3to54);
	document.getElementById("m10to54").innerText= numberWithCommas(mplusT4to54);
	// to level
	document.getElementById("m23lvl").innerText= numberWithCommas(mplusT1toLevel);
	document.getElementById("m46lvl").innerText= numberWithCommas(mplusT2toLevel);
	document.getElementById("m79lvl").innerText= numberWithCommas(mplusT3toLevel);
	document.getElementById("m10lvl").innerText= numberWithCommas(mplusT4toLevel);
	// to max
	document.getElementById("m23max").innerText= numberWithCommas(mplusT1toMax);
	document.getElementById("m46max").innerText= numberWithCommas(mplusT2toMax);
	document.getElementById("m79max").innerText= numberWithCommas(mplusT3toMax);
	document.getElementById("m10max").innerText= numberWithCommas(mplusT4toMax);
}
function At35OrNot () {
	if (apTo35 >= 1) {
		document.getElementById("mto35").style.visibility = "visible";
		document.getElementById("m23to35").style.visibility = "visible";
		document.getElementById("m46to35").style.visibility = "visible";
		document.getElementById("m79to35").style.visibility = "visible";
		document.getElementById("m10to35").style.visibility = "visible";
		document.getElementById("mto35").style.display = "table-cell";
		for (i=0; i < 5; i++){
		document.getElementById("hideme" + i).style.display= "table-cell";
	}
}
	else if (apTo35 < 1) {
		document.getElementById("mto35").style.visibility = "collapse";
		document.getElementById("m23to35").style.visibility = "collapse";
		document.getElementById("m46to35").style.visibility = "collapse";
		document.getElementById("m79to35").style.visibility = "collapse";
		document.getElementById("m10to35").style.visibility = "collapse";
		document.getElementById("mto35").style.display = "none";
		for (i=0; i < 5; i++){
		document.getElementById("hideme" + i).style.display= "none";	
		}
	}
}
function At54OrNot () {
	if (apTo54 >= 1) {
		document.getElementById("mto54").style.visibility = "visible";
		document.getElementById("m23to54").style.visibility = "visible";
		document.getElementById("m46to54").style.visibility = "visible";
		document.getElementById("m79to54").style.visibility = "visible";
		document.getElementById("m10to54").style.visibility = "visible";
		document.getElementById("mto54").style.display = "table-cell";
		for (i=0; i < 5; i++){
		document.getElementById("hidemeb" + i).style.display= "table-cell";
	}
}
	else if (apTo54 < 1) {
		document.getElementById("mto54").style.visibility = "collapse";
		document.getElementById("m23to54").style.visibility = "collapse";
		document.getElementById("m46to54").style.visibility = "collapse";
		document.getElementById("m79to54").style.visibility = "collapse";
		document.getElementById("m10to54").style.visibility = "collapse";
		document.getElementById("mto54").style.display = "none";
		for (i=0; i < 5; i++){
		document.getElementById("hidemeb" + i).style.display= "none";	
		}
	}
}
// call all the functions
function OnClickCalculate () {
	GetUserInputFromPage();	
	CalculateAPTotal();
	CalculateAPto35();
	CalculateAPto54();
	CalculateAPtoLevel();
	CalculateAPtoMax();
	GetAKMultiplier();
	CalculateRuns();
	UpdateResultsToPage();
	document.getElementById("maincalcs").style.display = "flex";
	if (show35Info = 1){
		At35OrNot();
	}
	else if (show35Info = 0){
		At54OrNot();
	}
}
