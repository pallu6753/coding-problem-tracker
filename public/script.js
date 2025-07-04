const form = document.getElementById("problemForm");
const tableBody = document.querySelector("#problemTable tbody");
let problems = JSON.parse(localStorage.getItem("problems")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const platform = document.getElementById("platform").value.trim();
  const difficulty = document.getElementById("difficulty").value;
  const status = document.getElementById("status").value;
  const tags = document.getElementById("tags").value.trim();

  const problem = { name, platform, difficulty, status, tags };
  problems.push(problem);
  localStorage.setItem("problems", JSON.stringify(problems));
  form.reset();
  renderProblems();
  renderChart();
});

function renderProblems() {
  tableBody.innerHTML = "";
  problems.forEach((problem, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${problem.name}</td>
      <td>${problem.platform}</td>
      <td>${problem.difficulty}</td>
      <td>${problem.status}</td>
      <td>${problem.tags}</td>
      <td><button onclick="deleteProblem(${index})">Delete</button></td>
    `;
  });
}

function deleteProblem(index) {
  problems.splice(index, 1);
  localStorage.setItem("problems", JSON.stringify(problems));
  renderProblems();
  renderChart();
}

function renderChart() {
  const ctx = document.getElementById("statusChart").getContext("2d");
  const statusCounts = { Solved: 0, "In Progress": 0, "To-Do": 0 };
  problems.forEach((p) => statusCounts[p.status]++);
  
  if (window.myChart) window.myChart.destroy(); // Clear previous chart
  
  window.myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        label: "Problem Status",
        data: Object.values(statusCounts),
        backgroundColor: ["green", "orange", "gray"],
      }],
    },
  });
}

renderProblems();
renderChart();
