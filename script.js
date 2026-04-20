function generatePlan() {
  let goal = document.getElementById("goal").value;

  let plan = createStudyPlan(goal);

  let output = document.getElementById("output");
  output.innerHTML = "";

  plan.forEach(day => {
    let p = document.createElement("p");
    p.innerText = day;
    output.appendChild(p);
  });
}