const router = require('express').Router();

const notes = require('../../db/db.json');

const fs = require('fs');

const {
    createNote
} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    // req.newNote.id = notes.length.toString();
    // let note = createNote(req.newNote, notes);
    notes.push(req.body);
    res.json(notes);
})

// db/db.json
module.exports = router;