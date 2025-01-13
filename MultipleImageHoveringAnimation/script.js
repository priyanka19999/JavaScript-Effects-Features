//var elem1 = document.querySelector("#elem1")
//effect for the first element so we can do this for all the rest of the elements
// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
//    elemImage.style.left = dets.x+"px" // used to move the image1 horizontally.
//     elemImage.style.top = dets.y+"px"
// })


// elem1.addEventListener("mouseenter", function(dets){
//     elemImage.style.opacity = 1
//  })
 
// elem1.addEventListener("mouseleave", function(dets){
//     elemImage.style.opacity = 0
//  })



// instead of doing this method we can do another one 

var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
      //val.style.backgroundColor ="aliceblue"
       val.childNodes[3].style.opacity = 1
    });

    
    val.addEventListener("mouseleave", function(){
        //val.style.backgroundColor ="transparent"
        val.childNodes[3].style.opacity = 0
    });

    
    val.addEventListener("mousemove", function(dets){
       // val.style.backgroundColor ="transparent"
        val.childNodes[3].style.left = dets.x+"px" //horizontally move of images
        //val.childNodes[3].style.top = dets.y+"px" // vertically move of images
});

});