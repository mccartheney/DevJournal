const express = require("express")
const cors = require("cors")
const app = express()
const port = 8005

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send({ "hello":", wow!"})
})

app.listen (port, () => {
    console.log(`running on http://127.0.0.1:${port}`);
    
})