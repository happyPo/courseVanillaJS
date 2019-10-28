function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Eugene",
  age: 31,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

const liuba = {
  name: "Liubov",
  age: 33
};

// const fnLiubaShowInfoLog = person.logInfo.bind(liuba,"fr-end", "1234353");
// fnLiubaShowInfoLog("fr-end", "1234353");
// person.logInfo.bind(liuba, "fr-end", "1234353")();
// person.logInfo.call(liuba, "fr-end", "1234353");
// person.logInfo.apply(liuba, ["fr-end", "1234353"]);

// ===================

const arr = [1, 2, 3, 4, 5];

// function multBy(n) {
//   return arr.map(function(i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n;
  });
};
console.log(arr.multBy(5));
