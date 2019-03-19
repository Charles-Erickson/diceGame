'use strict'

// let "Paper">"Rock"
// let "Rock">'Scissors'
// let 'Scissors'>'Paper'
// //holder for later formula

// function rockPaperScissors(){
// 	let min=1
// 	let max=4
// let amount=Math.floor(Math.random() *(max-min)+min);
// if(amount==1){
// 	console.log("Paper");
// }
// else if(amount==2){
// 	console.log('Rock');
// }
// else if(amount==3){
// 	console.log('Scissors')
// }
// 	return amount;
// }

function fourSidedDice(){
	let min=1
	let max=5
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function sixSidedDice(){
	let min=1
	let max=7
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function eightSidedDice(){
	let min=1
	let max=9
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function tenSidedDice(){
	let min=1
	let max=11
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function twelveSidedDice(){
	let min=1
	let max=13
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function fourteenSidedDice(){
	let min=1
	let max=15
	let amount=Math.floor(Math.random() *(max-min)+min);
	return amount
}

function rollDice(){
	let number=prompt('Enter a dice size 4, 6, 8, 10, 12, 14:')
	let amount;
	if(number==4){
		amount=fourSidedDice();
		return amount
	}
	else if(number==6){
		amount=sixSidedDice()
		return amount
	}
	else if(number==8){
		amount=eightSidedDice();
		return amount
	}
	else if(number==10){
		amount=tenSidedDice();
		return amount
	}
	else if(number==12){
		amount=twelveSidedDice();
		return amount
	}
	else if(number==14){
		amount=fourteenSidedDice();
		return amount
	}		
	else{
		prompt('Enter a real dice amount');
	}
}

function getCards(){
	let cards=rollDice();
	return cards
}

function arrayPlayer(){
	let paper=getCards();
	let rock=getCards();
	let scissors= getCards();
	let pap=getCards();
	let roc=getCards();
	let scis= getCards();
	let playerArray=[paper+pap,rock+rock,scissors+scis]
	return playerArray

}

function getPlayerTwoHand(){
	let twoHand=arrayPlayer();
	console.log(twoHand);
	return twoHand

}


// function playerArray(){
// 	let playerArray=[getCards(),getCards(),getCards()]
// 	return playerArray
// }

function playCard(){
	let input=prompt('Player one: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
	let playCard;
	switch(input){
		case(1):
		playcard="Paper"
		return playCard;
		break;
	case(2):
		playCard='Rock'
		return playCard;
		break;
	case(3):
		playCard='Scissors'
		return playCard;
		break;
	default:
		prompt('Enter 1, 2, or 3')
	}
}

function getPlayerOneHand(){
	let oneHand=arrayPlayer()
	console.log(oneHand)
	return oneHand
}

// gameRules();

function gameRules(){
	let playerOneInput=playCard()
	let playerTwoInput=playCard()

	if(playerOneInput=="Paper" && playerTwoInput=="Rock"){
		alert('Player One Wins!!!!');

			return
	}
	else if(playerOneInput=='Scissors' && playerTwoInput=='Paper'){
		alert('Player One Wins!!!!');
			return
	}
	else if(playerOneInput=='Rock' && playerTwoInput=='Scissors'){
		alert('Player One Wins!!!!');
			return 
	}
	else if(playerTwoInput=='Paper' && playerOneInput=="Rock"){
		alert('Player Two Wins!!!!');
			return
	}
	else if(playerTwoInput=='Rock' && playerOneInput=='Scissors'){
		alert('Player Two Wins!!!!');
			return
	}
	else if(playerTwoInput=='Scissors' && playerOneInput=="Paper"){
		alert('Player Two Wins!!!!');
			return
	}
	else if( playerOneInput===playerTwoInput){
		alert('Draw')
		return 
	}
	else{
		alert('redo')
	}
}



// function playerOneInput(){
	// let rock='rock'
	// let input=prompt('Player One enter Rock, Paper, or Scissors')
	// if(input=='paper'){
	// 	//return paper
	// }
	// else if(input=='rock'){
	// 	//return rock
	// }
	// else if(input== 'scissors'){
	// 	//return scissors
	// }
	// else{
	// 	prompt('Please enter rock, paper, or scissors')
	// }
// }

// function playerTwoInput(){
// 	let input=prompt('Player Two enter Rock, Paper, or Scissors')
	// if(input=='paper'){
	// 	//return paper
	// }
	// else if(input=='rock'){
	// 	//return rock
	// }
	// else if(input== 'scissors'){
	// 	//return scissors
	// }
	// else{
	// 	prompt('Please enter rock, paper, or scissors')
	// }
// }

// function getRPSCards(){
// 	let input= prompt('Enter Dice size 4, 6, 8, 10, 12, 14');
// 	let rSPRoll=rollDice(input);
// 	let i=0;
// 	do{
// 		let result=rockPaperScissors(); i++;
// 		console.log(result);
// 	}
// 	while(i<rSPRoll)
// }

// function paperArray(){
// 	let newArray=[];
// 	let paperNumber;
// 	let input=prompt('PAPER: Enter Dice size 4, 6, 8, 10, 12, 14');
// 	do{
// 		paperNumber= rollDice(input)
// 	}
// 	while(rockPaperScissors=="Paper");
// 	let paperArray=newArray.push(paperNumber);
// }

// function rockArray(){
// 	let newArray=[];
// 	let rockNumber;
// 	let input= prompt('ROCK: Enter Dice size 4, 6, 8, 10, 12, 14');
// 	do{
// 		rockNumber= rollDice(input)
// 	}
// 		while(rockPaperScissors=="Rock");
// 	let rockArray=newArray.splice(0,rockNumber);
// }

// function scissorArray(){
// 	let newArray=[];
// 	let scissorNumber;
// 	let input=prompt('SCISSORS: Enter Dice size 4, 6, 8, 10, 12, 14');
// 	do{
// 		scissorNumber= rollDice(input)
// 	}
// 		while(rockPaperScissors=="Scissors");
// 	let scissorArray=newArray.splice(0,1,scissorNumber)
// }

// function cardArray(){
// 	let cardArray=paperArray()+scissorArray()+rockArray();
//}

// function subtractArray(){

// }

// function arrayPaper(){
// 	let sum;
// 	if(sum<0){
// 		sum=
// 	}
// }


// console.log(playerArray())
// function playerArray(){
// 	let paperInput=rollDice()
// 	let rockInput=rollDice()
// 	let scissorInput=rollDice()
// 	let playerArray=[paperInput,rockInput,scissorInput]
// 	return playerArray

// }
// console.log(arrayPlayer())



// function playerOneArray(){
// 	let playerOneArray=[playerArray()+arrayPlayer()]
// 	console.log(playerOneArray);
// 	return playerOneArray
// }
// console.log(playerOneArray())

// function combineArrays(){
// 	let newSumArray;
// 	for(i=0;i<playerOneArray.length;i++){

// 	}
// }



// function playerOneInsert(){
// 	let input= prompt('Player One enter Paper, Rock, or Scissors');
// 	let newArray;
// 	if(input= 'Paper'){
// 		newArray=cardArray()-[1,0,0]
// 	}
// 	else if(input='Rock'){
// 		newArray=cardArray()-[0,1,0]
// 	}
// 	else if(input='Scissors'){
// 		newArray=cardArray()-[0,0,1]
// 	}
// 	else{
// 		newArray=prompt('Please enter Paper, Rock, Scissors')
// 	}

// }

// function playerTwoInsert(){
// 	let input= prompt('Player Two enter Paper, Rock, or Scissors');
// 	let newArray;
// 	if(input== 'Paper'){
// 		newArray=cardArray()-[1,0,0]
// 	}
// 	else if(input=='Rock'){
// 		newArray=cardArray()-[0,1,0]
// 	}
// 	else if(input=='Scissors'){
// 		newArray=cardArray()-[0,0,1]
// 	}
// 	else{
// 		newArray=prompt('Please enter Paper, Rock, Scissors')
// 	}
// }



//[getCards(),getCards(),getcards()]
// rockArray()

//gameRules(playerOneInput(),playerTwoInput())

// playerOneArray()