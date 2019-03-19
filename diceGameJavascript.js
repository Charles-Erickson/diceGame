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
		prompt('Enter a real dice amount');
	}
}
function gameRules(playerOneInput,playerTwoInput){
	if(playerOneInput=="Paper" && playerTwoInput=="Rock"){
		alert('Player One Wins!!!!')
	}
	else if(playerOneInput=='Scissors' && playerTwoInput=='Paper'){
		alert('Player One Wins!!!!')
	}
	else if(playerOneInput=='Rock' && playerTwoInput=='Scissors'){
		alert('Player One Wins!!!!')
	}
	else if(playerTwoInput=='Paper' && playerOneInput=="Rock"){
		alert('Player Two Wins!!!!')
	}
	else if(playerTwoInput=='Rock' && playerOneInput=='Scissors'){
		alert('Player Two Wins!!!!')
	}
	else if(playerTwoInput=='Scissors' && playerOneInput=="Paper"){
		alert('Player Two Wins!!!!')
	}
	else if( playerOneInput===playerTwoInput){
		alert('Draw')
	}
	else(){
		prompt('redo')
	}
}

function getRPSCards(){
	let input= prompt('Enter Dice size 4, 6, 8, 10, 12, 14');
	let rSPRoll=rollDice(input);
	let i=0;
	do{
		let result=rockPaperScissors(); i++;
		console.log(result)
	}
	while(i<rSPRoll)
}

function paperArray(){
	let newArray=[];
	let input=prompt('PAPER: Enter Dice size 4, 6, 8, 10, 12, 14');
	do{
		let paperNumber= rollDice(input)
	}
	while(rockPaperScissors()=="Paper");
	let paperArray=newArray.push(paperNumber);
}

function rockArray(){
	let newArray=[];
	let input= prompt('ROCK: Enter Dice size 4, 6, 8, 10, 12, 14');
	do{
		let rockNumber= rollDice(input)
	}
		while(rockPaperScissors()=="Rock");
	let rockArray=newArray.splice(0,rockNumber);
}

function scissorArray(){
	let newArray=[];
	let input=prompt('SCISSORS: Enter Dice size 4, 6, 8, 10, 12, 14');
	do{
		let scissorNumber= rollDice(input)
	}
		while(rockPaperScissors()=="Scissors");
	let scissorArray=newArray.splice(0,1,scissorNumber)
}

function cardArray(){
	let cardArray=paperArray()+scissorArray()+rockArray();
}

// function subtractArray(){

// }

function playerOneInsert(){
	let input= prompt('Player One enter Paper, Rock, or Scissors');
	let newArray;
	if(input= 'Paper'){
		newArray=cardArray()-[1,0,0]
	}
	else if(input='Rock'){
		newArray=cardArray()-[0,1,0]
	}
	else if(input='Scissors'){
		newArray=cardArray()-[0,0,1]
	}
	else{
		newArray=prompt('Please enter Paper, Rock, Scissors')
	}

	let 

}

getRPSCards()