const person = Object.create(
  {
    calculateAge() {
      console.log(new Date().getFullYear() - this.birhYear);
    }
  },
  {
    name: {
      value: "Eugene",
      enumerable: true, //default (false) Равен true только в том случае, если это свойство можно увидеть через перечисление свойств содержащего его объекта.
      writable: true, //default (false)Равен true только в том случае, если значение, ассоциированное со свойством, может быть изменено с помощью оператора присваивания.
      configurable: true //default (false)Равен true только в том случае, если тип этого дескриптора свойства может быть изменён и если свойство может быть удалено из содержащего его объекта.
    },
    birhYear: {
      value: 1988,
      enumerable: false, // Свойство birhYear не будет видно при перечислении свойств
      writable: false, // Свойство birhYear не может быть изменено
      configurable: false // Свойство birhYear можем удалить свойство
    },
    age: {
      get() {
        console.log("1");
        return new Date().getFullYear() - this.birhYear;
      },
      set(value) {
        console.log("2");
        console.log("Set age", value);
        document.body.style.background = "#FF9671";
      }
    }
  }
);

person.name = "Maxim";

// const person = {
//   name: "Eugene",
//   birhYear: 1988
// };

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("Key", key, person[key]);
  }
}
