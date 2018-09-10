
    // JAVASCRIPT    
    var win = 0;
    var lose = 0;
    var guessNumber = 9; //total of guesses a user can have
    var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //alphabet array
    var guessAmount = []; //array push user's guesses

    document.onkeyup = function(event) { //function to execute for each key Press
        var user = String.fromCharCode(event.keyCode).toLowerCase(); //changes key character to lowercase and assigns it to user
        var computer = alphabetArray[Math.floor(Math.random()*alphabetArray.length)]; //random array selector from alphabet
        guessAmount.push(user); //pushes user entry into guessAmmount array


        if (user === computer) { //user matches computer
            win++; //add  1 win variable
            guessNumber = 9; //reset guessNumber to 9
            guessAmount.length = 0; //empties guessAmount array to 0
        }


        else if (guessNumber === 0){ // when no guesses left
            lose++; //add 1 to lose variable
            guessNumber = 9;  //reset guessNumber to 9
            guessAmount.length = 0; //empty guessAmount array to 0
        }


        else if (user !== computer){ //user doesn't match computer
            guessNumber--; //subract 1 from guesses
        }  


        
        var html = 
        "<h1>The Psychic Game</h1> <br><br><p>Guess what letter I'm thinking of</p><br>" +
        "<p>Total Wins: " +  win + "</p><br>" +
        "<p>Total Losses: " + lose + "</p><br>" +
        "<p>Guesses Left: " + guessNumber + "</p><br>" +
        "<p>Your Guesses so far: " + guessAmount +"</p>";

        document.querySelector('#psychicGame').innerHTML = html; //updates all html with the current variables
    }
