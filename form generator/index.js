const container=document.querySelector('.form-wapper')
const select=document.querySelector('.selectme')
const label=document.querySelector('.label')
const button=document.querySelector('.button-new')
console.log(button);
label.addEventListener('keydown',(e)=>{
    let newinput=document.createElement('input')
    newinput.classList.add("form-control")
    let newlabel=document.createElement('label')
    newlabel.classList.add('form-label')
    let wrapper=document.createElement('div')
    wrapper.classList.add("mb-3")
    if(e.key==="Enter"){
        let labelText=label.value
        let inputType=select.value
        console.log(labelText,inputType);
        newinput.type=inputType
        newlabel.innerText=labelText
        wrapper.append(newlabel)
        wrapper.append(newinput)
        container.append(wrapper)
    }

})

button.addEventListener('click',()=>{
    const btndiv=document.createElement("div")
    const btn=document.createElement('button')
    btn.classList.add("btn")
    btn.classList.add("btn-secondary")
    btn.innerText="submit"
    btndiv.append(btn)
    container.append(btndiv)
    

})