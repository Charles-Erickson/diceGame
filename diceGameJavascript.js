'use strict'

// let "Paper">"Rock"
// let "Rock">'Scissors'
// let 'Scissors'>'Paper'
// //holder for later formula

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

function rollDice(number){
	if(number==4){
		fourSidedDice();
	}
	else if(number==6){
		sixSidedDice()
	}
	else if(number==8){
		eightSidedDice();
	}
	else if(number==10){
		tenSidedDice();
	}
	else if(number==12){
		twelveSidedDice();
	}
	else if(number==14){
		fourteenSidedDice();
	}		
	else{
		console.log('Enter a real dice amount');
	}
}

function getRPSCards(){
	input= prompt('Enter Dice size');
	let rSPRoll=rollDice(input);
	i=0;
	while(i<rSPRoll){
		rockPaperScissors(); i++;
	}
}



function paperArray(){
	let newArray=[];
	if(rockPaperScissors()=="Paper"){
		let paperArray= rollDice()
	}

}

getRPSCards()