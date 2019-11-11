console.log("Request data ...");
// setTimeout(() => {
//     console.log('Preparing data');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     console.log(backendData);

//     setTimeout(() => {
//         backendData.modifide = true;
//         console.log('Data reciewd', backendData);
//     }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve();
//     }, 2000)
// });

// p.then(() => {
//     console.log('Promise resolve');
// })

// ================================================

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData);
//     }, 2000)
// });

// p.then(data => {
//     if (data.status === 'working') {
//         console.log('Promise resolve', data);
//     }
// })

// ===========================================

const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working"
    };
    resolve(backendData);
  }, 2000);
});

// p.then(data => {
//     if (data.status === 'working') {
//         const p2 = new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 data.modifide = true;
//                 resolve(data)
//             }, 2000)
//         })
//         p2.then(clientData => {
//             console.log('Client data', clientData);
//         })
//     }
// })

// Reject
// p.then(data => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       data.modifide = true;
//       reject(data);
//     }, 2000);
//   });
// })
//   .then(clientData => {
//     console.log("Client data", clientData);
//     clientData.fromPromisee = true;
//     return clientData;
//   })
//   .then(data => {
//     console.log("Modified ", data);
//   })
//   .catch(err => console.log("Error", err));

// p.then(data => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       data.modifide = true;
//       resolve(data);
//     }, 2000);
//   });
// })
//   .then(clientData => {
//     console.log("Client data", clientData);
//     clientData.fromPromisee = true;
//     return clientData;
//   })
//   .then(data => {
//     console.log("Modified data", data);
//   })
//   .catch(err => console.log("Error", err))
//   .finally(() => console.log("Finaly"));

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All Promise");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race Promise");
});
