/*-------------*/
/* Main Script */
/*-------------*/
//This loads on init
console.log("jsexternal.js has been linked!");
ShowDateTime();
var clockinterval = setInterval(ShowDateTime, 1000);
var player = new Player();
var autoclickertimer = setInterval("player.AutoClickerMakeMoney()", 100);

/*-----------*/
/* Save Game */
/*-----------*/
//Creates a localStorage JSON with player data.
function SaveGame() {
	var savefile = JSON.stringify(player);
	localStorage.setItem("jsexternal_savefile", savefile);
}

/*-----------*/
/* Load Game */
/*-----------*/
//Loads a localStorage JSON with player data.
function LoadGame() {
	var loadedfile = localStorage.getItem("jsexternal_savefile");
	var loadedplayer = JSON.parse(loadedfile);
	player.money = loadedplayer.money;
	player.autoclickers = loadedplayer.autoclickers;
	player.autoclickercost = loadedplayer.autoclickercost;
	document.getElementById("autoclickerscounter").innerHTML = "Autoclickers: " + loadedplayer.autoclickers;
	document.getElementById("autoclickerprice").innerHTML = "Current autoclicker cost: $" + Math.round(loadedplayer.autoclickercost);
}