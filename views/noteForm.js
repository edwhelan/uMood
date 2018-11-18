function existingNotes(date, noteValue) {
    return `
    <button class="accordion">${date}</button>
    <div class="panel">
        <p>
            ${noteValue}
        </p>
    </div>
    `
}


function notesForm(allNotes) {
    return `
  <div class="userNotesCollection">
        <button class="accordion">Add To Notes</button>
        <div class="panel">
            <form action="/notes/add" method="POST">
                <label>
                    Notes:
                    <input type="text" name="noteText">
                </label>
                <br>
                <input type="submit" value="Add To Notes">
            </form>
        </div>
        ${
        allNotes.map(note => {
            return existingNotes(note.date, note.note)
        })
        }
        `;
}

module.exports = notesForm;