const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

//not in seq
// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         first.style.color = 'red';
//     }, 1000);
//     setTimeout(() => {
//         second.style.color = 'green';
//     }, 3000);
//     setTimeout(() => {
//         third.style.color = 'blue';
//     }, 2000);
// });

//in seq
btn.addEventListener('click', () => {
    setTimeout(() => {
        first.style.color = 'red';
        setTimeout(() => {
            second.style.color = 'green';
            setTimeout(() => {
                third.style.color = 'blue';
            }, 2000);
        }, 3000);
    }, 1000);
});
