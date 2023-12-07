let playerDice1 = 0;
let playerDice2 = 0;
let playerTotal = 0;
let pcDice1 = 0;
let pcDice2 = 0;
let pcTotal = 0;

var game_outcome;

function rollDice() {
 playerDice1 = Math.floor(Math.random() * 6) + 1;
 playerDice2 = Math.floor(Math.random() * 6) + 1;
 playerTotal = playerDice1 + playerDice2;

 pcDice1 = Math.floor(Math.random() * 6) + 1;
 pcDice2 = Math.floor(Math.random() * 6) + 1;
 pcTotal = pcDice1 + pcDice2;

 document.getElementById("playerDice1").innerHTML = playerDice1;
 document.getElementById("playerDice2").innerHTML = playerDice2;
 document.getElementById("playerTotal").innerHTML = playerTotal;

 document.getElementById("pcDice1").innerHTML = pcDice1;
 document.getElementById("pcDice2").innerHTML = pcDice2;
 document.getElementById("pcTotal").innerHTML = pcTotal;

 if (playerTotal > pcTotal) {
    document.getElementById("winner").innerHTML = "Winner: Player";

    document.getElementById("playerDice1").style.color = "lightgreen";
    document.getElementById("playerDice2").style.color = "lightgreen";
    document.getElementById("playerTotal").style.color = "lightgreen";

    document.getElementById("pcDice1").style.color = "darkred";
    document.getElementById("pcDice2").style.color = "darkred";
    document.getElementById("pcTotal").style.color = "darkred";

    game_outcome = 1;
 } else if (pcTotal > playerTotal) {
    document.getElementById("winner").innerHTML = "Winner: PC";

    document.getElementById("playerDice1").style.color = "darkred";
    document.getElementById("playerDice2").style.color = "darkred";
    document.getElementById("playerTotal").style.color = "darkred";

    document.getElementById("pcDice1").style.color = "lightgreen";
    document.getElementById("pcDice2").style.color = "lightgreen";
    document.getElementById("pcTotal").style.color = "lightgreen";

    game_outcome = 2;
 } else if (playerTotal == pcTotal) {
    document.getElementById("winner").innerHTML = "It's a tie!";

    document.getElementById("playerDice1").style.color = "black";
    document.getElementById("playerDice2").style.color = "black";
    document.getElementById("playerTotal").style.color = "black";

    document.getElementById("pcDice1").style.color = "black";
    document.getElementById("pcDice2").style.color = "black";
    document.getElementById("pcTotal").style.color = "black";

    game_outcome = 3;
 } else {
    document.getElementById("winner").innerHTML = "";

    document.getElementById("playerDice1").style.color = "black";
    document.getElementById("playerDice2").style.color = "black";
    document.getElementById("playerTotal").style.color = "black";

    document.getElementById("pcDice1").style.color = "black";
    document.getElementById("pcDice2").style.color = "black";
    document.getElementById("pcTotal").style.color = "black";
 }
}

function saveGame()
{
    //logic for who won game
    var pn = document.getElementById('plname').value;
    var cn = document.getElementById('pcname').value;
    var wn = '';
    if( game_outcome == 1){
        wn = pn;
    }
    else if(game_outcome == 2){
        wn = cn;
    }
    else if(game_outcome == 3){
        wn = 'Tie';
    }
    

    var data = {
        playerName: pn,
        computerName: cn,
        winner: wn
    };

    fetch('/add-game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
