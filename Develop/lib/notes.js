var fs = require('fs');
var path = require('path');

function createNote(newNote, allNotes) {
    const note = newNote;
    allNotes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            allNotes
        }, null, 2)
    )
    return newNote;
}

module.exports = {
    createNote,
}