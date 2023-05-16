let btns=document.querySelectorAll('.cal-btn')
let input=document.querySelector('.textcal')
let cal=""
btns.forEach(btn => {

    btn.addEventListener('click', (e)=> {
        if(e.target.innerHTML==="="){
            cal=eval(cal)
            console.log(cal);
            input.value=cal

        }else{

                cal+=e.target.innerHTML
                input.value=cal
            

        }
        if(e.target.innerHTML==="c"){
            input.value=""
            cal=""
        }
    });
 
 });
input.addEventListener('keydown',(e)=>{
    cal+=e.key
})
