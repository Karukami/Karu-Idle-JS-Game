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
	this.gameStartedDate = new Date();
	this.gameStarted = this.gameStartedDate.toLocaleDateString();
	this.totalClicksEver = 0;
	this.totalMoneyEver = 0;
	this.totalMoneySpent = 0;
	this.clickpower = 1;
	this.clickpowercost = 100;

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
		if (this.activeavatar == 1) {
			this.activeavatar = 2;
		}
		else if (this.activeavatar == 2) {
			this.activeavatar = 1;
		}
		this.UpdateAvatar();
	}

	/*-----------------*/
	/* Previous Avatar */
	/*-----------------*/
	this.PreviousAvatar = function() {
		if (this.activeavatar == 2) {
			this.activeavatar = 1;
		}
		else if (this.activeavatar == 1) {
			this.activeavatar = 2;
		}
		this.UpdateAvatar();
	}

	/*---------------*/
	/* Update Avatar */
	/*---------------*/
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

	this.openNameChangeModal = function() {
		$('#ChangeNameModal').modal('show');
	}

	this.setName = function() {
		this.name = document.getElementById("newnameinput").value;
		document.getElementById("namediv").innerHTML = "Player: " + this.name;
		document.getElementById("console").innerHTML = document.getElementById("console").innerHTML.concat(">>Changed your name to: "+this.name+"&#013;");
		document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
	}

	this.updateStats = function() {
		document.getElementById("statvalues").innerHTML =
		this.gameStarted + "<br>" + this.totalClicksEver + "<br>" + this.autoclickers +
		"<br>" + Math.round(this.totalMoneyEver) + "<br>" + this.totalMoneySpent;
	}

	this.increaseClickPower = function() {
		if (this.money >= Math.round(this.clickpowercost)) {
			this.money -= this.clickpowercost;
			this.clickpower++;
			this.clickpowercost += this.clickpowercost*9;
			document.getElementById("btn_makemoney").innerHTML = "Make Money! ($" + this.clickpower + ")";
			document.getElementById("Shop_btn_clickpower").innerHTML = "Upgrade Click Power ($" + this.clickpowercost + ")";
			this.updateStats();
		}
	}
}