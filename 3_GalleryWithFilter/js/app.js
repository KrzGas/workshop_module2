document.addEventListener("DOMContentLoaded",function () {
    var allImg = document.querySelectorAll("img");
    var input = document.getElementById("tagInput");
    var show = document.getElementById("showButton");
    var hide = document.getElementById("hideButton");

    show.addEventListener("click", function(event) {
      var inputText = input.value;
      input.value="";
        for (let i = 0; i < allImg.length; i++) {
            if (allImg[i].dataset.tag.indexOf(inputText)>-1 && inputText !== "") {
                allImg[i].className = "";
            } else {
                allImg[i].className = "invisible";
            }
        }
    });

    hide.addEventListener("click", function(event) {
        var inputText = input.value;
        input.value="";
        for (let i = 0; i < allImg.length; i++) {
            if (allImg[i].dataset.tag.indexOf(inputText)>-1 && inputText !== "") {
                allImg[i].className = "invisible";
            } else {
                allImg[i].className = "";
            }
        }
    });
});