'use strict'
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

// function primeNumberDector(numb){
// 	for (let i=2;i<numb;i++){
// 		if(numb<2){
// 			false;
// 		}
// 		else if(numb%i===0){
// 			false;
// 		}
// 		else{
// 			 true;
// 			}
// 		if(numb == true ){
// 			console.log(numb)
// 			return numb
// 		}
// 	}
// }

function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

isPrime(25)