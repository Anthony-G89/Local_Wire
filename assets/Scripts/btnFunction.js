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
    $("html, body").animate({scrollTop: 12589}, "slow")
});



// $(document).ready (function (){
//     $("#topBtn").hide();


// });


// $(window).scroll(function(){
//     $('#topBtn').addClass('scrolled', $(this).scrolltop() > 10);
// });


// $(document).ready(function() {
//     $("#mydiv").hide();
//     $("#show").click(function() {
//       $("#mydiv").toggle();
//       $("#show").toggle();
//     });
//     $("#hide").click(function() {
//       $("#mydiv").hide();
//       $("#show").show();
//     });
//   });
 
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





// window.onscroll = function () {scrollFunction() };


//         function scrollFunction () {
//             if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//                 topBtn.style.display = "block";

//             }else {
//                 topBtn.style.display = "none"
//             }
//         }


// jQuery(window).scroll(function () {
    //     var topButton = jQuery("#topBtn");
    
    //     if(jQuery(this).scrollTop() >= 200) topButton.addClass("shown");
    //     else topButton.removeClass("shown");
    // })
    


  
