// https://jsonplaceholder.typicode.com/
const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};

// console.log("start");

// delay(2000).then(() => console.log("2 sec"));

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchData() {
//   console.log("Start fetching");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then(response => response.json());
// }

// fetchData()
//   .then(data => {
//     console.log("Data", data);
//     console.log("End fetching");
//   })
//   .catch(e => console.log(e));

// Тоже самое но без промисов с использованием Async Await

async function fetchAsyncData() {
  try {
    console.log("Start fetching");
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    return console.log(data);
  } catch (e) {
    console.error("Error", e);
  } finally {
    console.log("End fetch");
  }
}

fetchAsyncData().then(() => console.log("Then"));
