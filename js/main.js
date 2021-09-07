var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";

    }
    prevScrollpos = currentScrollPos;
    
};



// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



$(function () {
    $(document).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".navbar").removeClass("bg-dark  shadow-lg");
            $(".progress-container").css("opacity", "0");
        } else {
            $(".navbar").addClass("bg-dark shadow-lg");
            $(".progress-container").css("opacity", "1");
            
        }
    });

    $("#navbarNav").on("show.bs.collapse", function () {
        $("#navbarNav").addClass("bg-dark rounded-3");
    });



});