// JS for Notes accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// new Chart(document.getElementById('line-chart'), {
//   type: 'line',
//   data: {
//     labels: ['6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', 'Yesterday', 'Today'],
//     datasets: [{
//       data: [3, 4, 3, 1, 5, 6, 9],
//       label: "Question 1",
//       borderColor: "red",
//       fill: false
//     }, {
//       data: [5, 3, 3, 7, 4, 8, 9],
//       label: "Question 2",
//       borderColor: "blue",
//       fill: false
//     }, {
//       data: [3, 4, 5, 4, 4, 8, 6],
//       label: "Question 3",
//       borderColor: "green",
//       fill: false
//     }, {
//       data: [3, 1, 3, 2, 5, 3, 4],
//       label: "Question 4",
//       borderColor: "yellow",
//       fill: false
//     }, {
//       data: [1, 4, 3, 2, 3, 1, 7],
//       label: "Question 5",
//       borderColor: "orange",
//       fill: false
//     }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: `Responses from the past 7 days`
//     }
//   }
// });