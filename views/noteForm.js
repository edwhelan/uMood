function existingNotes(d, noteValue) {
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    console.log(year, month, date);
    return `
    <button class="accordion">${month}/${date}/${year}</button>
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
        }).join('')
        }
        `;
}

module.exports = notesForm;