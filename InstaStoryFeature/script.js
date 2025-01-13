var arr = [
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , story:"https://tse1.mm.bing.net/th?id=OIP.cpt9mzXnmCdUJP_--gUUowHaHa&pid=Api&P=0&h=180"},

    {dp:"https://tse1.mm.bing.net/th?id=OIP.cpt9mzXnmCdUJP_--gUUowHaHa&pid=Api&P=0&h=180" , story:"https://tse1.mm.bing.net/th?id=OIP.cpt9mzXnmCdUJP_--gUUowHaHa&pid=Api&P=0&h=180"},

    {dp: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/08/emily-in-paris-netflix-poster.jpg" ,story: "https://fr.web.img3.acsta.net/pictures/20/01/20/09/47/4129507.jpg"},

    {dp: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/oppenheimer-poster.jpg",story: "https://fr.web.img3.acsta.net/pictures/20/01/20/09/47/4129507.jpg"},

]

// var clutter = ""
// arr.forEach(function(elem){
//    clutter += "hello"   // i.e clutter = clutter + hello
// })
// console.log(clutter)



// arr.forEach(function(elem,idx){
//     console.log(elem,idx)      // used to get elem's dp ,story and their respective indexes no
// })

var stories = document.querySelector("#stories")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `
            <div class="story">
                <img  id="${idx}"src="${elem.dp}" alt="" >  
             </div>`                                 // it gets updated and the arr element passes to show the images
})
document.querySelector("#stories").innerHTML = clutter



stories.addEventListener ("click",function(dets){
    //console.log(dets.target.id)   // details of targeted id
    //console.log(arr[dets.target.id].story) 
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`  // it will show the respectives stories 

    setTimeout(function() {
    document.querySelector(".full-screen").style.display = "none"
    }, 900);   // after clicking the particular story , that particular stories will show for 900ms then it will disappear from screen as ot shows in instagram
});