const items = [
    {name: 'bike', price: 100},
    {name: 'tv', price: 200},
    {name: 'book', price: 10},
    {name: 'phone', price: 600},
    {name: 'guitar', price: 2000},
    {name: 'computer', price: 1000}
]

const numbers = [1, 2, 3, 4, 5];

//for each
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i ++) {
        callback(arr[i], arr);
    }
}

myForEach(numbers, num => console.log(num));

//map

function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const double = myMap(numbers, num => num *2);
console.log(double);


//Filter

function MyFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const even = MyFilter(numbers, num => num % 2 === 0);
console.log(even);

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i ++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}

const found = myFind(numbers, num => num > 2);
console.log(found);

const foundItems = myFind(items, item => item.name = "book");
console.log(foundItems);