const formInput=document.querySelector('.inputwala')
const btn=document.querySelector('.submit-btn')
const todosList=document.querySelector('.todos-ordered-list')
let todos=[]
let i=0;
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    todos.push({value:formInput.value,id:Date.now()})

    todos.map((todo,index)=>{
        if(i===index){

            const li=document.createElement('li')
            li.classList.add("list-group-item","p-4",'bg-info',"d-flex", "align-content-center","justify-content-between")
            const burronwrapper=document.createElement('div')
            
            // task
            const task=document.createElement('span')
        task.innerText=todo.value
        // update button
        const updatebutton=document.createElement('button')
        updatebutton.innerHTML="update"
        updatebutton.classList.add('btn','btn-primary','mx-3')
        updatebutton.onclick=()=>{deleteme(todo.id)}
        
        const deletebutton=document.createElement('button')
        deletebutton.innerHTML="delete"
        deletebutton.classList.add('btn','btn-primary')
        // wrapping up the buttons in div
        burronwrapper.append(updatebutton)
        burronwrapper.append(deletebutton)
        
        // making the li
        li.append(task)
        li.append(burronwrapper)
        li=deletebutton.onclick=()=>{deleteme(li)}
        todosList.append(li)
        console.log(todos);
        // todos=[]
    }
    })
    i++
   console.log(i);
    formInput.value=""

})





const updateme=(index)=>{
    alert(index)
    console.log(todos);
}
const deleteme=(li)=>{
    let li=li.style.display="none"
    return li
    
}


// 0 1 2 3 4 
// 0




// logic 








// // const createListElement=(text)=>{
//     const task=document.createElement('span')
//     const updatebutton=document.createElement('button')
//     updatebutton.innerHTML="update"
//     const deletebutton=document.createElement('button')
//     deletebutton.innerHTML="delete"
//     const li=document.createElement('li')
//     task.innerText=text
//     li.append(task)
//     li.append(updatebutton)
//     li.append(deletebutton)
//     return li

// }
// const deleteTodos=(index)=>{


// }