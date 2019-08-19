/*---------------*/
/* Player Object */
/*---------------*/
//This object simbolizes the user, it has money, autoclickers and autoclicker cost variables.
//These variables are modified when loading a savefile.
function Player(){
	this.money = 0;
	this.autoclickers = 0;
	this.autoclickercost = 10;
	this.activeavatar = 1;

	/*------------*/
	/* Make Money */
	/*------------*/
	//This function is called when clicking the Make Money Button.
	//It just adds +1 to the money counter and updates the html element.
	this.MakeMoney = function() {
		this.money++;
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
	}

	/*-----------------*/
	/* Add Autoclicker */
	/*-----------------*/
	//This function is called when clicking the Buy Autoclicker Button.
	//If the player has enough money, adds +1 to the autoclicker count, and you pay for it.
	//Else, nothing happens when you click the button.
	this.AddAutoClicker = function() {
		if (this.money >= this.autoclickercost) {
			this.money -= this.autoclickercost;
			this.autoclickers++;
			document.getElementById("autoclickerscounter").innerHTML = "Autoclickers: " + this.autoclickers;
			this.autoclickercost += Math.round(this.autoclickercost * 0.15);
			document.getElementById("autoclickerprice").innerHTML = "Current autoclicker cost: $" + Math.round(this.autoclickercost);
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
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
	}

	this.NextAvatar = function() {
		if (this.activeavatar == 1) {
			this.activeavatar = 2;
		}
		this.UpdateAvatar();
	}

	this.PreviousAvatar = function() {
		if (this.activeavatar == 2) {
			this.activeavatar = 1;
		}
		this.UpdateAvatar();
	}

	this.UpdateAvatar = function() {
		switch(this.activeavatar) {
			case 1:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar1big.png");
				document.getElementById("avatarname").innerHTML = ". + Karu + .";
				break;

			case 2:
				document.getElementById("currentavatar").setAttribute("src", "assets/avatar/avatar2big.png");
				document.getElementById("avatarname").innerHTML = ". + Kazzy + .";
		}
	}
}