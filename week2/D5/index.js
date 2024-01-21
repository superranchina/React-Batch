// Day 10 Practice
// 1. Write a JavaScript function that reverse a number. 

// Example x = 32243;

// Expected Output: 34223 
function myReverse(number) {
    const str_num = number.toString();
    const reversed_str_num = str_num.split('').reverse().join('');
    const toNum = parseInt(reversed_str_num,10);
    return toNum;
};

console.log(myReverse(32243));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 

// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(input_str) {
    const reversed_str = input_str.split('').reverse().join('');
    return reversed_str === input_str;
};

console.log(isPalindrome('Ran'));


// 3. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// Example string: 'the quick brown fox' 

// Expected Output: 'The Quick Brown Fox '
function FirstCap(input_str) {
    //split() will return a array after using it.
    const words = input_str.split(' ');
    const cap = words.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return cap.join(' ');
}

console.log(FirstCap('jimi hendrix was a good guitar player'));


// 4. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

// Example string: 'Web Development Tutorial' 

// Expected Output: 'Development'
function findLongest(input_str) {
    const words_arr = input_str.split(' ');
    const arr_len = words_arr.length;
    let max_ = words_arr[0];

    if (arr_len === 1) {
        return input_str;
    } else {
        for (let i = 0; i < arr_len; i++) {
            if(words_arr[i].length > max_.length){
                max_ = words_arr[i];
            };
        };
    };
    return max_;
};

console.log(findLongest('Web Development Tutorial'));
console.log(findLongest('Development'));


// 5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 

// Example string: 'The quick brown fox' 

// Expected Output: 5
function vowelCounter(input_str) {
    const lower_ = input_str.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let ct = 0;

    for (let char of lower_) {
        if(vowels.includes(char)) {
            ct++;
        }
    }
    return ct;

};

console.log(vowelCounter('The quick brown fox'));
console.log(vowelCounter('a e i o u hpq'));

// 6. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 

// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(number) {
    if(number < 2 ){
        return false;
    } else {
        for(let i = 2; i < number; i++ ) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
};

console.log(isPrime(24));
console.log(isPrime(13));



// 7. Write a JavaScript function which accepts an argument and returns the type. 

// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function typeCheck(input) {
    return typeof input;
}

const ppl = {
    name: 'ran'
};

console.log(typeCheck(2));
console.log(typeCheck(true));
console.log(typeCheck(isPrime));
console.log(typeCheck('sss'));
console.log(typeCheck());
console.log(typeCheck(ppl));


// 8. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

// Sample array: [1,2,3,4,5]

// Expected Output: 2,4 

function findSecondLnG(input_arr) {
    if (input_arr.length < 2) {
        console.error('Error: Array needs at least 2 numbers');
    } else {
        //sort arry in decending
        //sorted_arr[1] is the second greatest
        //reverse sorted_arr, then [1] is the second lowest.       
    }
}
