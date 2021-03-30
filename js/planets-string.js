(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetList = []
    planetsArray.forEach(function (planet) {
        var planetString = ["   <li>", planet , "</li>"];
        planetList.push(planetString.join(" "));
    })
    var planetsUl = ["<ul>", planetList.join("\n"), "</ul>"].join("\n");
    console.log(planetsUl);
    document.body.innerHTML = planetsUl;

for(var i = planetsArray.length; i--;) {
    planetsArray[i] = "\n" +'<li>' +planetsArray[i] + "</li>" + "\n";
}
var planetsString3 = planetsArray.join(" ");

console.log("<ul>" + "\n" + planetsString3 + "\n" + "</ul>");
})();