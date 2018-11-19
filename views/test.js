const Chart = require('chart.js');

function makeChart(ctx) {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
      datasets: [{
        data: [3, 4, 3, 1, 5],
        label: "Answers from 2018/11/19",
        borderColor: "red",
        fill: false
      }, {
        data: [5, 3, 3, 2, 4],
        label: "Answers from 2018/11/20",
        borderColor: "blue",
        fill: false
      }, {
        data: [3, 4, 5, 4, 4],
        label: "Answers from 2018/11/21",
        borderColor: "green",
        fill: false
      }, {
        data: [3, 1, 3, 2, 5],
        label: "Answers from 2018/11/22",
        borderColor: "yellow",
        fill: false
      }, {
        data: [1, 4, 3, 2, 3],
        label: "Answers from 2018/11/23",
        borderColor: "orange",
        fill: false
      }, {
        data: [2, 4, 2, 4, 3],
        label: "Answers from 2018/11/24",
        borderColor: "black",
        fill: false
      }, {
        data: [3, 2, 4, 3, 1],
        label: "Answers from 2018/11/25",
        borderColor: "purple",
        fill: false
      }
      ]
    },
    options: {
      title: {
        display: true,
        text: `${insertUsernameHere}'s responses from the past 7 days`
      }
    }
  });
  return myChart;
}

module.exports = makeChart;