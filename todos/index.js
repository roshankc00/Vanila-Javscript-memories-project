const formInput=document.querySelector('.inputwala')
// edit
const editInput=document.querySelector('.editinput')
const closebtn=document.querySelector('.btn-close')
const savechangesbtn=document.querySelector('.changebtn')
let changeid=""
// edit ends 
const btn=document.querySelector('.submit-btn')
const todosList=document.querySelector('.todos-ordered-list')

let todos=[]

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const todo={
        id:Date.now(),
        name:formInput.value,
        status:false
    }
    todos.push(todo)
    formInput.value=""
    displayTodos()
    console.log(todos);
})
function displayTodos(){
    todosList.innerHTML=""
    todos.map((todo)=>{
        // creating the main wrapper li
        const li=document.createElement('li')
        const wrapme=document.createElement('div')
        li.classList.add('list-group-item','p-3', 'd-flex', 'justify-content-between')
        // checkbox
        const checkbox=document.createElement('input')
        checkbox.classList.add('mx-2')
        checkbox.type="checkbox"
        checkbox.checked =todo.status
        checkbox.addEventListener('change',(e)=>{
            e.preventDefault()
            console.log(e.target.checked);
            todo.status=e.target.checked
            displayTodos()
        })
       
        // creating the span 
        const taskadder=document.createElement('span')
        taskadder.style.textDecoration = todo.status ? 'line-through' : 'none';
        taskadder.innerHTML=todo.name
        wrapme.append(checkbox)
        wrapme.append(taskadder)
        
    
    // creating the button 
    const buttonWrapper=document.createElement('div')
    // updated button
    const updateButton=document.createElement('button')
    updateButton.innerHTML="update me"
    updateButton.classList.add('btn',"btn-primary",'me-3')
    updateButton.setAttribute("data-bs-toggle","modal")
    updateButton.setAttribute("data-bs-target","#exampleModal")
    updateButton.addEventListener('click',(e)=>{
        editInput.value=todo.name
        changeid=todo.id
    })

    // delete button
    const deleteButton=document.createElement('button')
    deleteButton.classList.add('btn',"btn-danger")
    deleteButton.innerHTML="deleteme"
    deleteButton.addEventListener('click',(e)=>{
        e.preventDefault()
      todos=  todos.filter(el=>{
            return el.id!==todo.id
        })
        displayTodos()
    })
        

        // appending
        buttonWrapper.append(updateButton)
        buttonWrapper.append(deleteButton)
        li.append(wrapme)
        li.append(buttonWrapper)
        todosList.append(li)
    
        
      
    })

}

savechangesbtn.addEventListener('click',(e)=>{
    console.log(editInput.value);
    todos.map((el)=>{
        if(el.id===changeid){
            el.name=editInput.value
            return el
        }else{
            return el
        }
    })
    displayTodos()
    closebtn.click()

})