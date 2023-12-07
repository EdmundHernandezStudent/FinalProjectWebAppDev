const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/CSS",express.static(__dirname))

//Need to add the game files to view
app.get('/', (req, res) => {
res.render('Final ProjectV2')
})

app.get('/scoreboard', (req, res) => {
res.render('FPScoreboard')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
