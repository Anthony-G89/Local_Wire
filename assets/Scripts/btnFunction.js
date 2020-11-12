topBtn = $("#mainBtn");


$(document).ready(function (){

    topBtn.on("click", function () {
        // window.onscroll = function () {scrollFunction()};


        // function scrollFunction () {
        //     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //         topBtn.style.display = "block";

        //     }else {
        //         topBtn.style.display = "none"
        //     }
        // }


        function topFunction () {
            document.documentElement.scrollTop = 0;
        }

        topFunction();

    })

    

})
