'use strict'

function rollDie(n){
	let amount=Math.floor(Math.random() *n)+1;
	return amount;
}

function rollDice(){
	let number=prompt('Enter a dice size 4, 6, 8, 10, 12, 14:')
	let amount;
	if(number==4){
		amount=rollDie(4);
		return amount;
	}
	else if(number==6){
		amount=rollDie(6)
		return amount
	}
	else if(number==8){
		amount=rollDie(8);
		return amount
	}
	else if(number==10){
		amount=rollDie(10);
		return amount
	}
	else if(number==12){
		amount=rollDie(12);
		return amount
	}
	else if(number==14){
		amount=rollDie(14);
		return amount
	}		
	else{
	 alert('Enter a real dice amount');
	 amount=rollDice();
	 return amount
	}
}

function getCards(){
	let cards=rollDice();
	alert(cards);
	return cards
}

function bothPlayerCards(player1Card,player2Card){
	let player1= player1Card;
	let player2= player2Card;

	alert('Player One roll for cards')
	player1Card.paper=findPaperCardSum();
	player1Card.rock= findRockCardSum();
	player1Card.scissors= findScissorsCardSum();

	alert('Player Two roll for cards')
	player2Card.paper=findPaperCardSum();
	player2Card.rock= findRockCardSum();
	player2Card.scissors= findScissorsCardSum();
	console.log(player1Card);
	console.log(player2Card);

	return player1Card, player2Card
}

function findPaperCardSum(){
	alert( 'Roll for Paper');
	let p1=getCards();
	let p2= getCards();
	let paper=p1+p2; 
	return paper
}

function findRockCardSum(){
	alert('Roll for Rock');
	let r1= getCards();
	let r2=getCards();
	let rock=r1+r2;
	return rock
}

function findScissorsCardSum(){
	alert('Roll for Scissors');
	let s1= getCards();
	let s2=getCards();
	let scissors=s1+s2;
	return scissors
}

function playCardPlayerTwo(player2Card){
	let input=prompt('Player two: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
	let playCard;
	let cardsToPlay=player2Card
	switch(input){
		case "1":
		if(cardsToPlay.paper>0){
		playCard="Paper"
		player2Card.paper -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Paper cards left');
			playCard=playCardPlayerTwo(player2Card);
			return playCard;
		}
	case "2":
		if(cardsToPlay.rock>0){
		playCard="Rock"
		player2Card.rock -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Rock cards left');
			playCard=playCardPlayerTwo(player2Card);
			return playCard
		}

	case "3":
		if(cardsToPlay.scissors>0){
		playCard="Scissors"
		player2Card.scissors -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Scissor cards left');
			playCard=playCardPlayerTwo(player2Card);
			return playCard
		}
	default:
		alert('Enter 1, 2, or 3')
		playCardPlayerTwo(player2Card);
	}
}

function playCardPlayerOne(player1Card){
	let input=prompt('Player one: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
	let playCard;
	let cardsToPlay=player1Card
	switch(input){
		case "1":
		if(cardsToPlay.paper>0){
		playCard="Paper"
		player1Card.paper -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Paper cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard;
		}
	case "2":
		if(cardsToPlay.rock>0){
		playCard="Rock"
		player1Card.rock -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Rock cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard
		}

	case "3":
		if(cardsToPlay.scissors>0){
		playCard="Scissors"
		player1Card.scissors -= 1;
		console.log(cardsToPlay)
		return playCard;
		}
		else{
			alert('No Scissor cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard
		}
	default:
		alert('Enter 1, 2, or 3')
		playCardPlayerOne(player2Card);
	}
}

function playCard(){
	let input=prompt('Player two: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
	let playCard;
	switch(input){
		case "1":
		playCard="Paper"
		return playCard;
	case "2":
		playCard="Rock"
		return playCard;
	case "3":
		playCard="Scissors"
		return playCard;
	default:
		alert('Enter 1, 2, or 3')
		playCard();
	}
}

function gameRules(player1Card,player2Card){
	let player1=player1Card;
	let player2= player2Card;
	let playerOneInput=playCardPlayerOne(player1Card);
	let playerTwoInput=playCardPlayerTwo(player2Card);
	let win;

	if(playerOneInput=="Paper" && playerTwoInput=="Rock"){
		alert('Player One Wins!!!!');
		win=console.log('Player One Win');
			return win;
	}
	else if(playerOneInput=='Scissors' && playerTwoInput=='Paper'){
		alert('Player One Wins!!!!');
		win=console.log('Player One Win');
			return win;
	}
	else if(playerOneInput=='Rock' && playerTwoInput=='Scissors'){
		alert('Player One Wins!!!!');
		win= console.log('Player One Win');
			return win;
	}
	else if(playerTwoInput=='Paper' && playerOneInput=="Rock"){
		alert('Player Two Wins!!!!');
		win=console.log("Player Two Win");
			return;
	}
	else if(playerTwoInput=='Rock' && playerOneInput=='Scissors'){
		alert('Player Two Wins!!!!');
		win=console.log("Player Two Win");
			return win; 
	}
	else if(playerTwoInput=='Scissors' && playerOneInput=="Paper"){
		alert('Player Two Wins!!!!');
		console.log("Player Two Win");
			return
	}
	else if( playerOneInput===playerTwoInput){
		alert('Draw')
		gameRules();
	}
	else{
		alert('Redo')
		gameRules();
	}
}

function gamePlay(){
	let player1Card = {
		rock : 0,
		paper : 0,
		scissors : 0
	}

	let player2Card={
		rock:0,
		paper:0,
		scissors:0
	}
	let playerWins;
	alert('Player One roll for cards')
	player1Card.paper=findPaperCardSum();
	player1Card.rock= findRockCardSum();
	player1Card.scissors= findScissorsCardSum();

	alert('Player Two roll for cards')
	player2Card.paper=findPaperCardSum();
	player2Card.rock= findRockCardSum();
	player2Card.scissors= findScissorsCardSum();
	console.log(player1Card);
	console.log(player2Card);
	alert("Ohhh that's a baseball");
	let player1=player1Card;
	let player2=player2Card;
	for(let i=0;i<3;i++){
		gameRules(player1, player2);
	}
	
}

gamePlay()


// function playCardPlayerOne(player1Card){
// 	let input=prompt('Player two: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
// 	let playCard;
	
// 	switch(input){
// 			case "1":
// 		if(cardsToPlay.paper>0){
// 		playCard="Paper"
// 		cardsToPlay.paper-1
// 		console.log(cardsToPlay)
// 		return playCard, cardsToPlay;
// 		}
// 		else{
// 			alert('No Paper cards left');
// 			playCard=playCardPlayerOne(player1Card);
// 			return playCard;
// 		}
// 	case "2":
// 		if(cardsToPlay.rock>0){
// 		playCard="Rock"
// 		cardsToPlay.rock-1
// 		console.log(cardsToPlay)
// 		return playCard, cardsToPlay;
// 		}
// 		else{
// 			alert('No Rock cards left');
// 			playCard=playCardPlayerOne(player1Card);
// 			return playCard
// 		}

// 	case "3":
// 		if(cardsToPlay.scissors>0){
// 		playCard="Scissors"
// 		cardsToPlay.scissors-1
// 		console.log(cardsToPlay)
// 		return playCard, cardsToPlay;
// 		}
// 		else{
// 			alert('No Scissor cards left');
// 			playCard=playCardPlayerOne(player1Card);
// 			return playCard
// 		}
// 	default:
// 		alert('Enter 1, 2, or 3')
// 		playCardPlayerTwo();
// 	}
// }

// function fourSidedDice(){
// 	let min=1
// 	let max=5
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }

// function sixSidedDice(){
// 	let min=1
// 	let max=7
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }

// function eightSidedDice(){
// 	let min=1
// 	let max=9
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }

// function tenSidedDice(){
// 	let min=1
// 	let max=11
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }

// function twelveSidedDice(){
// 	let min=1
// 	let max=13
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }

// function fourteenSidedDice(){
// 	let min=1
// 	let max=15
// 	let amount=Math.floor(Math.random() *(max-min)+min);
// 	return amount
// }




// function playCardPlayerOne(player1Card){
// 	let input=prompt('Player one: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
// 	let playCard;
// 	switch(input){
// 		case "1":
// 		if(player1Card.paper>0){
// 		playCard="Paper"
// 		playCard.paper-1
// 		return playCard;
// 		}
// 		else{
// 			alert('No Paper cards left');
// 			playCard=playCardPlayerOne()
// 			return playCard
// 		}
// 	case "2":
// 		if(player1Card.rock>0){
// 		playCard="Rock"
// 		playCard.rock-1
// 		return playCard;
// 		}
// 		else{
// 			alert('No Rock cards left');
// 			playCard=playCardPlayerOne()
// 			return playCard
// 		}

// 	case "3":
// 		if(player1Card.scissors>0){
// 		playCard="Scissors"
// 		playCard.scissors-1
// 		return playCard;
// 		}
// 		else{
// 			alert('No Scissor cards left');
// 			playCard=playCardPlayerOne()
// 			return playCard
// 		}
// 	default:
// 		alert('Enter 1, 2, or 3')
// 		playCardPlayerOne();
// 	}
// }
// function cardCounter(){

// }

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

// arrayPlayer()

// function getPlayerTwoHand(){
// 	let twoHand=arrayPlayer();
// 	console.log(twoHand);
// 	return twoHand

// }


// function playerArray(){
// 	let playerArray=[getCards(),getCards(),getCards()]
// 	return playerArray
// }


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


// function getPlayerOneHand(){
// 	let oneHand=arrayPlayer()
// 	console.log(oneHand)
// 	return oneHand
// }

// gameRules();

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