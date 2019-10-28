const requestUrl = "https://jsonplaceholder.typicode.com/users";

/*
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.responseType = 'json';

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    } else {
        console.log(xhr.response)
    }
};

xhr.onerror = () => {
    console.log(xhr.response);
};

xhr.send();
*/

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, requestUrl);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send(JSON.stringify(body));
    })
}

/*
sendRequest('GET', requestUrl)
.then(data =>console.log(data))
.catch(err =>console.log(err));*/

const body = {
    name: 'Eugene',
    age: 31
};

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));