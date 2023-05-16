const title=document.querySelector('#title')
const vedio=document.querySelector('#vedio')
const namewala=document.querySelector('#name')
const btn=document.querySelector('.btn')
const form=document.querySelector('.form')
const content=document.querySelector('.content')
const uploadme=document.querySelector('.youtube-content')
const views=document.querySelector('.views')
const submitHandler=(e)=>{
    // e.preventDefault()
    console.log("e");
}
form.addEventListener('onSubmit',submitHandler)
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    // creatting the big image elements 
    const img=document.createElement('img')
    img.classList.add('vedio')
    img.src=vedio.value

    // bigger div Card wrapper 
    const div=document.createElement('div')
    div.classList.add('card-wrapper')
    
    
    // vedio-content div 
    const contentDiv=document.createElement('div')
    contentDiv.classList.add('vedio-content')
    
    // paragraph title 
    const ptitle=document.createElement('p')
    ptitle.classList.add('title')
    if(title.value.length>27){
         let value=title.value.slice(1,17)
         value=value+"......."
         title.value=value
    }
    ptitle.innerText=title.value
    
    // paragraph name 
    const pname=document.createElement('p')
    pname.innerText=namewala.value



   // first lets prepare the vediocontent 
   contentDiv.appendChild(ptitle)
   contentDiv.appendChild(pname)
   contentDiv.appendChild(views)
   console.log(contentDiv);

 


    // content 
    const content=document.createElement("div")
    content.classList.add('content')
    const contentImg=document.createElement("img")
    contentImg.src="https://yt3.ggpht.com/6hVA5uyK7EJWzDPSnu6zMmqBkLnKMi5PFpWjUZhguLUDcpd7nExS4RKUN3fV7y81sRkQDrD0rHQ=s88-c-k-c0x00ffffff-no-rj-mo"
    contentImg.classList.add('profile')
    content.appendChild(contentImg)
    content.appendChild(contentDiv)




// creating the card-wrapper
div.appendChild(img)
div.appendChild(content)
console.log(div);
    

    uploadme.appendChild(div)
    // contentDiv.appendChild(ptitle)
    // contentDiv.appendChild(pname)
    // console.log(contentDiv);
    
    // adding the class

    // inserting the img inside the div 
    // div.appendChild(img)
    // div.appendChild(contentDiv)
    
    // uploadme.appendChild(div)
//    console.log(div);
    // console.log(img);


})


{/* <div class="card-wrapper">
<img
  class="vedio"
  src="https://plus.unsplash.com/premium_photo-1664701475272-953393050754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
/>
<div class="content">
  <img
    src="https://yt3.ggpht.com/6hVA5uyK7EJWzDPSnu6zMmqBkLnKMi5PFpWjUZhguLUDcpd7nExS4RKUN3fV7y81sRkQDrD0rHQ=s88-c-k-c0x00ffffff-no-rj-mo"
    alt=""                  class="profile"
  />
  <div class="vedio-content">
    <p class="title">title</p>
    <p>Roshan karki </p>
    <div class="views">
      <p>517K</p>
      <p>1 Months ago</p>
    </div>
  </div>
</div>
</div> */}