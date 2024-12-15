const express = require("express")
const cors = require("cors")
const app = express()
const port = 8005
const mongoConnection = require ('./config/mongo_database')

mongoConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const journalRoutes = require("./routes/index")
app.use(journalRoutes)

app.get("/", (req,res) => {
    res.send({ "hello":", wow!"})
})

app.listen (port, () => {
    console.log(`running on http://127.0.0.1:${port}`);
    
})