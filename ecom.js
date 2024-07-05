// selecting navbar_links_toggle,side_navbar for displaying side navbar

var navbar_links_toggle=document.querySelector(".navbar_links_toggle")
var side_navbar=document.querySelector(".side_navbar")
navbar_links_toggle.addEventListener("click",function(){
    side_navbar.style.display="block"
})

// selecting xmark

var xmark=document.getElementById("xmark")
xmark.addEventListener("click",function(){
    side_navbar.style.display="none"
})



