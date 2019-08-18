/*--------------------*/
/* SHOW DATE AND TIME */
/*--------------------*/
	//Prints the current date
	//Requires an html div with id "clockcontainer"
	//Ex. Today is Wednesday, August 14, 2019
	function ShowDateTime() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		//These conditionals add an extra 0 to the number of hours/minutes/seconds
		//in case they're under 10, to keep the 2 digit format
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		var time = hours + ":" + minutes + ":" + seconds;
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var months = ["January", "February", "March", "April", 
					  "May", "June", "July", "August", "September",
					  "October", "November", "December"];
		var clocktext = document.createTextNode("Today is " + days[date.getDay()] + ", " + months[date.getMonth()]
											 	+ " " + date.getDate() + ", " + date.getFullYear() + ", " + 
											 	"Current time is: " + time);
		var node = document.createElement("p");
		node.setAttribute("id","clock");
		var clockcontainerhtml = document.getElementById("clockcontainer");

		if (document.getElementById("clock")) {
			clockcontainerhtml.removeChild(clockcontainerhtml.childNodes[0]);
			node.appendChild(clocktext);
			clockcontainerhtml.appendChild(node);
		}
		else {
			node.appendChild(clocktext);
			clockcontainerhtml.appendChild(node);
		}
	}