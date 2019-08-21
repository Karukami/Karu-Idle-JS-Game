/*---------------*/
/* Player Object */
/*---------------*/
//This object simbolizes the user, it has money, autoclickers and autoclicker cost variables.
//These variables are modified when loading a savefile.
function Player(){
	this.name = "Player";
	this.money = 999999999999;
	this.autoclickers = 0;
	this.autoclickercost = 10;
	this.activeavatar = 1;
	this.gameStartedDate = new Date();
	this.gameStarted = this.gameStartedDate.toLocaleDateString();
	this.totalClicksEver = 0;
	this.totalMoneyEver = 0;
	this.totalMoneySpent = 0;
	this.clickpower = 1;
	this.clickpowercost = 100;
	this.newavatarcost = 5000;
	this.unlockedAvatar = [true, false, false, false, false];
	this.unlockedAchievement = [false, false, false, false, false,
								false, false];

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
		this.updateStats();
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
			document.getElementById("Shop_btn_autoclicker").innerHTML = "Buy Autoclicker ($" + Math.round(this.autoclickercost) + ")";
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
		this.money += this.autoclickers * 0.1;
		this.totalMoneyEver += this.autoclickers * 0.1;
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
		this.updateStats();
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
				document.getElementById("boutique_unlocked_1").setAttribute("src", "assets/avatar/avatar1.png");
				document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Kazzy!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}
			else if (this.unlockedAvatar[2] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[2] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				document.getElementById("boutique_unlocked_2").setAttribute("src", "assets/avatar/avatar2.png");
				document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Ricardo!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;

			}
			else if (this.unlockedAvatar[3] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[3] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				document.getElementById("boutique_unlocked_3").setAttribute("src", "assets/avatar/avatar3.png");
				document.getElementById("Shop_btn_newavatar").innerHTML = "Get New Avatar ($" + this.newavatarcost + ")";
				document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>"+this.name+" has unlocked a new avatar: Dummy!&#013;");
				document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
			}

			else if (this.unlockedAvatar[4] == false) {
				this.money -= this.newavatarcost;
				this.totalMoneySpent += this.newavatarcost;
				this.unlockedAvatar[4] = true;
				this.newavatarcost += Math.round(this.newavatarcost*2);
				document.getElementById("boutique_unlocked_4").setAttribute("src", "assets/avatar/avatar4.png");
				document.getElementById("Shop_btn_newavatar").innerHTML = "Got all avatars!";
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
				document.getElementById("avatarDescription").innerHTML = "<h6>Dummy</h6><small>\"Placeholder, I ran out of ideas so don't mind this one for some time.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;

			case 5:
				document.getElementById("avatarDescription").innerHTML = "<h6>Robin</h6><small>\"Kazzy's fluffy cat, naps 24/7 and likes walking over the keyboard.\"</small>";
				document.getElementById("avatarDescription").setAttribute("style", "display: yes; background-color: rgba(255,255,255,0.9); border-radius: 5px; position: absolute; z-index: 2; padding: 5px; transform: translate(0px, -70px)");
				break;
		}
	}

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
			document.getElementById("Shop_btn_clickpower").innerHTML = "Upgrade Click Power ($" + this.clickpowercost + ")";
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
			document.getElementById("achievement_0").setAttribute("style", "filter: none;")
		}

		//Achievement 1: Click 1000 times!
		if (this.totalClicksEver >= 1000 && this.unlockedAchievement[1] == false) {
			this.unlockedAchievement[1] = true;
			document.getElementById("achievement_1").setAttribute("style", "filter: none;")
		}

		//Achievement 2: Got 50 Autoclickers!
		if (this.autoclickers >= 50 && this.unlockedAchievement[2] == false) {
			this.unlockedAchievement[2] = true;
			document.getElementById("achievement_2").setAttribute("style", "filter: none;")
		}

		//Achievement 3: Got 100 Autoclickers!
		if (this.autoclickers >= 100 && this.unlockedAchievement[3] == false) {
			this.unlockedAchievement[3] = true;
			document.getElementById("achievement_3").setAttribute("style", "filter: none;")
		}

		//Achievement 4: Double Power!
		if (this.clickpower >= 2 && this.unlockedAchievement[4] == false) {
			this.unlockedAchievement[4] = true;
			document.getElementById("achievement_4").setAttribute("style", "filter: none;")
		}

		//Achievement 5: Giga Power!
		if (this.clickpower >= 5 && this.unlockedAchievement[5] == false) {
			this.unlockedAchievement[5] = true;
			document.getElementById("achievement_5").setAttribute("style", "filter: none;")
		}

		//Achievement 5: Meow!
		if (this.unlockedAvatar[4] == true && this.unlockedAchievement[6] == false) {
			this.unlockedAchievement[6] = true;
			document.getElementById("achievement_6").setAttribute("style", "filter: none;")
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