var artifactLevelCost = {
	1:   [ 100, 100 ],
	2:   [ 300, 400 ],
	3:   [ 325, 725 ],
	4:   [ 350, 1075 ],
	5:   [ 375, 1450 ],
	6:   [ 400, 1850 ],
	7:   [ 425, 2275 ],
	8:   [ 450, 2725 ],
	9:   [ 525, 3250 ],
	10:  [ 625, 3875 ],
	11:  [ 750, 4625 ],
	12:  [ 875, 5500 ],
	13:  [ 1000, 6500 ],
	14:  [ 6840, 13340 ],
	15:  [ 8830, 22170 ],
	16:  [ 11280, 33450 ],
	17:  [ 14400, 47850 ],
	18:  [ 18620, 66470 ],
	19:  [ 24000, 90470 ],
	20:  [ 30600, 121070 ],
	21:  [ 39520, 160590 ],
	22:  [ 50880, 211470 ],
	23:  [ 64800, 276270 ],
	24:  [ 82500, 358770 ],
	25:  [ 105280, 464050 ],
	26:  [ 138650, 602700 ],
	27:  [ 182780, 785480 ],
	28:  [ 240870, 1026350 ],
	29:  [ 315520, 1341870 ],
	30:  [ 417560, 1759430 ],
	31:  [ 546000, 2305430 ],
	32:  [ 718200, 3023630 ],
	33:  [ 946660, 3970290 ],
	34:  [ 1245840, 5216130 ],
	35:  [ 1635200, 6851330 ],
	36:  [ 1915000, 8766330 ],
	37:  [ 10000000, 18766330 ],
	38:  [ 13000000, 31766330 ],
	39:  [ 17000000, 48766330 ],
	40:  [ 22000000, 70766330 ],
	41:  [ 29000000, 99766330 ],
	42:  [ 38000000, 137766330 ],
	43:  [ 49000000, 186766330 ],
	44:  [ 64000000, 250766330 ],
	45:  [ 83000000, 333766330 ],
	46:  [ 108000000, 441766330 ],
	47:  [ 140000000, 581766330 ],
	48:  [ 182000000, 763766330 ],
	49:  [ 237000000, 1000766330 ],
	50:  [ 308000000, 1308766330 ],
	51:  [ 400000000, 1708766330 ],
	52:  [ 520000000, 2228766330 ],
	53:  [ 676000000, 2904766330 ],
	54:  [ 880000000, 3784766330 ],
	55:  [ 1144000000, 4928766330 ],
	56:  [ 1488000000, 6416766330 ],
	57:  [ 1936000000, 8352766330 ],
	58:  [ 2516000000, 10868766330 ],
	59:  [ 3272000000, 14140766330 ],
	60:  [ 4252000000, 18392766330 ],
	61:  [ 5528000000, 23920766330 ],
	62:  [ 7188000000, 31108766330 ],
	63:  [ 9344000000, 40452766330 ],
	64:  [ 12148000000, 52600766330 ],
	65:  [ 15792000000, 68392766330 ],
	66:  [ 20528000000, 88920766330 ],
	67:  [ 26688000000, 115608766330 ],
	68:  [ 34696000000, 150304766330 ],
	69:  [ 45104000000, 195408766330 ],
	70:  [ 58636000000, 254044766330 ],
	71:  [ 76228000000, 330272766330 ],
	72:  [ 99096000000, 429368766330 ],
	73:  [ 128824000000, 558192766330 ],
	74:  [ 167472000000, 725664766330 ],
	75:  [ 217712000000, 943376766330 ],
	76:  [ 283024000000, 1226400766330 ],
	77:  [ 367932000000, 1594332766330 ],
	78:  [ 478312000000, 2072644766330 ],
	79:  [ 622000000000, 2694644766330 ],
	80:  [ 808000000000, 3502644766330 ],
	81:  [ 1050000000000, 4552644766330 ],
	82:  [ 1370000000000, 5922644766330 ],
	83:  [ 1780000000000, 7702644766330 ],
	84:  [ 2310000000000, 10012644766330 ],
	85:  [ 3000000000000, 13012644766330 ],
	86:  [ 3900000000000, 16912644766330 ],
	87:  [ 5070000000000, 21982644766330 ],
	88:  [ 6590000000000, 28572644766330 ],
	89:  [ 8570000000000, 37142644766330 ],
	90:  [ 11100000000000, 48242644766330 ],
	91:  [ 14500000000000, 62742644766330 ],
	92:  [ 18800000000000, 81542644766330 ],
	93:  [ 24500000000000, 106042644766330 ],
	94:  [ 31800000000000, 137842644766330 ],
	95:  [ 41400000000000, 179242644766330 ],
	96:  [ 53800000000000, 233042644766330 ],
	97:  [ 69900000000000, 302942644766330 ],
	98:  [ 90900000000000, 393842644766330 ],
	99:  [ 118000000000000, 511842644766330 ],
	100: [ 154000000000000, 665842644766330 ],
	101: [ 200000000000000, 865842644766330 ]
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
var ARTIFACT_LEVEL_52 = 52;
var MAX_ARTIFACT_LEVEL = 101;
var MAX_ARTIFACT_KNOWLEDGE = 50;

var currentArtifactLevel = 0;           // user input
var currentArtifactKnowledge = 0;		// user input
var currentAPinLevel = 0;				// user input

var currentTotalAP = 0;
var maxLevelAP = artifactLevelCost[MAX_ARTIFACT_LEVEL][1];

var apToLevel = 0;
var apToMax = 0;
var apTo35 = 0;
var apTo52 = 0;
var akMultiplier = 0;

var show35Info = 0;
var show52Info = 0;

var mplusT1toLevel = 0;
var mplusT2toLevel = 0;
var mplusT3toLevel = 0;
var mplusT4toLevel = 0;

var mplusT1to35 = 0;
var mplusT2to35 = 0;
var mplusT3to35 = 0;
var mplusT4to35 = 0;

var mplusT1to52 = 0;
var mplusT2to52 = 0;
var mplusT3to52 = 0;
var mplusT4to52 = 0;

var mplusT1toMax = 0;
var mplusT2toMax = 0;
var mplusT3toMax = 0;
var mplusT4toMax = 0;

//helper functions
function resetValues(){
	apToLevel = 0;
	apToMax = 0;
	apTo35 = 0;
	apTo52 = 0;
	akMultiplier = 0;
	show35Info = 0;
	show52Info = 0;
	mplusT1toLevel = 0;
	mplusT2toLevel = 0;
	mplusT3toLevel = 0;
	mplusT4toLevel = 0;
	mplusT1to35 = 0;
	mplusT2to35 = 0;
	mplusT3to35 = 0;
	mplusT4to35 = 0;
	mplusT1to52 = 0;
	mplusT2to52 = 0;
	mplusT3to52 = 0;
	mplusT4to52 = 0;
	mplusT1toMax = 0;
	mplusT2toMax = 0;
	mplusT3toMax = 0;
	mplusT4toMax = 0;
}

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
	if (apToLevel < 0){
		apToLevel = 0;
		}
	}
	else {
		apToLevel <= 0; // should already be 0, but what the hell
	}
}
//calculate AP to max level. 101 on PTR/7.2
function CalculateAPtoMax () {
	if (currentArtifactLevel < MAX_ARTIFACT_LEVEL && currentTotalAP < maxLevelAP) {
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
		;
	}
	else {
		apTo35 = 0; // again, should be 0, but just to be sure.
	}
}
// Calculate AP to first concordance point, 52
function CalculateAPto52 () {
	if (currentArtifactLevel < ARTIFACT_LEVEL_52) {
		apTo52 = Number(artifactLevelCost[Number(ARTIFACT_LEVEL_52)][1]) - Number(currentTotalAP);
		show52Info = 1;
	}
	else {
		apTo52 = 0; // again, should be 0, but just to be sure.
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
		if (apToLevel > 0 ){
			mplusT1toLevel = Math.round((apToLevel / t1ScaledRewards) + .5);
			mplusT2toLevel = Math.round((apToLevel / t2ScaledRewards) + .5);
			mplusT3toLevel = Math.round((apToLevel / t3ScaledRewards) + .5);
			mplusT4toLevel = Math.round((apToLevel / t4ScaledRewards) + .5);
		}	
	// Calculate M+ runs to 35
		if (apTo35 > 0){
			mplusT1to35 = Math.round((apTo35 / t1ScaledRewards) + .5);
			mplusT2to35 = Math.round((apTo35 / t2ScaledRewards) + .5);
			mplusT3to35 = Math.round((apTo35 / t3ScaledRewards) + .5);
			mplusT4to35 = Math.round((apTo35 / t4ScaledRewards) + .5);
		}
	// Calculate M+ runs to 52
		if (apTo52 > 0){
			mplusT1to52 = Math.round((apTo52 / t1ScaledRewards) + .5);
			mplusT2to52 = Math.round((apTo52 / t2ScaledRewards) + .5);
			mplusT3to52 = Math.round((apTo52 / t3ScaledRewards) + .5);
			mplusT4to52 = Math.round((apTo52 / t4ScaledRewards) + .5);
		}	
	// Calculate M+ runs to max
		if (apToMax > 0){
			mplusT1toMax = Math.round((apToMax / t1ScaledRewards) + .5);
			mplusT2toMax = Math.round((apToMax / t2ScaledRewards) + .5);
			mplusT3toMax = Math.round((apToMax / t3ScaledRewards) + .5);
			mplusT4toMax = Math.round((apToMax / t4ScaledRewards) + .5);
	}
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
	document.getElementById("m23to35").innerText= mplusT1to35;
	document.getElementById("m46to35").innerText= mplusT2to35;
	document.getElementById("m79to35").innerText= mplusT3to35;
	document.getElementById("m10to35").innerText= mplusT4to35;
	// to 52
	document.getElementById("m23to52").innerText= numberWithCommas(mplusT1to52);
	document.getElementById("m46to52").innerText= numberWithCommas(mplusT2to52);
	document.getElementById("m79to52").innerText= numberWithCommas(mplusT3to52);
	document.getElementById("m10to52").innerText= numberWithCommas(mplusT4to52);
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
/*
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
		/*for (i=0; i < 5; i++){
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
		/*for (i=0; i < 5; i++){
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
		/* for (i=0; i < 5; i++){
		document.getElementById("hidemeb" + i).style.display= "none";	
		}
	}
}
*/
// call all the functions
function OnClickCalculate () {
	resetValues();
	GetUserInputFromPage();	
	CalculateAPTotal();
	CalculateAPto35();
	CalculateAPto52();
	CalculateAPtoLevel();
	CalculateAPtoMax();
	GetAKMultiplier();
	CalculateRuns();
	UpdateResultsToPage();
	document.getElementById("maincalcs").style.display = "flex";
}

