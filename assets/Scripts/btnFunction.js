topBtn = $("#topBtn");
bottomBtn= $("#bottomBtn");

$(document).ready(function (){

    topBtn.on("click", function () {
        function topFunction () {
            document.documentElement.scrollTop = 0;
        }

        topFunction();
    })

    bottomBtn.on("click", function () {
        function bottomFunction () {
            document.documentElement.scrollTop = 26000;
        }

        bottomFunction();
    })

});



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
    


  
