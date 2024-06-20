const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async task 1 is complete');
        // resolve();
    }, 1000)
});
promiseOne
    .then(function () {
        console.log(`pomise consumed`);
    })



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ userName: 'Raghav', email: 'raghav@gmail.com' });
    }, 2000);
})

promiseThree.then(function (user) {
    console.log(user);
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ name: 'shivba', password: '1234' });
        } else {
            reject('ERROR: something went wrong');
        }
    }, 1000);
})
const result = promiseFour
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log(`The promise resolved eather rejected`);
    })

console.log("result : ", result);




// ******************** promise with async ***************** 


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ language: 'javaScript', password: '1234' });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();




async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}
getAllUsers();




fetch("https://api.github.com/users/victorShiva")
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
        console.log("Err : ", error);
    })






