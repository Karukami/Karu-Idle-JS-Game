function Player(){
	this.money = 0;
	this.autoclickers = 0;
	this.autoclickercost = 10;

	this.MakeMoney = function() {
		this.money++;
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
	}

	this.AddAutoClicker = function() {
		if (this.money >= this.autoclickercost) {
			this.money -= this.autoclickercost;
			this.autoclickers++;
			document.getElementById("autoclickerscounter").innerHTML = "Autoclickers: " + this.autoclickers;
			this.autoclickercost += Math.round(this.autoclickercost * 1.05);
			document.getElementById("autoclickerprice").innerHTML = "Current autoclicker cost: $" + Math.round(this.autoclickercost);
		}
	}

	this.AutoClickerMakeMoney = function() {
		this.money += this.autoclickers * 0.1;
		document.getElementById("moneycounter").innerHTML = "$" + Math.round(this.money);
	}
}