var rooms = [];

var roomZero = {
	name: "entrance",
	cell_id: 00,
	guardian: "troll"
}

rooms.push(roomZero);

var roomOne = {
	name: "cellar",
	cell_id: 01,
	guardian: "dragon"
}

rooms.push(roomOne);

var cell_id = 00;
var current_postion = "room-" + cell_id;

var movePlayer = function(direction){
	// preventDefault(e);

	var direction = document.getElementById("chosen-direction").value;


	alert("you chose " + direction);
	if(direction === "up"){
		cell_id += 10;
		current_postion += cell_id;
		console.log("current postion is " + current_postion)
	} else if (direction === "right"){
		cell_id += 01;
		console.log("current postion is " + current_postion)
	} else {
		console.log("cant move there, try again;")
	}
}