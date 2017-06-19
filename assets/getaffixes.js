var uscall = new XMLHttpRequest();
uscall.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	affixes = JSON.parse(this.responseText);
		for (var i = 0; i < affixes.affix_details.length; i++){
			var affixone = affixes.affix_details[0];
			var affixtwo = affixes.affix_details[1];
			var affixthree = affixes.affix_details[2];
		// god forgive me for i know not what i do
		// look at this abomination

		//week 1
		if (affixone.name === "Raging" && affixtwo.name === "Volcanic" && affixthree.name === "Tyrannical") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='easy'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 2
		} else if (affixone.name === "Teeming" && affixtwo.name === "Explosive" && affixthree.name === "Fortified") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 3
		} else if (affixone.name === "Bolstering" && affixtwo.name === "Grievous" && affixthree.name === "Tyrannical") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='med'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 4
		} else if (affixone.name === "Sanguine" && affixtwo.name === "Volcanic" && affixthree.name === "Fortified") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='easy'>" + affixone.name + "</span>" + ", " + "<span class='easy'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 5
		} else if (affixone.name === "Bursting" && affixtwo.name === "Skittish" && affixthree.name === "Tyrannical") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		 //week 6
		} else if (affixone.name === "Teeming" && affixtwo.name === "Quaking" && affixthree.name === "Fortified") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='med'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 7
		} else if (affixone.name === "Raging" && affixtwo.name === "Necrotic" && affixthree.name === "Tyrannical") {
			document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 8
		} else if (affixone.name === "Bolstering" && affixtwo.name === "Skittish" && affixthree.name === "Fortified") {
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 9
		} else if (affixone.name === "Teeming" && affixtwo.name === "Necrotic" && affixthree.name === "Tyrannical") {
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 10
		} else if (affixone.name === "Sanguine" && affixtwo.name === "Grievous" && affixthree.name === "Fortified") {
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='easy'>" + affixone.name + "</span>" + ", " + "<span class='med'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		 //week 11
		} else if (affixone.name === "Bolstering" && affixtwo.name === "Explosive" && affixthree.name === "Tyrannical") {
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='easy'>" + affixone.name + "</span>" + ", " + "<span class='hard'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//week 12
		} else if (affixone.name === "Bursting" && affixtwo.name === "Quaking" && affixthree.name === "Fortified") {
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + "<span class='med'>" + affixone.name + "</span>" + ", " + "<span class='med'>" + affixtwo.name + "</span>" +", " + "<span class='hard'>" + affixthree.name + "</span>";
		//default to whatever is current if we can't match shit
		} else
		   document.getElementById("thisweek").innerHTML = "<span class='title__intro'>US</span>" + affixone.name + affixtwo.name + affixthree.name;
		}
	}
	else {
	document.getElementById("thisweek").innerHTML = "Error querying API. Reach out to me on <a href='https://twitter.com/pontifzero'>Twitter</a>."
	} 
};
uscall.open("GET", "https://raider.io/api/v1/mythic-plus/affixes?region=us", true);
uscall.send();

// do the needful for eu this time
var eucall = new XMLHttpRequest();
eucall.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	euaffixes = JSON.parse(this.responseText);
		for (var i = 0; i < euaffixes.affix_details.length; i++){
			var euaffixone = euaffixes.affix_details[0];
			var euaffixtwo = euaffixes.affix_details[1];
			var euaffixthree = euaffixes.affix_details[2];
			if (euaffixone.name === "Raging" && euaffixtwo.name === "Volcanic" && euaffixthree.name === "Tyrannical") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='easy'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 2
			} else if (euaffixone.name === "Teeming" && euaffixtwo.name === "Explosive" && euaffixthree.name === "Fortified") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 3
			} else if (euaffixone.name === "Bolstering" && euaffixtwo.name === "Grievous" && euaffixthree.name === "Tyrannical") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='med'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 4
			} else if (euaffixone.name === "Sanguine" && euaffixtwo.name === "Volcanic" && euaffixthree.name === "Fortified") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='easy'>" + euaffixone.name + "</span>" + ", " + "<span class='easy'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 5
			} else if (euaffixone.name === "Bursting" && euaffixtwo.name === "Skittish" && euaffixthree.name === "Tyrannical") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			 //week 6
			} else if (euaffixone.name === "Teeming" && euaffixtwo.name === "Quaking" && euaffixthree.name === "Fortified") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='med'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 7
			} else if (euaffixone.name === "Raging" && euaffixtwo.name === "Necrotic" && euaffixthree.name === "Tyrannical") {
				document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 8
			} else if (euaffixone.name === "Bolstering" && euaffixtwo.name === "Skittish" && euaffixthree.name === "Fortified") {
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 9
			} else if (euaffixone.name === "Teeming" && euaffixtwo.name === "Necrotic" && euaffixthree.name === "Tyrannical") {
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 10
			} else if (euaffixone.name === "Sanguine" && euaffixtwo.name === "Grievous" && euaffixthree.name === "Fortified") {
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='easy'>" + euaffixone.name + "</span>" + ", " + "<span class='med'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			 //week 11
			} else if (euaffixone.name === "Bolstering" && euaffixtwo.name === "Explosive" && euaffixthree.name === "Tyrannical") {
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='easy'>" + euaffixone.name + "</span>" + ", " + "<span class='hard'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//week 12
			} else if (euaffixone.name === "Bursting" && euaffixtwo.name === "Quaking" && euaffixthree.name === "Fortified") {
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + "<span class='med'>" + euaffixone.name + "</span>" + ", " + "<span class='med'>" + euaffixtwo.name + "</span>" +", " + "<span class='hard'>" + euaffixthree.name + "</span>";
			//default to whatever is current if we can't match shit
			} else
			   document.getElementById("thisweekeu").innerHTML = "<span class='title__intro'>EU</span>" + euaffixone.name + euaffixtwo.name + euaffixthree.name;
			}
		}
	};
eucall.open("GET", "https://raider.io/api/v1/mythic-plus/affixes?region=eu", true);
eucall.send();