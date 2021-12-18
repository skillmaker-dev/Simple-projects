




let todoTasks = document.querySelector(".todo-container");
let tasks = document.querySelectorAll(".checkmark");
let addTaskBtn = document.querySelector("#add-task-btn");
let taskDetail = document.querySelector("#task-detail");
let taskDate = document.querySelector("#task-date");
let taskDateDetail = document.querySelectorAll("task-date");
let showDetailsBtn = document.querySelector(".show-detail");

taskDetail.addEventListener("keyup",function(event) {

    if(event.keyCode === 13)
    {
      addTask();
    }   
  });

  addTaskBtn.addEventListener("click",function() {addTask()})



  
  function addTask()
  {
    
    
    if(taskDetail.value != "")
    {
      todoTasks.innerHTML = `<div class="task">
      <div class="min-detail">
        <div class="checkmark unchecked"></div>
        <div class="task-content">${taskDetail.value}</div>
        <div class="show-detail">
          <img src="images/chevron.svg" />
        </div>
      </div>

      <div class="task-date">${taskDate.value}</div>
    </div>` + todoTasks.innerHTML;
  

    tasks = document.querySelectorAll(".checkmark");

    tasks.forEach((item) => {
        item.addEventListener("click", function() {
          
             this.classList.toggle("checked");
             let sibling = this.nextElementSibling;
             let son = this.parentElement;
             let parent = son.parentElement;
             parent.classList.toggle("task-finished");
             sibling.classList.toggle("task-content-removed")
        })
    });



    

      showDetailsBtn = document.querySelectorAll(".show-detail");
  
      showDetailsBtn.forEach((item) => {
        
        if(item.parentElement.nextElementSibling.innerText.length == 0)
        {
          item.classList.add("hidden");
        }
          item.addEventListener("click",function() {
            this.classList.toggle("pressed");
            let parent = this.parentElement;
            parent.nextElementSibling.classList.toggle("task-date-open");
          });
        
      });
    
    


    taskDetail.value = "";
    taskDate.value = "";

    

    
    
    }
    
            
      
         
  }
  
  
  
  
  
  






