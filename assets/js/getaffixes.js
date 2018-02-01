var currentAffixesUS = "";
var currentAffixesEU = "";

function highlightCurrentAffixes(currentAffixesUS, currentAffixesEU) {

    // if regions are different, change both
    if ((currentAffixesUS != currentAffixesEU) && (currentAffixesUS != "" && currentAffixesEU != "")) {
        document.getElementById(currentAffixesUS).classList.add("table__row-us");
        document.getElementById(currentAffixesUS).classList.remove("table__row");

        document.getElementById(currentAffixesEU).classList.add("table__row-eu");
        document.getElementById(currentAffixesEU).classList.remove("table__row");
        // if are the same affixes to the regions, highlight just one
    } else if (currentAffixesUS == currentAffixesEU) {
        document.getElementById(currentAffixesUS).classList.add("table__row-both");
        document.getElementById(currentAffixesUS).classList.remove("table__row");
    };

    // if any of them is blank, don't do highlight

}

function getAffixes(region) {

    var xhr = new XMLHttpRequest();
    var affixName = "";
    var currentAffixes = "";

    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 0) {
            var parsed_json_respone = JSON.parse(this.responseText);
            var affixes = parsed_json_respone.affix_details;

            var affix_list = [{
                    "name": "Raging",
                    "difficulty": "med"
                },
                {
                    "name": "Volcanic",
                    "difficulty": "easy"
                },
                {
                    "name": "Teeming",
                    "difficulty": "med"
                },
                {
                    "name": "Explosive",
                    "difficulty": "med"
                },
                {
                    "name": "Fortified",
                    "difficulty": "hard"
                },
                {
                    "name": "Bolstering",
                    "difficulty": "med"
                },
                {
                    "name": "Grievous",
                    "difficulty": "med"
                },
                {
                    "name": "Sanguine",
                    "difficulty": "easy"
                },
                {
                    "name": "Bursting",
                    "difficulty": "med"
                },
                {
                    "name": "Necrotic",
                    "difficulty": "hard"
                },
                {
                    "name": "Skittish",
                    "difficulty": "hard"
                },
                {
                    "name": "Quaking",
                    "difficulty": "med"
                },
                {
                    "name": "Tyrannical",
                    "difficulty": "hard"
                }
            ];

            //start the output by putting the title in place
            document.getElementById("thisweek" + region).innerHTML = "<span class='title__intro'>" + region + "</span>";

            //fill it up with the affixes
            affixes.forEach(function(affix) {

                //get the difficulty
                affix_list.forEach(function(list_affix) {
                    if (affix.name == list_affix.name) {
                        affix.difficulty = list_affix.difficulty; //idk if this assignment will work, can also put it in a new var
                    }
                });

                //get current week affixes key
                currentAffixes = affix.name.toLowerCase().substr(0, 2) + currentAffixes;

                //translate the affix name
                affixName = translator.get(affix.name);

                //print it
                document.getElementById("thisweek" + region).innerHTML += "<span class='" + affix.difficulty + "'>" + affixName + "</span>" + " ";
            });

            if (region == "us") currentAffixesUS = currentAffixes;
            if (region == "eu") currentAffixesEU = currentAffixes;

            highlightCurrentAffixes(currentAffixesUS, currentAffixesEU);

        };
    };
    xhr.open('GET', 'https://raider.io/api/v1/mythic-plus/affixes?region=' + region, true);
    xhr.send();
};

getAffixes('us');
getAffixes('eu');