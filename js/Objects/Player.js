/*---------------*/
/* Player Object */
/*---------------*/
//This object simbolizes the user, it has money, autoclickers and autoclicker cost variables.
//These variables are modified when loading a savefile.
function Player(){
	this.name = "Player";
	this.money = 0;
	this.autoclickers = 0;
	this.autoclickercost = 10;
	this.activeavatar = 1;
	this.activeTheme = 0;
	this.gameStartedDate = new Date();
	this.gameStarted = this.gameStartedDate.toLocaleDateString();
	this.totalClicksEver = 0;
	this.totalMoneyEver = 0;
	this.totalMoneySpent = 0;
	this.clickpower = 1;
	this.clickpowercost = 100;
	this.newavatarcost = 5000;
	this.karugems = 0;
	//Karugems are obtained in several ways:
	//1.Every 10 minutes
	//2.For every achievement (7 in total)
	//3.Every 1000 clicks (up to 10000 clicks, 10 in total)
	//So 17 by playing and one every 10 minutes.
	this.unlockedAvatar = [true, false, false, false, false];
	this.unlockedAchievement = [false, false, false, false, false,
								false, false];
	this.unlockedSkill = [false, false, false, false, false];
	this.unlockedTheme = [true, false];
	this.unlockedMusic = [true, false];

	//MUSIC
	this.bgm1 = new Audio('assets/bgm/Karukami - Bleeps and Bloops.mp3');
	this.bgm1.loop = true;

	this.bgm2 = new Audio('assets/bgm/Karukami - Broken Repository.mp3');
	this.bgm2.loop = true;

	/*--------------*/
	/* Select Theme */
	/*--------------*/
	this.selectTheme = function(selection) {
		switch (selection) {
			case 0:
				this.activeTheme = 0;
				break;

			case 1:
				this.activeTheme = 1;
				break;
		}
		this.updateTheme();
	}

	/*--------------*/
	/* Update Theme */
	/*--------------*/
	this.updateTheme = function() {
		switch (this.activeTheme) {
			case 0:
				document.getElementById("favicon").setAttribute("href",
					"assets/favicon.png");
				document.getElementById("body").setAttribute("style",
					"background-image: url(\"assets/bg.png\"); background-repeat: no-repeat; background-size: 100%; background-position: 0px 90px; background-color: #000000; color: rgba(255,255,255,1); text-align: center;");
				document.getElementById("header").setAttribute("style",
					"background-image: linear-gradient(-60deg, white, rgba(180, 80, 170, 1)); padding: 0px;");
				document.getElementById("headerfavicon").setAttribute("src",
					"assets/favicon.png");
				document.getElementById("navbar").setAttribute("style",
					"height: 35px; background-image: linear-gradient(#eeeeee, white, #cccccc);");
				document.getElementById("clockcontainer").setAttribute("style",
					"margin-top:4px; text-align: right; color: black;");
				document.getElementById("maincol").setAttribute("style",
					"background-color: rgba(255,255,255,0.7); border-radius: 5px; margin-top: 15px; padding-top: 15px; padding-bottom: 15px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("divbotones").setAttribute("style",
					"margin-right: 15px; margin-left: 15px; padding: 20px 60px 20px 60px; background-color: rgba(0,0,0,0.1); border-radius: 15px;");
				document.getElementById("namediv").setAttribute("style",
					"background-color: rgba(255,255,255,0.7); margin-top: 15px; margin-left: 5px; border-radius: 5px; text-align: center;	text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("avatardiv").setAttribute("style",
					"height: 155px; background-color: rgba(255,255,255,0.7); border-radius: 5px; padding-top: 3px; margin-top: 15px; margin-left: 5px; margin-right: 0px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("avatar_selector_left").setAttribute("src", "assets/avatar/select_arrow_left.png");
				document.getElementById("avatar_selector_right").setAttribute("src", "assets/avatar/select_arrow_right.png");
				document.getElementById("currentavatar").setAttribute("style",
					"box-shadow: -1px 0px 2px rgba(200, 100, 190, 1), 0px 1px 2px rgba(200, 100, 190, 1), 1px 0px 2px rgba(200, 100, 190, 1), 0px -1px 2px rgba(200, 100, 190, 1);");
				document.getElementById("statsdiv").setAttribute("style",
					"height: 308px;	background-color: rgba(255,255,255,0.7); border-radius: 5px; margin-top: 15px; margin-left: 10px; margin-right: 5px; padding-top: 5px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("consolediv").setAttribute("style",
					"height: 158px;	padding: 5px; margin-top: 10px;	border-radius: 5px;	overflow: hidden; background-color: rgba(255,255,255,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("console").setAttribute("style",
					"transform: translate(0px, -9px); resize: none;");
				document.getElementById("shopdiv").setAttribute("style",
					"height: 235px; padding: 5px; margin-top: 15px; margin-right: 10px; border-radius: 5px; background-color: rgba(255,255,255,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("themesdiv").setAttribute("style",
					"height: 100px;	padding: 5px; margin-top: 15px;	margin-right: 10px;	border-radius: 5px;	background-color: rgba(255,255,255,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("adsdiv").setAttribute("style",
					"height: 152px;	padding: 5px; margin-top: 15px;	margin-right: 10px;	border-radius: 5px;	overflow: hidden; background-color: rgba(255,255,255,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				break;

			case 1:
				document.getElementById("favicon").setAttribute("href",
					"assets/favicon2.png");
				document.getElementById("body").setAttribute("style",
					"background-image: url(\"assets/bg2.png\"); background-repeat: no-repeat; background-size: 100%; background-position: 0px 90px; background-color: #000000; color: rgba(255,255,255,1); text-align: center;");
				document.getElementById("header").setAttribute("style",
					"background-image: linear-gradient(-60deg, #333333, rgba(0, 0, 0, 1)); padding: 0px;");
				document.getElementById("headerfavicon").setAttribute("src",
					"assets/favicon2.png");
				document.getElementById("navbar").setAttribute("style",
					"height: 35px; background-image: linear-gradient(#333333, black, black, #222222);");
				document.getElementById("clockcontainer").setAttribute("style",
					"margin-top:4px; text-align: right; color: white;");
				document.getElementById("maincol").setAttribute("style",
					"background-color: rgba(0,0,0,0.7); border-radius: 5px; margin-top: 15px; padding-top: 15px; padding-bottom: 15px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("divbotones").setAttribute("style",
					"margin-right: 15px; margin-left: 15px; padding: 20px 60px 20px 60px; background-color: rgba(0,0,0,0.7); border-radius: 15px;");
				document.getElementById("namediv").setAttribute("style",
					"background-color: rgba(80,80,80,0.2); margin-top: 15px; margin-left: 5px; border-radius: 5px; text-align: center;	text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("avatardiv").setAttribute("style",
					"height: 155px; background-color: rgba(0,0,0,0.7); border-radius: 5px; padding-top: 3px; margin-top: 15px; margin-left: 5px; margin-right: 0px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("avatar_selector_left").setAttribute("src", "assets/avatar/select_arrow_left2.png");
				document.getElementById("avatar_selector_right").setAttribute("src", "assets/avatar/select_arrow_right2.png");
				document.getElementById("currentavatar").setAttribute("style",
					"box-shadow: -1px 0px 2px rgba(180, 100, 220, 1), 0px 1px 2px rgba(180, 100, 220, 1), 1px 0px 2px rgba(180, 100, 220, 1), 0px -1px 2px rgba(180, 100, 220, 1);");
				document.getElementById("statsdiv").setAttribute("style",
					"height: 308px;	background-color: rgba(0,0,0,0.7); border-radius: 5px; margin-top: 15px; margin-left: 10px; margin-right: 5px; padding-top: 5px; text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("consolediv").setAttribute("style",
					"height: 158px;	padding: 5px; margin-top: 10px;	border-radius: 5px;	overflow: hidden; background-color: rgba(0,0,0,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("console").setAttribute("style",
					"transform: translate(0px, -9px); resize: none; background-color: black; color: #00ff00");
				document.getElementById("shopdiv").setAttribute("style",
					"height: 235px; padding: 5px; margin-top: 15px; margin-right: 10px; border-radius: 5px; background-color: rgba(0,0,0,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("themesdiv").setAttribute("style",
					"height: 100px;	padding: 5px; margin-top: 15px;	margin-right: 10px;	border-radius: 5px;	background-color: rgba(0,0,0,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				document.getElementById("adsdiv").setAttribute("style",
					"height: 152px;	padding: 5px; margin-top: 15px;	margin-right: 10px;	border-radius: 5px;	overflow: hidden; background-color: rgba(0,0,0,0.7); text-shadow: -1px 0px 2px #222222, 0px 1px 2px #222222, 1px 0px 2px #222222, 0px -1px 2px #222222;");
				break;
		}
	}

	/*----------*/
	/* Play BGM */
	/*----------*/
	this.playBGM = function(song) {
		if (song == 0) {
			this.bgm1.load();
			this.bgm2.load();
		}
		if (song == 1) {
			this.bgm2.load();
			this.bgm1.load();
			this.bgm1.play();
		}
		if (song == 2) {
			if (this.unlockedMusic[1] == true) {
				this.bgm1.load();
				this.bgm2.load();
				this.bgm2.play();
			}
			else {
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>This song is locked!&#013;");
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>To unlock it, play through the game!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
	}

	/*------------*/
	/* Make Money */
	/*------------*/
	//This function is called when clicking the Make Money Button.
	//It just adds +1 to the money counter and updates the html element.
	this.MakeMoney = function() {
		this.money += this.clickpower;
		this.totalMoneyEver += this.clickpower;
		this.totalClicksEver++;
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
		this.addKaruGemsByClicking();
		this.updateStats();
	}

	this.generateKaruGem = function() {
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
		document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		this.karugems++;
		this.updateBoutique();
	}

	/*--------------------------*/
	/* Add KaruGems by Clicking */
	/*--------------------------*/
	this.addKaruGemsByClicking = function() {
		if (this.totalClicksEver == 1000
			|| this.totalClicksEver == 2000
			|| this.totalClicksEver == 3000
			|| this.totalClicksEver == 4000
			|| this.totalClicksEver == 5000
			|| this.totalClicksEver == 6000
			|| this.totalClicksEver == 7000
			|| this.totalClicksEver == 8000
			|| this.totalClicksEver == 9000
			|| this.totalClicksEver == 10000) {
			this.karugems++;
			this.updateBoutique();
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
	}

	/*-----------------*/
	/* Add Autoclicker */
	/*-----------------*/
	//This function is called when clicking the Buy Autoclicker Button.
	//If the player has enough money, adds +1 to the autoclicker count, and you pay for it.
	//Else, nothing happens when you click the button.
	this.AddAutoClicker = function() {
		if (this.money >= Math.round(this.autoclickercost)) {
			this.money -= this.autoclickercost;
			this.totalMoneySpent += this.autoclickercost;
			this.autoclickers++;
			document.getElementById("autoclickerscounter").innerHTML = "Autoclickers: " + this.autoclickers;
			this.autoclickercost += Math.round(this.autoclickercost * 0.10);
			this.updateShop();
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" just bought an autoclicker!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.updateStats();
		}
		else {
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You don't have enough money!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
	}

	/*------------------------*/
	/* Autoclicker Make Money */
	/*------------------------*/
	//This function is constantly being called.
	//Adds an ammount to the money counter based on the number of autoclickers the player has.
	//Then it updates the html money counter, rounding the number so it doesn't appear float.
	this.AutoClickerMakeMoney = function() {
		if (this.unlockedSkill[0] == false) {
			this.money += this.autoclickers * 0.1;
			this.totalMoneyEver += this.autoclickers * 0.1;
			document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
			this.updateStats();
		}
		if (this.unlockedSkill[0] == true) {
			this.money += this.autoclickers * 0.2;
			this.totalMoneyEver += this.autoclickers * 0.2;
			document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
			this.updateStats();
		}		
	}

	/*-------------*/
	/* Next Avatar */
	/*-------------*/
	this.NextAvatar = function() {
		switch (this.activeavatar) {
			case 1:
				if (this.unlockedAvatar[1] == true) {
					this.activeavatar = 2;
				}
				else {
					this.activeavatar = 1;
				}
				break;

			case 2:
				if (this.unlockedAvatar[2] == true) {
					this.activeavatar = 3;
				}
				else {
					this.activeavatar = 1;
				}
				break;

			case 3:
				if (this.unlockedAvatar[3] == true) {
					this.activeavatar = 4;
				}
				else {
					this.activeavatar = 1;
				}
				break;

			case 4:
				if (this.unlockedAvatar[4] == true) {
					this.activeavatar = 5;
				}
				else {
					this.activeavatar = 1;
				}
				break;

			case 5:
				this.activeavatar = 1;
		}
		this.UpdateAvatar();
	}

	/*-----------------*/
	/* Previous Avatar */
	/*-----------------*/
	this.PreviousAvatar = function() {
		switch (this.activeavatar) {
			case 1:
				if (this.unlockedAvatar[2] == true) {
					this.activeavatar = 3;
				}
				else if (this.unlockedAvatar[3] == true) {
					this.activeavatar = 2;
				}
				break;

			case 2:
				this.activeavatar = 1;
				break;

			case 3:
				this.activeavatar = 2;
				break;

			case 4:
				this.activeavatar = 3;
				break;

			case 5:
				this.activeavatar = 4;
		}
		this.UpdateAvatar();
	}

	/*---------------*/
	/* Update Avatar */
	/*---------------*/
	this.UpdateAvatar = function() {
		switch(this.activeavatar) {
			case 1:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar0big.png");
				document.getElementById("avatarname").innerHTML = ". + Karu + .";
				break;

			case 2:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar1big.png");
				document.getElementById("avatarname").innerHTML = ". + Kazzy + .";
				break;

			case 3:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar2big.png");
				document.getElementById("avatarname").innerHTML = ". + Ricardo + .";
				break;

			case 4:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar3big.png");
				document.getElementById("avatarname").innerHTML = ". + Spinal + .";
				break;

			case 5:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar4big.png");
				document.getElementById("avatarname").innerHTML = ". + Robin + .";
				break;
		}
	}

	/*-----------------*/
	/* Update Boutique */
	/*-----------------*/
	this.updateBoutique = function() {
		if (this.unlockedAvatar[1]) {
			document.getElementById("boutique_unlocked_1").setAttribute("src", "assets/avatar/avatar1.png");
			document.getElementById("skill_description_1").innerHTML = "Kazzy's Hacker attack <br><small>&nbsp&nbspTotal Autoclickers x3</small>";
			document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
		}
		if (this.unlockedAvatar[2]) {
			document.getElementById("boutique_unlocked_2").setAttribute("src", "assets/avatar/avatar2.png");
			document.getElementById("skill_description_2").innerHTML = "Ricardo's Sexy Dance <br><small>&nbsp&nbspClick power x5</small>";
			document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
		}
		if (this.unlockedAvatar[3]) {
			document.getElementById("boutique_unlocked_3").setAttribute("src", "assets/avatar/avatar3.png");
			document.getElementById("skill_description_3").innerHTML = "Spinal's Ultra Combo <br><small>&nbsp&nbsp+15 Autoclickers, +15 Click power</small>";
			document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
		}
		if (this.unlockedAvatar[4]) {
			document.getElementById("boutique_unlocked_4").setAttribute("src", "assets/avatar/avatar4.png");
			document.getElementById("skill_description_4").innerHTML = "Robin's Ultimate Meow <br><small>&nbsp&nbspWalks on the keyboard</small>";
			document.getElementById("Shop_btn_newavatar").innerHTML = "Got all avatars!";
			document.getElementById("Shop_btn_newavatar").disabled = true;
		}

		//These activate and deactivate skill purchase buttons
		if (this.karugems >= 1 && this.unlockedSkill[0] == false) {
			document.getElementById("btn_skill_0").disabled = false;
		}
		else if (this.unlockedSkill[0] == true) {
			document.getElementById("btn_skill_0").innerHTML = "Activated!";
			document.getElementById("btn_skill_0").disabled = true;
		}
		if (this.karugems >= 3 && this.unlockedAvatar[1] == true && this.unlockedSkill[1] == false) {
			document.getElementById("btn_skill_1").disabled = false;
		}
		else if (this.unlockedSkill[1] == true) {
			document.getElementById("btn_skill_1").innerHTML = "Activated!";
			document.getElementById("btn_skill_1").disabled = true;
		}
		if (this.karugems >= 5 && this.unlockedAvatar[2] == true && this.unlockedSkill[2] == false) {
			document.getElementById("btn_skill_2").disabled = false;
		}
		else if (this.unlockedSkill[2] == true) {
			document.getElementById("btn_skill_2").innerHTML = "Activated!";
			document.getElementById("btn_skill_2").disabled = true;
		}
		if (this.karugems >= 7 && this.unlockedAvatar[3] == true && this.unlockedSkill[3] == false) {
			document.getElementById("btn_skill_3").disabled = false;
		}
		else if (this.unlockedSkill[3] == true) {
			document.getElementById("btn_skill_3").innerHTML = "Activated!";
			document.getElementById("btn_skill_3").disabled = true;
		}
		if (this.karugems >= 10 && this.unlockedAvatar[4] == true && this.unlockedSkill[4] == false) {
			document.getElementById("btn_skill_4").disabled = false;
		}
		else if (this.unlockedSkill[4] == true) {
			document.getElementById("btn_skill_4").innerHTML = "Activated!";
			document.getElementById("btn_skill_4").disabled = true;
		}
	}

	/*----------------*/
	/* Activate Skill */
	/*----------------*/
	this.activateSkill = function(skillnumber) {
		if (skillnumber == 0) {
			if (this.karugems >= 1) {
				this.karugems -= 1;
				this.unlockedSkill[0] = true;
				this.updateBoutique();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>SKILL ACTIVATED: KARU'S SUGAR RUSH!!!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
		if (skillnumber == 1) {
			if (this.karugems >= 3) {
				this.karugems -= 3;
				this.unlockedSkill[1] = true;
				this.updateBoutique();
				this.autoclickers *= 3;
				this.updateStats();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>SKILL ACTIVATED: KAZZY'S HACKER ATTACK!!!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
		if (skillnumber == 2) {
			if (this.karugems >= 5) {
				this.karugems -= 5;
				this.unlockedSkill[2] = true;
				this.updateBoutique();
				this.clickpower *= 5;
				this.updateStats();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>SKILL ACTIVATED: RICARDO'S SEXY DANCE!!!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
		if (skillnumber == 3) {
			if (this.karugems >= 7) {
				this.karugems -= 7;
				this.unlockedSkill[3] = true;
				this.updateBoutique();
				this.autoclickers += 15;
				this.clickpower += 15;
				document.getElementById("btn_makemoney").innerHTML = "Make Money! ($" + this.clickpower + ")";
				this.updateStats();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>SKILL ACTIVATED: SPINAL'S ULTRA COMBO!!!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
		if (skillnumber == 4) {
			if (this.karugems >= 10) {
				this.karugems -= 10;
				this.unlockedSkill[4] = true;
				this.updateBoutique();
				this.autoclickers += 100;
				this.clickpower += 100;

				document.getElementById("btn_music_1").setAttribute("class", "btn btn-success btn-sm");
				document.getElementById("btn_music_1").innerHTML = "Unlocked";
				document.getElementById("btn_makemoney").innerHTML = "Make Money! ($" + this.clickpower + ")";
				this.updateStats();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>SKILL ACTIVATED: ROBIN'S ULTIMATE MEOW!!!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
		}
		if (this.unlockedSkill[0] == true &&
			this.unlockedSkill[1] == true &&
			this.unlockedSkill[2] == true &&
			this.unlockedSkill[3] == true &&
			this.unlockedSkill[4] == true) {
			this.unlockedMusic[1] = true;
			this.updateMusicShop();
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Congratulations, "+this.name+", you have completed the game!!&#013;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You have unlocked a new song!!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
	}

	this.updateMusicShop = function() {
		if (this.unlockedMusic[1] == true) {
			document.getElementById("btn_music_1").setAttribute("class", "btn btn-success btn-sm");
			document.getElementById("btn_music_1").innerHTML = "Unlocked";	
		}
	}

	/*---------------------*/
	/* Update Shop Buttons */
	/*---------------------*/
	this.updateShop = function() {
		document.getElementById("Shop_btn_autoclicker").innerHTML = "Buy Autoclicker ($" + Math.round(this.autoclickercost) + ")";
		document.getElementById("Shop_btn_clickpower").innerHTML = "Upgrade Click Power ($" + this.clickpowercost + ")";
	}

	/*-------------------*/
	/* Unlock New Avatar */
	/*-------------------*/
	this.unlockNewAvatar = function() {
		if (this.money >= this.newavatarcost) {
			if (this.unlockedAvatar[1] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[1] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				this.updateBoutique();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Kazzy!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
			else if (this.unlockedAvatar[2] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[2] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				this.updateBoutique();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Ricardo!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;

			}
			else if (this.unlockedAvatar[3] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[3] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				this.updateBoutique();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Spinal!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}

			else if (this.unlockedAvatar[4] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[4] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				this.updateBoutique();
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Robin!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
				document.getElementById("Shop_btn_newavatar").disabled = true;			
			}
		}
		else {
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You don't have enough money!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
	}

	/*-------------------------*/
	/* Show Avatar Description */
	/*-------------------------*/
	this.showAvatarDescription = function() {
		switch (this.activeavatar) {
			case 1:
				document.getElementById("avatarDescription").innerHTML = "<h6>Karu</h6><small>\"The developer, just a guy who likes spaghetti.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;

			case 2:
				document.getElementById("avatarDescription").innerHTML = "<h6>Kazzy</h6><small>\"Loves cats and a good night of watching anime.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;

			case 3:
				document.getElementById("avatarDescription").innerHTML = "<h6>Ricardo</h6><small>\"Internet celebrity, likes to dance and pose.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;

			case 4:
				document.getElementById("avatarDescription").innerHTML = "<h6>Spinal</h6><small>\"Used to be a hollywood actor, now he just likes to hang around at Karu's and play Mario Party \"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;

			case 5:
				document.getElementById("avatarDescription").innerHTML = "<h6>Robin</h6><small>\"Kazzy's fluffy cat, naps 24/7 and likes walking over the keyboard.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;
		}
	}

	/*-------------------------*/
	/* Hide Avatar Description */
	/*-------------------------*/
	this.hideAvatarDescription = function() {
		document.getElementById("avatarDescription").setAttribute("style", "display: none");
	}

	/*------------------------*/
	/* Open Name Change Modal */
	/*------------------------*/
	this.openNameChangeModal = function() {
		$('#ChangeNameModal').modal('show');
	}

	/*---------------------*/
	/* Open Boutique Modal */
	/*---------------------*/
	this.openBoutiqueModal = function() {
		$('#BoutiqueModal').modal('show');
	}

	/*--------------------------------*/
	/* Open Music & Themes Shop Modal */
	/*--------------------------------*/
	this.openMusicThemeShopModal = function() {
		$('#MusicThemeModal').modal('show');
	}

	/*----------*/
	/* Set Name */
	/*----------*/
	this.setName = function() {
		this.name = document.getElementById("newnameinput").value;
		document.getElementById("namediv").innerHTML = "Player: " + this.name;
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Changed your name to: "+this.name+"&#013;");
		document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
	}

	/*--------------*/
	/* Update Stats */
	/*--------------*/
	this.updateStats = function() {
		document.getElementById("statvalues").innerHTML =
		this.gameStarted + "<br>" + this.clickpower + "<br>" +this.totalClicksEver 
		+ "<br>" + this.autoclickers + "<br>" + Math.round(this.totalMoneyEver) 
		+ "<br>" + this.totalMoneySpent;
		document.getElementById("rubycounter").innerHTML = "Karu Gems: " + this.karugems;
	}

	/*----------------------*/
	/* Increase Click Power */
	/*----------------------*/
	this.increaseClickPower = function() {
		if (this.money >= Math.round(this.clickpowercost)) {
			this.money -= this.clickpowercost;
			this.totalMoneySpent += this.clickpowercost;
			this.clickpower++;
			this.clickpowercost += this.clickpowercost*3;
			document.getElementById("btn_makemoney").innerHTML = "Make Money! ($" + this.clickpower + ")";
			this.updateShop();
			this.updateStats();
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" increased his/her click power!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
		else {
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You don't have enough money!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}
	}

	/*--------------------------*/
	/* Achievement Descriptions */
	/*--------------------------*/
	this.updateAchievements = function() {
		//Achievement 0: Click 100 times!
		if (this.totalClicksEver >= 100 && this.unlockedAchievement[0] == false) {
			this.unlockedAchievement[0] = true;
			document.getElementById("achievement_0").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Click 100 Times!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 1: Click 1000 times!
		if (this.totalClicksEver >= 1000 && this.unlockedAchievement[1] == false) {
			this.unlockedAchievement[1] = true;
			document.getElementById("achievement_1").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Click 1000 Times!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 2: Got 50 Autoclickers!
		if (this.autoclickers >= 50 && this.unlockedAchievement[2] == false) {
			this.unlockedAchievement[2] = true;
			document.getElementById("achievement_2").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Got 50 Autoclickers!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 3: Got 100 Autoclickers!
		if (this.autoclickers >= 100 && this.unlockedAchievement[3] == false) {
			this.unlockedAchievement[3] = true;
			document.getElementById("achievement_3").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Got 100 Autoclickers!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 4: Double Power!
		if (this.clickpower >= 2 && this.unlockedAchievement[4] == false) {
			this.unlockedAchievement[4] = true;
			document.getElementById("achievement_4").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Double Power!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 5: Giga Power!
		if (this.clickpower >= 5 && this.unlockedAchievement[5] == false) {
			this.unlockedAchievement[5] = true;
			document.getElementById("achievement_5").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Giga Power!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//Achievement 6: Meow!
		if (this.unlockedAvatar[4] == true && this.unlockedAchievement[6] == false) {
			this.unlockedAchievement[6] = true;
			document.getElementById("achievement_6").setAttribute("style", "filter: none;");
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Achievement Unlocked: Meow!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			this.karugems++;
			document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>You generated a KaruGem!&#013;");
			document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
		}

		//For loading the game
		if (this.unlockedAchievement[0]) {
			document.getElementById("achievement_0").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[1]) {
			document.getElementById("achievement_1").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[2]) {
			document.getElementById("achievement_2").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[3]) {
			document.getElementById("achievement_3").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[4]) {
			document.getElementById("achievement_4").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[5]) {
			document.getElementById("achievement_5").setAttribute("style", "filter: none;");
		}
		if (this.unlockedAchievement[6]) {
			document.getElementById("achievement_6").setAttribute("style", "filter: none;");
		}
	}

	this.showAchievement0 = function() {
		if (this.unlockedAchievement[0] == true) {
			document.getElementById("achievement_0txt").innerHTML = "<h6>Clicked 100 times!</h6><small> \"You're doing some workout! <br> Keep burning those calories\"</small>";
		}
		else if (this.unlockedAchievement[0] == false) {
			document.getElementById("achievement_0txt").innerHTML = "<h6>Clicked 100 times!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_0txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement0 = function() {
		document.getElementById("achievement_0txt").setAttribute("style", "display: none");
	}

	this.showAchievement1 = function() {
		if (this.unlockedAchievement[1] == true) {
			document.getElementById("achievement_1txt").innerHTML = "<h6>Clicked 1000 times!</h6><small>\"Bro, look how much I can click!<br>Your clicks have come a long way...\"</small>";
		}
		else if (this.unlockedAchievement[1] == false) {
			document.getElementById("achievement_1txt").innerHTML = "<h6>Clicked 1000 times!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_1txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement1 = function() {
		document.getElementById("achievement_1txt").setAttribute("style", "display: none");
	}

	this.showAchievement2 = function() {
		if (this.unlockedAchievement[2] == true) {
			document.getElementById("achievement_2txt").innerHTML = "<h6>Got 50 Autoclickers!</h6><small>\"Automatization is the future!<br>click... click... click...\"</small>";
		}
		else if (this.unlockedAchievement[2] == false) {
			document.getElementById("achievement_2txt").innerHTML = "<h6>Got 50 Autoclickers!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_2txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement2 = function() {
		document.getElementById("achievement_2txt").setAttribute("style", "display: none");
	}

	this.showAchievement3 = function() {
		if (this.unlockedAchievement[3] == true) {
			document.getElementById("achievement_3txt").innerHTML = "<h6>Got 100 Autoclickers!</h6><small>\"Look at those numbers go up!<br>These guys sure are doing their job!\"</small>";
		}
		else if (this.unlockedAchievement[3] == false) {
			document.getElementById("achievement_3txt").innerHTML = "<h6>Got 100 Autoclickers!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_3txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement3 = function() {
		document.getElementById("achievement_3txt").setAttribute("style", "display: none");
	}

	this.showAchievement4 = function() {
		if (this.unlockedAchievement[4] == true) {
			document.getElementById("achievement_4txt").innerHTML = "<h6>Double Power!</h6><small>\"You've got double the power now,<br>be careful not to destroy the world!\"</small>";
		}
		else if (this.unlockedAchievement[4] == false) {
			document.getElementById("achievement_4txt").innerHTML = "<h6>Double Power!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_4txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement4 = function() {
		document.getElementById("achievement_4txt").setAttribute("style", "display: none");
	}

	this.showAchievement5 = function() {
		if (this.unlockedAchievement[5] == true) {
			document.getElementById("achievement_5txt").innerHTML = "<h6>Giga Power!</h6><small>\"With five times the power,<br>the universe is at risk!\"</small>";
		}
		else if (this.unlockedAchievement[5] == false) {
			document.getElementById("achievement_5txt").innerHTML = "<h6>Giga Power!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_5txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement5 = function() {
		document.getElementById("achievement_5txt").setAttribute("style", "display: none");
	}

	this.showAchievement6 = function() {
		if (this.unlockedAchievement[6] == true) {
			document.getElementById("achievement_6txt").innerHTML = "<h6>Meow!</h6><small>\"Bought the new avatar: Robin!<br>*Purr*\"</small>";
		}
		else if (this.unlockedAchievement[6] == false) {
			document.getElementById("achievement_6txt").innerHTML = "<h6>Meow!</h6><small>[Locked]</small>";	
		}
		document.getElementById("achievement_6txt").setAttribute("style", "display:} yes; background-color: rgba(255,255,255,0.7); border-radius: 5px; position: absolute; z-index: 1; padding: 5px");
	}

	this.hideAchievement6 = function() {
		document.getElementById("achievement_6txt").setAttribute("style", "display: none");
	}

}