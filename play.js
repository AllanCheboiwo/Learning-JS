let person = {
  name: "allan",
  dob: new Date(0),
  gender: "male",
};

let result = JSON.stringify(person);

console.log(result);

let parsed = JSON.parse(result, function reviver(key, value) {
  return key == "dob" ? new Date(value) : value;
});

console.log(parsed);
console.log(parsed.dob.getDay());
console.log(JSON.stringify(100));
