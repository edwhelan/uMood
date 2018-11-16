function notesForm() {
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
        <button class="accordion">10/31/2018</button>
        <div class="panel">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate repellat nostrum quis eum assumenda ducimus
                expedita modi facilis, recusandae voluptatibus. Earum fugiat perspiciatis provident possimus. Assumenda iusto
                numquam aliquam?
            </p>
        </div>
        <button class="accordion">11/02/2018</button>
        <div class="panel">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consectetur ea quaerat hic obcaecati. Neque est dicta
                perferendis, voluptatum suscipit iste, vero quasi aperiam nam, quo omnis laboriosam saepe natus!
            </p>
        </div>
    </div>

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