console.log('hi');

setTimeout(function cb() {
    console.log('there');
}, 5000);

console.log('Ran');


// Event loop only do one sample thing,
// which is look at the call stack and 
// task queue. it will put transfer the
// task in task queue when the call stack
// is empty.