topBtn = $(".topBtn");
bottomBtn= $(".bottomBtn");

window.addEventListener("scroll", () => {
    // console.log("scrolled!");
    const scrolled = window.scrollY;
    // console.log(scrolled);
})


window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".topBtn");
    scroll.classList.toggle("active", window.scrollY > 600)
});

window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".bottomBtn");
    scroll.classList.toggle("active", window.scrollY > 2150)
});

topBtn.on("click",  () => {
    $("html, body").animate({scrollTop: 0}, "slow")
});

bottomBtn.on("click", () => {
    $("html, body").animate({scrollTop: 29589}, "slow")
});

 
// $(document).ready(function (){

//     topBtn.on("click", function () {
//         function topFunction () {
//             document.documentElement.scrollTop = 0;
//         }

//         topFunction();
//     })

//     bottomBtn.on("click", function () {
//         function bottomFunction () {
//             document.documentElement.scrollTop = 26000;
//         }

//         bottomFunction();
//     })

// });






    


  
