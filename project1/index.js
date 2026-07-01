const express = require('express');

const app = express(); //initiates the server intance and stores it in a variable
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/home", (req, res) => {   //for frontend and backend communication, basically requesting and getting a response
    res.send("You are in the home page");
})
app.listen(3000, ()=> {
    console.log("sever listening")
}) //starts the server