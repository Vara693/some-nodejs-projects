const express = require('express');
const app = express()  //initialises the server


const notes = []
app.use(express.json())

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "Notes created successfully!"
    })
})

app.get('/notes', (req, res)=> {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:index', (req, res) => {
    const idx = Number(req.params.index)
    console.log(idx)
    delete notes[idx]

    res.status(200).json({
        message: "Note deleted successfully!"
    })
})

app.patch('/notes/:index', (req, res) => {
    const idx = Number(req.params.index)
    notes[idx].Description = req.body.Description

    res.status(200).json({
        message: "Element at "+idx+" has been updated"
    })
})

module.exports = app