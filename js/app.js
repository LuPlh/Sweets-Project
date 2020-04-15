$(document).ready(function(){
  let cartInfo=$("#cart-info"); //sélection du bouton

  cartInfo.on("click",function(){
    let cart=$("#cart");
    cart.toggleClass("show-cart");
    console.log("good");
  })
});

