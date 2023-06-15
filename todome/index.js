/* selectors */
const todoInput = document.querySelector('.todoInput');
const addButton = document.querySelector('.addButton');
const select = document.querySelector('.select');
const todoList = document.querySelector('.todoList');


/* alerts */
const success = document.querySelector('.success');
const warning = document.querySelector('.warning');

/* events */
addButton.addEventListener("click", addTodo);
todoList.addEventListener('click', checks)

/* functions */
function addTodo(e){

    let todoValue = todoInput.value; 

    if(todoValue == 0){
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 1500);
    }else{

        e.preventDefault();

        const addDıv = document.createElement("div");
        addDıv.classList.add('todo');
        
        const addButton1 = document.createElement('button');
        addButton1.classList.add('checkedButton');
        addButton1.innerHTML = '<i class="fa-solid fa-check"></i>';
        addDıv.appendChild(addButton1);
    
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = todoInput.value;
        addDıv.appendChild(todoItem);
    
        const addButton2 = document.createElement('button');
        addButton2.classList.add('deleteButton');
        addButton2.innerHTML = '<i class="fa-solid fa-ban"></i>';
        addDıv.appendChild(addButton2);
    
        todoList.appendChild(addDıv);
    
        todoInput.value = "";

        success.style.display = 'block';
        setTimeout(() => {
            success.style.display = 'none';
        }, 1500);
    
    }
    
}

function checks(e) {
    const item = e.target;
    //burdan devam edilecek
}
