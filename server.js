const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/CSS",express.static(__dirname + "public/JS"))

//Need to add the game files to view
app.get('/', (req, res) => {
res.render('')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))