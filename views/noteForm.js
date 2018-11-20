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
            <form class='notesSection' action="/notes/add" method="POST">
                <label>
                    Notes
                    </label>
                    <textarea class='notesField' type="text"  placeholder="Whats on your mind?" name="noteText" required> </textarea>
                <br>
                <input class="questionsButton" type="submit" value="Add To Notes">
            </form>
        </div>
        ${
        allNotes.map(note => {
            return existingNotes(note.date, note.note)
        }).join('')
        }
        `;
}

module.exports = notesForm;