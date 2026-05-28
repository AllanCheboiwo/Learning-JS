function sumSalaries(salaries) {
  let sum = 0;
  for (salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}
// I will try an alternative using reduce

function sumSalariesB(salaries) {
  return Object.values(salaries).reduce((acc, curr) => acc + curr, 0);
  ß;
}

function count(obj) {
  return Object.keys(obj).length;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let user = {
  name: "John",
  age: 30,
};

console.log(count(user));

console.log(sumSalariesB(salaries));
