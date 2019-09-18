function playGame (playerInput){

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName (randomNumber);


    printMessage('Mój ruch to: ' + computerMove);

    /**let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');**/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName (playerInput);



    printMessage('Twój ruch to: ' + playerMove);

    let  = displayResult (computerMove, playerMove);



    
}


document.getElementById('rock').addEventListener('click', function(){
    playGame('1');
  });
document.getElementById('paper').addEventListener('click', function(){
    playGame('2');
  });
document.getElementById('scissors').addEventListener('click', function(){
    playGame('3');
  });




  
  
