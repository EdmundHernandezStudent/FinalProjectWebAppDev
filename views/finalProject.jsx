import React from `react`;
import ReactDom from `react-ddom/client`;


var mainPage = React.createClass({
    render:function() {
        return (
            <div>
        <meta name="viewport" content="width=device-width" />
        <meta charset="utf-8" />
        <title>Final Project</title>
        <link rel="stylesheet" type="text/css" href="FPstyles.css" />

        <div class="game-container">
        <h1>Dice Game</h1>
        <p>Click the "Roll Dice" button to roll the dice. The winner is the higher scorer.</p>
        </div>

        <table>
        <tr>
            <th>Player</th>
            <th>Dice 1</th>
            <th>Dice 2</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>Player</td>
            <td id="playerDice1">-</td>
            <td id="playerDice2">-</td>
            <td id="playerTotal">-</td>
        </tr>
        <tr>
            <td>PC</td>
            <td id="pcDice1">-</td>
            <td id="pcDice2">-</td>
            <td id="pcTotal">-</td>
        </tr>
        </table>


        <div className="center">
        <button onclick="rollDice()">Roll Dice</button>
        </div>
        <br/>
        <br/>

        <div className="center">
        <label for="fname">Player's name:</label>
        <input type="text" id="plname" name="plname"/><br/><br/>
        <label for="fname">PC's name:</label>
        <input type="text" id="pcname" name="pcname"/><br/><br/>
        <button onclick="savePlayer()">Save Game Results</button>
        </div>

        <div className="center">
        <p id="winner"></p>
        </div>

        <div className="center">
        <button onclick="location.href='FPScoreboard.html'">Go to Scoreboard</button>
        </div>
        </div>
);
}});


root.render(<mainPage />);
