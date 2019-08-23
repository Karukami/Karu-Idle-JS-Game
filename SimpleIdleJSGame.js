/*-------------*/
/* Main Script */
/*-------------*/
//This loads on init
console.log("SimpleIdleJSGame.js has been linked!");
ShowDateTime();
var clockinterval = setInterval(ShowDateTime, 1000);
var player = new Player();
var autoclickertimer = setInterval("player.AutoClickerMakeMoney()", 100);
var updateAchievementsTimer = setInterval("player.updateAchievements()", 2000);
var updateBoutiqueTimer = setInterval("player.updateBoutique()", 2000);
var karuGemsGenerationTimer = setInterval("player.generateKaruGem()", 600000);

/*-----------*/
/* Save Game */
/*-----------*/
//First, asks the player if they're sure to save, since it can overwrite data.
//After confirmation, creates a localStorage JSON with player data.
function SaveGame() {
	Swal.fire({
	  title: 'Are you sure?',
	  text: "This will overwrite any previously saved file!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, save the game!'
	}).then((result) => {
	  if (result.value) {
	    Swal.fire(
	      'Saved!',
	      'Your game has been saved. [Money: $' + Math.round(player.money) + 
	      " - Autoclickers: " + player.autoclickers + "]",
	      'success'
	    )
	   	var savefile = JSON.stringify(player);
		localStorage.setItem("SimpleIdleJSGame_savefile", savefile);
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+player.name+" saved the game.&#013;");
		document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
	  }
	})
}

/*-----------*/
/* Load Game */
/*-----------*/
//First, asks the player if they're sure to load, since it can make them lose progress.
//After confirmation, loads a localStorage JSON with player data.
function LoadGame() {
	var loadedfile = localStorage.getItem("SimpleIdleJSGame_savefile");
	var loadedplayer = JSON.parse(loadedfile);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "Loading game: "
	  		+ "Money: $" + Math.round(loadedplayer.money) + 
	  		" - Autoclickers: " + loadedplayer.autoclickers,
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, load it!'
	}).then((result) => {
	  if (result.value) {
	    Swal.fire(
	      'Loaded!',
	      'Your game has been loaded',
	      'success'
	    )
	    player.name = loadedplayer.name;
		player.money = loadedplayer.money;
		player.autoclickers = loadedplayer.autoclickers;
		player.autoclickercost = loadedplayer.autoclickercost;
		player.activeavatar = loadedplayer.activeavatar;
		player.gameStarted = loadedplayer.gameStarted;
		player.totalClicksEver = loadedplayer.totalClicksEver;
		player.totalMoneyEver = loadedplayer.totalMoneyEver;
		player.totalMoneySpent = loadedplayer.totalMoneySpent;
		player.clickpower = loadedplayer.clickpower;
		player.clickpowercost = loadedplayer.clickpowercost;
		player.newavatarcost = loadedplayer.newavatarcost;
		player.unlockedAvatar = loadedplayer.unlockedAvatar;
		player.unlockedAchievement = loadedplayer.unlockedAchievement;
		player.karugems = loadedplayer.karugems;
		player.unlockedSkill = loadedplayer.unlockedSkill;
		player.unlockedTheme = loadedplayer.unlockedTheme;
		player.unlockedMusic = loadedplayer.unlockedMusic;
		player.activeTheme = loadedplayer.activeTheme;
		player.updateBoutique();
		player.updateAchievements();
		player.updateShop();
		player.UpdateAvatar();
		player.updateStats();
		player.updateTheme();
		player.updateMusicShop();
		document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + loadedplayer.newavatarcost + ")";
		player.updateBoutique();
		document.getElementById("namediv").innerHTML = "Player: " + loadedplayer.name;
		document.getElementById("autoclickerscounter").innerHTML = "Autoclickers: " + loadedplayer.autoclickers;
		document.getElementById("Shop_btn_autoclicker").innerHTML = "Buy Autoclicker ($" + Math.round(loadedplayer.autoclickercost) + ")";
		document.getElementById("btn_makemoney").innerHTML = "Make Money! ($" + loadedplayer.clickpower + ")";
		document.getElementById("Shop_btn_clickpower").innerHTML = "Upgrade Click Power ($" + loadedplayer.clickpowercost + ")";
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+player.name+" loaded the game.&#013;");
		document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
	  }
	})
}