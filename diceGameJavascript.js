'use strict'

function rollDie(n){
	let amount=Math.floor(Math.random() *n)+1;
	return amount;
}

function rollDice(){
	let number=prompt('Enter a dice size 3, 4, 5, 6, 7, 8:')
	let amount;
	if(number==3){
		amount=rollDie(3);
		return amount;
	}
	else if(number==4){
		amount=rollDie(4)
		return amount
	}
	else if(number==5){
		amount=rollDie(5);
		return amount
	}
	else if(number==6){
		amount=rollDie(6);
		return amount
	}
	else if(number==7){
		amount=rollDie(7);
		return amount
	}
	else if(number==8){
		amount=rollDie(8);
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


function findPaperCardSum(){
	alert( 'Roll for Paper');
	let p1=getCards();
	let p2= getCards();
	let paper=p1+p2; 
	alert('Total Paper Cards '+paper);
	return paper
}

function findRockCardSum(){
	alert('Roll for Rock');
	let r1= getCards();
	let r2=getCards();
	let rock=r1+r2;
	alert('Total Rock Cards '+rock);
	return rock
}

function findScissorsCardSum(){
	alert('Roll for Scissors');
	let s1= getCards();
	let s2=getCards();
	let scissors=s1+s2;
	alert('Total Scissors Cards '+scissors);
	return scissors
}

function playCardPlayerTwo(player2Card){
	let input=prompt('Player two: Enter 1 for Paper; 2 for Rock; 3 for Scissors')
	let playCard;
	switch(input){
		case "1":
		if(player2Card.paper>0){
		playCard="Paper"
		player2Card.paper -= 1;
		console.log(player2Card)
		return playCard;
		}
		else{
			alert('No Paper cards left');
			playCard=playCardPlayerTwo(player2Card);
			return playCard;
		}
	case "2":
		if(player2Card.rock>0){
		playCard="Rock"
		player2Card.rock -= 1;
		console.log(player2Card)
		return playCard;
		}
		else{
			alert('No Rock cards left');
			playCard=playCardPlayerTwo(player2Card);
			return playCard
		}

	case "3":
		if(player2Card.scissors>0){
		playCard="Scissors"
		player2Card.scissors -= 1;
		console.log(player2Card)
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
		switch(input){
		case "1":
		if(player1Card.paper>0){
		playCard="Paper"
		player1Card.paper -= 1;
		console.log(player1Card)
		return playCard;
		}
		else{
			alert('No Paper cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard;
		}
	case "2":
		if(player1Card.rock>0){
		playCard="Rock"
		player1Card.rock -= 1;
		console.log(player1Card)
		return playCard;
		}
		else{
			alert('No Rock cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard
		}

	case "3":
		if(player1Card.scissors>0){
		playCard="Scissors"
		player1Card.scissors -= 1;
		console.log(player1Card)
		return playCard;
		}
		else{
			alert('No Scissor cards left');
			playCard=playCardPlayerOne(player1Card);
			return playCard
		}
	default:
		alert('Enter 1, 2, or 3')
		playCardPlayerOne(player1Card);
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
		gameRules(player1Card,player2Card);
	}
	else{
		alert('Redo')
		gameRules(player1Card,player2Card);
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
	console.log("Player 1 Hand ", player1Card);
	console.log("Player 2 Hand ", player2Card);
	alert("Let's Play!!!");
	let player1=player1Card;
	let player2=player2Card;
	for(let i=0;i<5;i++){
		gameRules(player1, player2);
	}
	
}

gamePlay()