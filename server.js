const express = require('express')
const app = express()
const port = 3000
var mysql = require("mysql2")



const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"parker",
    database:"dice"
})

//connects to the database with error checking
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  //populates the scoreboard with data from database
  app.get('/scoreboard', (req, res) => {
    connection.query('SELECT * FROM scoreboard', (err, rows) => {
      if (err) {
        console.error('Error querying database: ', err);
        return;
      }
      res.render('Scoreboard', { scoreboard: rows });
    });
  });


//This function takes information from saveGame function and populates the insert query for the database
  const bodyParser = require('body-parser');
  app.use(express.json());

  app.post('/add-game', (req, res) => {
    const { playerName, computerName, winner } = req.body;
    connection.query('INSERT INTO scoreboard (game_id, player_name, computer_name, winner) VALUES (DEFAULT, ?, ?, ?)', [playerName, computerName, winner], (err, result) => {
        if (err) {
          console.error('Error inserting data into database: ', err);
          res.send('Error inserting data');
          return;
        }
        res.redirect('/scoreboard'); 
      });
    });


app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/CSS",express.static(__dirname + "public/CSS"))
app.use("/JS",express.static(__dirname + "public/JS"))

app.get('/', (req, res) => {res.render('Game.ejs')})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

