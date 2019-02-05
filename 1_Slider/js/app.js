document.addEventListener("DOMContentLoaded", function () {

    var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    var gallery = document.querySelector(".slider").children;
    var counter = 0;


    gallery[0].className = "visible";

    next.addEventListener("click", function (event) {
        event.preventDefault();
        counter += 1;
        if (counter > 0 && counter < 6) {
            gallery[counter-1].className = "";
            gallery[counter].className = "visible";
        }
        if (counter > 5) {
            gallery[5].className = "";
            gallery[0].className = "visible";
            counter = 0;
        }
    });

    prev.addEventListener("click", function (event) {
        event.preventDefault();
        counter -= 1;
        if (counter >= 0) {
            gallery[counter+1].className = "";
            gallery[counter].className = "visible";
        }
        if (counter < 0) {
            gallery[5].className = "visible";
            gallery[0].className = "";
            counter = 5;
        }
    });

});