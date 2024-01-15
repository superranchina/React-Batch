//getElementById
const title = document.getElementById('main-heading');
console.log(title);

// const ListItem = document.getElementsByClassName("list-items")
// console.log(ListItem)

const ListItem = document.getElementsByTagName("li")
console.log(ListItem);

const contianer = document.querySelector('div');
console.log(contianer);


// Event listeners

const btnTwo = document.querySelector(".btn-2")
function alertBtn {
    alert("I also love JS");
};

btnTwo.addEventListener("click ", alertBtn); 

