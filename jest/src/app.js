const express = require("express")
const validation = require("./middlewares/validation.middleware")

const app = express()
app.use(express.json())

app.get('/', (req, res)=> {
    res.status(200).json({
        message: "Hello World"
    })
})

app.post('/register', validation.registerUserValidationRules, (req, res)=> {
    const {username, email, password} = req.body

    return res.status(201).json({
        message : "successful",
        username: username,
        email: email,
        password: password
    })
})
module.exports = app