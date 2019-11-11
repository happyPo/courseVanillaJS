// Object
const person = {
  name: "Eugene",
  age: 31,
  job: "Frontend"
};

const op = new Proxy(person, {
  get(target, prop) {
    return target[prop];
  }
});

const userData = [
  { id: 1, name: "Eugene" },
  { id: 2, name: "Liubov" },
  { id: 3, name: "Alex" }
];
