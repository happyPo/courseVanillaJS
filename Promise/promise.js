console.log('Request data ...');
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

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData);
    }, 2000)
});

p.then(data => {
    if (data.status === 'working') {
        const p2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                data.modifide = true;
                resolve(data)
            }, 2000)
        })
        p2.then(clientData => {
            console.log('Client data', clientData);
        })
    }
})