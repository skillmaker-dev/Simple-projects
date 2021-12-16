



let taskInput = document.querySelector(".task-input");
let todoTasks = document.querySelector(".todo-container");
let tasks = document.querySelectorAll(".checkmark");
taskInput.addEventListener("keyup",function(event) {

    if(event.keyCode === 13)
    {

        todoTasks.innerHTML = `<div class="task">
    <div class="checkmark unchecked"></div>
    <div class="task-content">${taskInput.value}</div>
  </div>` + todoTasks.innerHTML;

  taskInput.value = "";
  tasks = document.querySelectorAll(".checkmark");
  tasks.forEach((item) => {
      item.addEventListener("click", function() {
        this.classList.toggle("unchecked");
           this.classList.toggle("checked");
           let sibling = this.nextElementSibling;
           sibling.classList.toggle("task-content-removed")
      })
  });
  


        
    }
    
});


    
    
        
    







