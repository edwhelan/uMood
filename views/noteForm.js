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
        

    <script>
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    </script>
  `;
}

module.exports = notesForm;