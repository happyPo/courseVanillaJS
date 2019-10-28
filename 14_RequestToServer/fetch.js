const requestUrl = "https://jsonplaceholder.typicode.com/users";
// =============================== GET ==================================================
/*
function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest('GET', requestUrl)
.then(data =>console.log(data))
.catch(err =>console.log(err));
*/


// =============================== GET & POST ==================================================

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error=>{
            const e = new Error('Something went wrong');
            e.data = error;
            throw e
        })
    })
}

const body = {
    name: 'Eugene',
    age: 31
};

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
