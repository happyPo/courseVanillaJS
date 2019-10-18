console.log('Start');

console.log('Start 2');


window.setTimeout(function () {
    console.log('2 Set timeout function after 2000 seconds');
}, 2000);

window.setTimeout(function () {
    console.log('1 Set timeout function after 0 seconds');
}, 0);


console.log('End');