function thenFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => console.log('Fetching data using .then', data))
        .catch(err => console.err('Error: ', err));
};

thenFetch();


async function awaitFetch() {
    try{
       const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
       const data = await res.json();
       console.log('fetching data using await: ', data);
    } catch (error) {
        console.error("Error: ", error)
    }

}

awaitFetch()


function randomNumber(delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const randomNum = Math.floor(Math.random()*100);
            if (randomNum % 2 === 0) {
                res(randomNum);
            } else {
                rej('Odd Number');
            }
        }, delay);
    });
}

randomNumber(2000)
    .then(num => console.log('even random: ', num))
    .catch(err => console.err('Error: ', err));


const fetchDataPromise = fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
const randomNumberPromise = randomNumber(1500);
    
Promise.all([fetchDataPromise, randomNumberPromise])
    .then(([jsonData, randomNum]) => {
    console.log('Data from API:', jsonData);
    console.log('Random number:', randomNum);
    })
    .catch(error => console.error('Error:', error));
    



