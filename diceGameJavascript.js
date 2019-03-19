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
rockPaperScissors();
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
	let input= prompt('Enter Dice size');
	let rSPRoll=rollDice(input);
	let i=0;
	do{
		rockPaperScissors(); i++;
	}
	while(i<rSPRoll){
		
	}
}

function paperArray(){
	let newArray=[];
	let input=prompt('Enter dice size');
	do{
		let paperNumber= rollDice(input);
	while(rockPaperScissors()=="Paper")}
	let paperArray=newArray.push(paperNumber);
}

function rockArray(){
	let newArray=[];
	let input= prompt('Enter dice size');
	do{
		let rockNumber= rollDice(input);
		while(rockPaperScissors()=="Rock")
	}
	let rockArray=newArray.splice(0,rockNumber);
}

function scissorArray(){
	let newArray=[];
	let input=prompt('Enter dice size');
	do{
		let scissorNumber= rollDice(input);
		while(rockPaperScissors()=="Scissors")
	}
	let scissorArray=newArray.splice(0,1,scissorNumber)
}

function cardArray(){
	let cardArray=paperArray()+scissorArray()+rockArray();
}

function 
