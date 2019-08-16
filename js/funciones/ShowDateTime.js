/*--------------------*/
/* SHOW DATE AND TIME */
/*--------------------*/
	//Prints the current date
	//Requires an html div with id "clockcontainer"
	//Ex. Today is Wednesday, August 14, 2019
	function ShowDateTime() {
		var date = new Date();
		var time = Date().slice(15, 24);
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
			console.log("clock exists!");
			clockcontainerhtml.removeChild(clockcontainerhtml.childNodes[0]);
			node.appendChild(clocktext);
			clockcontainerhtml.appendChild(node);
		}
		else {
			node.appendChild(clocktext);
			clockcontainerhtml.appendChild(node);
		}
	}