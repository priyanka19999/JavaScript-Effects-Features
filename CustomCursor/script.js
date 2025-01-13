var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"

})   























// main.addEventListener("mousemove", function(dets){
//     console.log(dets)  //logs all event details when the mouse moves over the main element.
// })                  

// main.addEventListener("mousemove", function(dets){
//     console.log(dets.x)  // logs the horizontal (x) position of the mouse.
// })

// main.addEventListener("mousemove", function(dets){
//     console.log(dets.y) //logs the vertical (y) position of the mouse.

// })

