function createStudyPlan(goal) {
  let days = 30;

  let subjects = [
    { name: "DSA", weight: 3 },
    { name: "DBMS", weight: 2 },
    { name: "OS", weight: 2 },
    { name: "CN", weight: 1 }
  ];

  let plan = [];

  for (let i = 1; i <= days; i++) {
    let subject = subjects[i % subjects.length];

    plan.push(`Day ${i}: Study ${subject.name}`);
  }

  return plan;
}