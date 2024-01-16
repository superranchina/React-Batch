// //promise maker:

// function getWeather() {
//     return new Promise(function(resolve, reject) {
//         // resolve('sunny');
//         reject('error');
//     })
// }

// //reciver
// const promise = getWeather();
// promise.then(
//     function(data) {
//         console.log(`first ${data}`);
//     },
//     function(data) {
//         console.log(`second ${data}`);
//     }

// )

//better version

//promise maker:

function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Rainy');
        }, 1000);
    })
}

function getWeatherChat(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('perfect weather,go outside')
                    break
                case 'Cloudy':
                    resolve('ok weather, no sun')
                    break
                case 'Rainy':
                    resolve('no it is not a good weather')
                default:
                    reject('No Chat found')
            }
        }, 1000);
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

//reciver
getWeather()
    .then(getWeatherChat)
    .then(onSuccess,onError)