'use strict'

function rockPaperScissors(){
	let min=1
	let max=4
let amount=Math.floor(Math.random() *(max-min)+min);
if(amount==1){
	console.log("Paper");
}
else if(amount==2){
console.log('Rock');
}
else if(amount==3){
	console.log('Scissors')
}
}

function fourSidedDice(){
	let min=1
	let max=5
let amount=Math.floor(Math.random() *(max-min)+min);
console.log(amount)
}

function sixSidedDice(){
	let min=1
	let max=7
let amount=Math.floor(Math.random() *(max-min)+min);
console.log(amount)
}

function eightSidedDice(){
	let min=1
	let max=9
let amount=Math.floor(Math.random() *(max-min)+min);
console.log(amount)
}

function tenSidedDice(){
	let min=1
	let max=11
let amount=Math.floor(Math.random() *(max-min)+min);
console.log(amount)
}

function twelveSidedDice(){
	let min=1
	let max=13
let amount=Math.floor(Math.random() *(max-min)+min);
console.log(amount)
}

function fourteenSidedDice(){
	let min=1
	let max=15
	let amount=Math.floor(Math.random() *(max-min)+min);
	console.log(amount)
}

// sixSidedDice();
// eightSidedDice();
// tenSidedDice()
// twelveSidedDice()
// twentySidedDice()

function rollDice(input){
	if(input!=4, 6, 8, 10, 12, 14){
		prompt('Enter a vaild dice');
	}
	else if(input==4){
		fourSidedDice();
	}
	else if(input==6){
		sixSidedDice()
	}
	else if(input==8){
		eightSidedDice();
	}
	else if(input==10){
		tenSidedDice();
	}
	else if(input==12){
		twelveSidedDice();
	}
	else if(input==14){
		fourteenSidedDice();
	}		

	
}
let input=prompt("Enter 4, 6, 8, 10, 12");

rollDice()