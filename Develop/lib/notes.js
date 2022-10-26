var fs = require('fs');
var PATH = require('path');

function createNote(newNote, allNotes) {
    allNotes.push(newNote);
    fs.writeFileSync(
        PATH.join(__dirname, '../db/db.json'),
        JSON.stringify(allNotes)
    );
    return allNotes;
}