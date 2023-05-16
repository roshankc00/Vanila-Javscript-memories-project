let container=document.querySelector('.container')

async function fetchapi(){
  let response=await fetch("https://dummyjson.com/products",{
    method:"GET"
  })
  let  datas=await response.json()
   datas=datas.products
   console.log(datas);
   datas.map((data)=>{
    // making the card wrapper 
let card=document.createElement('div')
card.classList.add('card')
card.classList.add('card')
card.classList.add('col-3')
card.classList.add('m-3')
// image of the card
const cardImage=document.createElement('img')
cardImage.classList.add="card-img-top"
// another div for card body wrapper
let cardBody=document.createElement('div')
cardBody.classList.add('card-body')
// title
let cardTitle=document.createElement('h5')
cardTitle.classList.add('card-title')
// text
let cardText=document.createElement('p')
cardText.classList.add('card-text')
// buton
let cardButton=document.createElement('a')
cardButton.classList.add('btn')
cardButton.classList.add('btn-primary')
cardButton.innerText="Go somewhere"

    cardTitle.innerText=data.title
    cardText.innerText=data.description
    cardImage.src=data.thumbnail
    cardBody.append(cardTitle)
    cardBody.append(cardText)
    cardBody.append(cardButton)
    card.append(cardImage)
    card.append(cardBody)
    container.append(card)


   })
  
}


fetchapi()


// response lai ligxa rah hamlai proper json 

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

