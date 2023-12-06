let playerDice1 = 0;
let playerDice2 = 0;
let playerTotal = 0;
let pcDice1 = 0;
let pcDice2 = 0;
let pcTotal = 0;

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

    document.getElementById("playerDice1").style.color = "green";
    document.getElementById("playerDice2").style.color = "green";
    document.getElementById("playerTotal").style.color = "green";

    document.getElementById("pcDice1").style.color = "red";
    document.getElementById("pcDice2").style.color = "red";
    document.getElementById("pcTotal").style.color = "red";
 } else if (pcTotal > playerTotal) {
    document.getElementById("winner").innerHTML = "Winner: PC";

    document.getElementById("playerDice1").style.color = "red";
    document.getElementById("playerDice2").style.color = "red";
    document.getElementById("playerTotal").style.color = "red";

    document.getElementById("pcDice1").style.color = "green";
    document.getElementById("pcDice2").style.color = "green";
    document.getElementById("pcTotal").style.color = "green";
 } else if (playerTotal == pcTotal) {
    document.getElementById("winner").innerHTML = "It's a tie!";

    document.getElementById("playerDice1").style.color = "grey";
    document.getElementById("playerDice2").style.color = "grey";
    document.getElementById("playerTotal").style.color = "grey";

    document.getElementById("pcDice1").style.color = "grey";
    document.getElementById("pcDice2").style.color = "grey";
    document.getElementById("pcTotal").style.color = "grey";
 } else {
    document.getElementById("winner").innerHTML = "";

    document.getElementById("playerDice1").style.color = "grey";
    document.getElementById("playerDice2").style.color = "grey";
    document.getElementById("playerTotal").style.color = "grey";

    document.getElementById("pcDice1").style.color = "grey";
    document.getElementById("pcDice2").style.color = "grey";
    document.getElementById("pcTotal").style.color = "grey";
 }
}