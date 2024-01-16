function book(name,author,year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

book.prototype.getSummary = function() {
    return `${this.name} is written by ${this.name} in ${this.year}`;
}

const book1 = new book('life','ran',2023);
console.log(book1.getSummary());


//swap in fib number
//f0 = 0, f1 = 1
//fn = fn-1 + fn-2
function fib(n) {
    if (n == 0) return 0;

    let prev = 0,
    curr = 1,
    temp;

    for (let i = 1; i < n; i++) {
        temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
}

f20 = fib(20);
console.log(f20);