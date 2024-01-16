// const s = "hello"
// console.log(s.toUpperCase());

// console.log(window);
// window.alert("my name is Ran");

//Obj

const artist = {
    name: 'Jimi Hendrix',
    age: '27',
    song: 'little wing'
    // getSummary: function() {
    //     return `${this.name} passed away at age of ${this.age}, known as ${this.song}`
    // }
}

// console.log(artist.getSummary());
// console.log(Object.values(artist));
// console.log(Object.keys(artist));

//constrctor

function artistPage(name,age,song ){
    this.name = name;
    this.age = age;
    this.song = song;
    // this.getSummay= function() {
    //     return `${this.name} passed away at age of ${this.age}, known as ${this.song}`;
    // }
}

const a1 = new artistPage('jimi','27','little wing');
const a2 = new artistPage('SRV', "32", "Lenny");


// console.log(a1.getSummay());
// console.log(a2.getSummay);
//getSummary() will get thr return value;
//getSummary is the logic of the function;
// console.log(a2.name);


//prototype

//When we call artistpage everytime, we'll call the function
//which inside the constrctor everytime, so we will use a lot
//of menmory storage. So it is a good idea to take the function
//out of the constructor by using protptype.

artistPage.prototype.getSummay = function() {
    return `${this.name} passed away at age of ${this.age}, known as ${this.song}`;
}
console.log(a1.getSummay());




