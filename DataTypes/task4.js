let user = {
  name: "John Smith",
  age: 25,
};

let result2 = JSON.parse(JSON.stringify(user));

let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && meetup === value ? undefined : value;
  }),
);
