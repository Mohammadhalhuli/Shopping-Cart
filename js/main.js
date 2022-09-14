let carts=document.querySelectorAll('.add-cart');
let prodect=[
        {name: 'mohammad hahuli',tag:'1 (1)',price:15,inCart:0},
        {name: 'mo hahuli',tag:'2',price:25,inCart:1},
        {name: 'ng hahuli',tag:'3',price:35,inCart:0},
        {name: 'ff hahuli',tag:'4',price:45,inCart:1}

    ];
for (let index = 0; index < carts.length; index++) {
    carts[index].addEventListener('click',() => {
       // console.log("add");
        cartnumbers(prodect[index]);
        totalCost(prodect[index]);
    })

    
}
function onLoadcarnumbers(){
    let prodectNumbers=localStorage.getItem('cartNumbers');
    if(prodectNumbers){
        document.querySelector('cart span').textContent=prodectNumbers;
    }
}
function cartnumbers(prodect ){
    console.log(prodect);
    let prodectNumbers=localStorage.getItem('cartNumbers');
    //console.log(prodectNumbers);
    ///console.log(typeof prodectNumbers);

    prodectNumbers=parseInt(prodectNumbers);
   // console.log(typeof prodectNumbers);
   if(prodectNumbers){
    localStorage.setItem('cartNumbers',prodectNumbers +1);
    document.querySelector('.cart span').textContent=prodectNumbers+1;
   }else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
   }
    setItem(prodect);
}
function setItem(prodect){
    //console.log("Insidde os setItems function  ");
    //console.log("My prodect is",prodect);
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    //console.log("my cartItem are ",cartItems);
    if(cartItems != null){
        if(cartItems[prodect.tag] ==undefined){
            cartItems ={
                ...cartItems,
                [prodect.tag]:prodect
            }
        }
        cartItems[prodect.tag].inCart +=1;
    }
    else{
        prodect.inCart=1;
        cartItems={
            [prodect.tag]:prodect
        }
    }
    prodect.inCart=1;
     cartItems={
        [prodect.tag]:prodect
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
}
    
    function totalCost(prodect){
        console.log("My prodect is",prodect.price);
        let cartCost=localStorage.getItem("totalCoost");
        cartCost=parseInt(cartCost);
        console.log("My cost is",cartCost);
        console.log(typeof cartCost);
        if(cartCost != null){
            localStorage.setItem("totalCoost",cartCost + prodect.price);
        }else{
            localStorage.setItem("totalCoost",prodect.price);
        }
    }
  
    function displaycart(){
        let cartItem=localStorage.getItem("productsInCart");
        let productContainer=document.querySelector(".product");
        cartItem=JSON.parse(cartItem);
        console.log(cartItem);
        if(cartItem && productContainer){
            console.log("running");
           productContainer.innerHTML=``;
           Object.values(cartItem).map(item =>{
            productContainer.innerHTML=`
            <div clas=product>
            <br><br><br>
                <img src="./image/${item.tag}.jpg" width="300" height="200" alt="">
                <div class="view">
                    <span>Name is: ${item.name} </span>
                    <span><br>price :${item.price} </span>
                </div>
            </div>
            `
           });
        }else{
            console.log("runn nooooooo");
        }
    }
    displaycart();