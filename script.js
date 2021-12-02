// Nevigetion
window.addEventListener("scroll" , function(){
    let header = document.querySelector("header")
    // if(window.scrollY > 0){
    //     header.classList.add("sticky")
    // }
    // else{
    //     header.classList.remove("sticky")
    // }
    header.classList.toggle("sticky" , window.scrollY > 0)
})


let menuBTN = document.querySelector(".menu-btn")
let nevigation = document.querySelector(".navigation")
let nevigationItem = document.querySelectorAll(".navigation a")


menuBTN.addEventListener("click", function(){
    menuBTN.classList.toggle("active")
    nevigation.classList.toggle("active")
})

nevigationItem.forEach(function(e){
    e.addEventListener("click", ()=>{
        menuBTN.classList.remove("active")
        nevigation.classList.remove("active")
    })
})
// Nevigetion

// Top Button

let topButton = document.querySelector(".topbtn")

topButton.addEventListener("click", ()=>{
    document.body.scrollTop = 0
})

window.addEventListener("scroll", function(){
    topButton.classList.toggle("active", window.scrollY > 500)
})


// ======================================================================================

window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
