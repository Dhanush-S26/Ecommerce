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

// selecting inputvalue,searchcollections,searchcollection
var inputvalue=document.getElementById("inputvalue")
var searchcollections=document.querySelector(".searchcollections")
var searchcollection=searchcollections.querySelectorAll("div")

inputvalue.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(var i=0;i<searchcollection.length;i++){
        var elements=searchcollection[i].querySelector("p").textContent
        if(elements.toUpperCase().indexOf(enteredvalue)<0){
            searchcollection[i].style.display="none"
        }
        else{
            searchcollection[i].style.display="block"
        }
    }
})
