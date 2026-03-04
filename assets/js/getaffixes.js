var currentAffixesUS = "";
var currentAffixesEU = "";

function trimFirstTwoWords(input) {
    const words = input.split(' ');
    return words.length > 2 ? words.slice(2).join(' ') : words[0] || '';
}

function getAffixes(region) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        var affixName = "";
        var currentAffixes = "";

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var parsed_json_respone = JSON.parse(this.responseText);
                var affixes = parsed_json_respone.affix_details.slice(0,2); // slice this to only get the first two affixes

                var affix_list = [
                    {
                        "name": "Devour",
                        "difficulty": "med",
                    },
                    {
                        "name": "Voidbound",
                        "difficulty": "med",
                    },
                    {
                        "name": "Ascendant",
                        "difficulty": "med",
                    },
                    {
                        "name": "Oblivion",
                        "difficulty": "med",
                    },
                    {
                        "name": "Xal'atath's Guile",
                        "difficulty": "hard",
                    },
                    {
                        "name": "Fortified",
                        "difficulty": "hard"
                    },
                    {
                        "name": "Tyrannical",
                        "difficulty": "hard"
                    },
                ];

                //start the output by putting the title in place
                document.getElementById("thisweek" + region).innerHTML = "<span class='title__intro'>" + region + " " + "</span>";

                //fill it up with the affixes
                affixes.forEach(function(affix) {

                    //get the difficulty
                    affix_list.forEach(function(list_affix) {
                        if (trimFirstTwoWords(affix.name) == list_affix.name) {
                            affix.difficulty = list_affix.difficulty;
                            affix.link = list_affix.link; //id
                        }
                    });

                    //get current week affixes key: 2 first chars and lowercase
                    currentAffixes = trimFirstTwoWords(affix.name).toLowerCase().substr(0, 2) + currentAffixes;
                    //print it
                    if (affix.link != null){
                        document.getElementById("thisweek" + region).innerHTML += "<span class='" + affix.difficulty + " trn'>" + "<a href='" + affix.link + "'>" + affix.name + "</a></span>" + " ";
                    } else {
                        document.getElementById("thisweek" + region).innerHTML += "<span class='" + affix.difficulty + " trn'>" + trimFirstTwoWords(affix.name) + "</span>" + " ";
                    }
                });

                if (region == "us") currentAffixesUS = currentAffixes;
                if (region == "eu") currentAffixesEU = currentAffixes;
                console.log(currentAffixesUS)
                // if the affixes are the same for both regions, don't show both regions
                if ((currentAffixesUS == currentAffixesEU) && (currentAffixesUS != "" && currentAffixesEU != "")) {
                    document.getElementById("thisweekeu").remove();
                    document.getElementById("thisweekus").getElementsByTagName("span")[0].style.display = "none";
                };

                highlightCurrentAffixes(currentAffixesUS, currentAffixesEU);
                var affixesToHighlight = affixes.filter(function(affix) {
                    return affix_list.some(function(list_affix) {
                        return trimFirstTwoWords(affix.name) === list_affix.name;
                    });
                });
                highlightCurrentAffixDescriptions(affixesToHighlight, region);
                fillNextWeeksAffixes(currentAffixesEU);

                resolve();
            } else if (xhr.readyState == 4 && xhr.status !== 200){
                currentAffixes = null;
                reject();
            }
        };
        xhr.open('GET', './affix-' + region, true);
        xhr.send();
    });
};

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
};

function fillNextWeeksAffixes(currentAffixesEU) {
   // As the servers reset from EU are later than the US, it takes the EU as a reference.

   if (currentAffixesUS != "") {

       var row = document.getElementById(currentAffixesUS)
       var idx = row.rowIndex;

       if (idx == 7) {
           var nextweek = 8;
           var weekafternext = 1;
       } else if (idx > 7) {
           var nextweek = 1;
           var weekafternext = 2;
       } else {
           var nextweek = idx + 1;
           var weekafternext = idx + 2;
       };

       var schedtbl = document.getElementById("sched");

       var nw1 = schedtbl.rows[nextweek].cells[0].innerHTML;
       var nw2 = schedtbl.rows[nextweek].cells[1].innerHTML;

       var wan1 = schedtbl.rows[weekafternext].cells[0].innerHTML;
       var wan2 = schedtbl.rows[weekafternext].cells[1].innerHTML;

       document.getElementById("nextweek").innerHTML = "" + trimFirstTwoWords(nw1) + ", " + nw2;
       document.getElementById("weekafternext").innerHTML = "" + trimFirstTwoWords(wan1) + ", " + wan2;

   };
};

function highlightCurrentAffixDescriptions(affixes, region) {
        affixes.forEach(function(affix) {
            var name = affix.name;
            var elms = document.querySelectorAll('ul.affixes-list li');

            elms.forEach(function(el) {
                if (classie.has(el, 'affix-' + trimFirstTwoWords(name).toLowerCase()))
                {
                    var ribbon;
                    var ribbonColor = (region === 'us') ? 'red' : 'blue';

                    if (classie.has(el, 'thisweek'))
                    {
                        // There must already be a ribbon
                        ribbon = el.querySelector('div.ribbon');
                        var regionLabel = ribbon.querySelector("span");
                        regionLabel.innerText = "US & EU";
                        classie.removeClass(ribbon, 'blue');
                        classie.removeClass(ribbon, 'red');
                        classie.addClass(ribbon, 'green');
                    } else {
                        classie.addClass(el, 'thisweek');
                        // Let's add a ribbon
                        ribbon = document.createElement('div');
                        classie.addClass(ribbon, 'ribbon');
                        classie.addClass(ribbon, ribbonColor);

                        // Label the region
                        var span = document.createElement('span');
                        span.innerText = region.toUpperCase();

                        ribbon.appendChild(span);
                        el.appendChild(ribbon);
                    }
                }
            })
        });
}

/*
function getCutoffs(region) {
    var cutoff;
    fetch('./cutoff-' + region)
    .then(res => {
        if (!res.ok) {
          throw new Error('Network error');
      }
      return res.text()
    })
    .then(data => {
    cutoff = data;
    })
    .then(() => {
        document.getElementById("cutoff-" + region).innerHTML += cutoff;
    })
    .catch(error => {
        console.error('oopies! ', error);
        document.getElementById('cutoffcontainer').style.display = 'none';
      })
};
*/

function getRegionalAffixes() {
    var promises = [
        getAffixes('us'),
        getAffixes('eu'),
    ];
    window.getAffixesReady = Promise.all(promises);
};

/*
function getRegionalCutoffs() {
    var cutoffs = [
        getCutoffs('us'),
        getCutoffs('eu'),
    ];
    window.getCutoffsReady = Promise.all(cutoffs);
};
*/
getRegionalAffixes();
//getRegionalCutoffs();