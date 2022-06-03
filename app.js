const express = require("express")
const app = express()
const path = require("path")

app.use (express.static(path.resolve(__dirname, "./public")))

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./view/home.html"))
})

app.listen(3000, () => {
    console.log("servidor corriendo en http://localhots:3000")
})