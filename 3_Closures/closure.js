function fnClusure(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const closure = fnClusure(1);
// console.log(fnClusure(1)(2)(3));

// console.log(closure(2)(3));

function urlGenerator(domain) {
    return function (url) {
        return `http://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com');

// console.log(urlGenerator('com')('google'));

// console.log(comUrl('google'));

function logPerson() {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
    name: 'Eugene',
    age: '31',
    job: 'Frontend'
}
const person2 = {
    name: 'Liubov',
    age: '33',
    job: 'Full-stack'
}
bind(person1, logPerson)();
bind(person2, logPerson)();

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}