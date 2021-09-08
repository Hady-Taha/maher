// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-100px";

//     }
//     prevScrollpos = currentScrollPos;
// };


//block of code to progress navbar
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
//block of code to progress navbar



$(function () {
    //remove background on top and animated
    $(document).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $(".navbar").removeClass("bg-dark  shadow-lg");
            $(".progress-container").css("opacity", "0");
        } else {
            $(".navbar").addClass("bg-dark shadow-lg");
            $(".progress-container").css("opacity", "1");
        }
    });

    //bootstrap event collapse
    $("#navbarNav").on("show.bs.collapse", function () {
        $("#navbarNav").addClass("bg-dark rounded-3 p-3 mt-4");
    });
});