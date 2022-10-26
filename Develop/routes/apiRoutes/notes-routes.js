const router = require('express').Router();

const {
    notes
} = require('../../db/db.json');

const {
    createNote
} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('notes', (req, res) => {
    req.newNote.id = notes.length.toString();
    let note = createNote(req.newNote, notes);
    res.json(note);
})

module.export = router;