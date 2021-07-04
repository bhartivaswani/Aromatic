var likeBtn = document.querySelectorAll(".plot i.fa-heart");
var select = document.querySelector('.select');
var popCross = document.querySelector(".pop i.fa-times");
var pop = document.querySelector(".pop");
var buyNow = document.querySelectorAll("button.buy");
var cart = document.querySelector('.cart');
var popTwo = document.querySelector(".popTwo");
var price=0;

console.log(select);
console.log(likeBtn);
var favCount=0;
var cartCount=0;
var flag;

for( var but of likeBtn){
    but.addEventListener('click',(e)=>{
        console.log("clciked");
        favCount++;

        console.log(favCount);
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
    })
}
for( var one of buyNow){
    one.addEventListener('click',(e)=>{
        console.log("clciked");
        cartCount++;

        console.log(cartCount);
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        cart.appendChild(clone);
        price=cartCount*1500;
        console.log(price);
        document.querySelector("span.items-display").innerHTML=cartCount;
        document.querySelector("span.price-display").innerHTML=price;
    })
}
document.querySelector(".pop i.fa-times").style.cursor="pointer";

modalDisplay=()=>{
    pop.style.display="block";
}
crossDisplay=()=>{
    console.log("clickeder")
    pop.style.display="none";
}
window.onclick = function(event) {
    if (event.target == pop) {
      pop.style.display = "none";
    }
}
document.querySelector(".popTwo i.fa-times").style.cursor="pointer";
modalFirstDisplay=()=>{
    popTwo.style.display="block";
}
crossFirstDisplay=()=>{
    console.log("clickeder")
    popTwo.style.display="none";
}
