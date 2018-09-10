
    // JAVASCRIPT    
    var win = 0;
    var lose = 0;
    var guessNumber = 9; //total of guesses a user can have
    var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //alphabet array
    var guessAmount = []; //array push user's guesses

    document.onkeyup = function(event) { //function to execute for each key Press
        var user = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computer = alphabetArray[Math.floor(Math.random()*alphabetArray.length)]; 
        guessAmount.push(user); 


        if (user == computer) { //user matches computer
            win++; //add to 1 win variable
            guessNumber = 9; //reset guessNumber to 9
            guessAmount.length = 0; //reset guessAmount array to 0
        }


        else if (guessNumber == 0){
            lose++;
            guessNumber = 9;
            guessAmount.length = 0;
        }


        else if (user !== computer){
            guessNumber--; 
        }  


        
        var html = "<h1>The Psychic Game</h1> <br><br>" + 
        "<p>Guess what letter I'm thinking of !</p><br>" +
        "<p>Total win: " + 
        win + 
        "</p><br>" +
        "<p>Total lose: " + 
        lose + 
        "</p><br>" +
        "<p>Guesses Left: " + 
        guessNumber + 
        "</p><br>" +
        "<p>Your Guesses so far: " +
        guessAmount +
        "</p>"
        ;

        document.querySelector('#psychicGame').innerHTML = html; //updates all html with the current variables
    }
