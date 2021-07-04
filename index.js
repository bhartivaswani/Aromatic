var likeBtn = document.querySelectorAll(".plot i.fa-heart");
console.log(likeBtn);
var favCount=0;
var flag;

addToFav=()=>{
    console.log("clicked")
    favCount++;
    console.log(favCount);
    console.log(flag);
}
for (let index = 0; index < likeBtn.length; index++) {
    flag = index;
    likeBtn[index].addEventListener('click',addToFav());
}