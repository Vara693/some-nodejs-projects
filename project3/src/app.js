const express = require('express');
const noteModel = require('./models/note.model');

const app = express()
app.use(express.json())

app.post("/notes", async (req, res)=> {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note added successfully"
    })
})

//find() method always return an array
//and findOne returns an object
app.get("/notes", async (req, res)=>{
    // const notes = await noteModel.findOne({
    //     title: "test_data2"
    // })

    const notes = await noteModel.find()

    res.status(200).json({
        message: "Notes fetched",
        notes: notes
    })
})


app.delete('/notes/:id', async(req, res)=> {
    const idx = req.params.id;
    await noteModel.findOneAndDelete({
        _id: idx
    })

    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch('/notes/:id', async (req, res)=> {
    const id = req.params.id
    const ti = req.body.title
    
    await noteModel.findOneAndUpdate({_id:id}, {title: ti});
    res.status(200).json({
        message: "Note updated"
    })
})
module.exports = app