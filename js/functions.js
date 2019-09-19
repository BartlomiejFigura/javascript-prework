 const getMoveName = function(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	}
	else if (argMoveId == 2){
		return 'papier';
	}
	else if (argMoveId == 3){
		return 'nożyce'
	}
	else {
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
	}
  
}

const displayResult = function(argComputerMove, argPlayerMove)  {
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrywasz :(');
	}
	if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrywasz :(');
	}
	if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrywasz :(');
	}
	if( argComputerMove == argPlayerMove){
		printMessage('Remis');
	}

}

const printMessage = function(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}