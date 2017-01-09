


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
	54: [ 4605000, 65256330 ]
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
	25: 250
};

var apRewards = {
	T1: 500,
	T2: 800,
	T3: 1000, 
	T4: 1200,
}

var MAX_ARTIFACT_LEVEL = 54;
var MAX_ARTIFACT_KNOWLEDGE = 25;

var currentArtifactLevel = 0;           // user input
var currentArtifactKnowledge = 0;		// user input
var currentAPinLevel = 0;				// user input

var currentTotalAP = 0;
var maxLevelAP = artifactLevelCost[MAX_ARTIFACT_LEVEL][1];

var apToLevel = 0;
var apToMax = 0;
var akMultiplier = 0;

var mplusT1toLevel = 0;
var mplusT2toLevel = 0;
var mplusT3toLevel = 0;
var mplusT4toLevel = 0;

var mplusT1toMax = 0;
var mplusT2toMax = 0;
var mplusT3toMax = 0;
var mplusT4toMax = 0;


//////////
// HELPER FUNCTIONS
//
//////////
function CalculateAPTotal () {
	currentTotalAP = artifactLevelCost[currentArtifactLevel][1] + currentAPinLevel;
}

function CalculateAPtoLevel () {
	if (currentArtifactLevel < MAX_ARTIFACT_LEVEL) {
		apToLevel = artifactLevelCost[currentArtifactLevel + 1][0] - currentAPinLevel;
	}
	else {
		apToLevel = 0; // should already be 0, but what the hell
	}
}

function CalculateAPtoMax () {
	if (currentArtifactLevel < MAX_ARTIFACT_LEVEL) {
		apToMax = maxLevelAP - currentTotalAP;
	}
	else {
		apToMax = 0; // again, should be 0, but just to be sure.
	}
}

function GetAKMultiplier () {
	akMultiplier = artifactKnowledge[currentArtifactKnowledge];
}

function CalculateRuns () {
	var t1ScaledRewards = apRewards["T1"] * akMultiplier;
	var t2ScaledRewards = apRewards["T2"] * akMultiplier;
	var t3ScaledRewards = apRewards["T3"] * akMultiplier;
	var t4ScaledRewards = apRewards["T4"] * akMultiplier;


	mplusT1toLevel = Math.round((apToLevel / t1ScaledRewards) + .5);
	mplusT2toLevel = Math.round((apToLevel / t2ScaledRewards) + .5);
	mplusT3toLevel = Math.round((apToLevel / t3ScaledRewards) + .5);
	mplusT4toLevel = Math.round((apToLevel / t4ScaledRewards) + .5);

	mplusT1toMax = Math.round((apToMax / t1ScaledRewards) + .5);
	mplusT2toMax = Math.round((apToMax / t2ScaledRewards) + .5);
	mplusT3toMax = Math.round((apToMax / t3ScaledRewards) + .5);
	mplusT4toMax = Math.round((apToMax / t4ScaledRewards) + .5);
}

function GetUserInput () {
	currentArtifactLevel = document.getElementById("currentlvl").value;
	currentArtifactKnowledge = document.getElementById("currentak").value;
	currentAPinLevel = document.getElementById("currentap").value;
}


//////////
// MAIN
//
//////////

function OnClickCalculate () {
	GetUserInput();

	CalculateAPTotal();
	CalculateAPtoLevel();
	CalculateAPtoMax();

	GetAKMultiplier();

	CalculateRuns();

	// shove the results back into the page for the user to see.
}