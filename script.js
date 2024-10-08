// let container  = document.getElementById("container")
// container.innerHTML  = "<li> hania </li>"
let todo = []
function addtodo() {
let inputValue = document.getElementById("todo").value;
todo.push(inputValue)
console.log(todo);
  for (let i =0; i < todo.length; i ++){
let container = document.getElementById("container");
container.innerHTML+="<li>"+todo[i]+"</li>"

  }




}