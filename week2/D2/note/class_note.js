const TODO_BASE_URL = "https://jsonplaceholder.typicode.com/todos"



// const num = 5
// const str = `we have ${num} todos`

// console.log(str)



async function getTodoById(id) {
  try {
    let response = await fetch(`${TODO_BASE_URL}/${id}`);
    // const url = 
    let data = await response.json();
    return data;
    
  } catch (error) {
    console.error(error);
  }
}
k
const todoSection = document.querySelector("section")
const todoIdInput = document.querySelector("input")

document.querySelector("button").addEventListener("click", async () => {
  const id = todoIdInput.value;
  let todo =  await getTodoById(id);
  const title = document.createElement("article");
  title.textContent = todo.title;
  todoSection.appendChild(title);
})
