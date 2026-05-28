let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

// console.log(name, age, isAdmin);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (let [key, value] of Object.entries(salaries)) {
    if (max < value) {
      max = value;
      maxName = key;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
