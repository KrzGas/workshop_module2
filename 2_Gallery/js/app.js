document.addEventListener("DOMContentLoaded", function () {
   var ulElements = document.querySelectorAll("li");
   var body = document.querySelector("body");

    for (let i = 0; i < ulElements.length; i++) {
        ulElements[i].addEventListener("click", function (event) {
            var newDiv = document.createElement("div");
            var newImg = document.createElement("img");
            var button = document.createElement("button");
            var imgsrc = document.querySelectorAll("img")[i].src;
            body.appendChild(newDiv);
            newDiv.className = "fullScreen";
            newImg.src = imgsrc;
            button.className = "close";
            button.innerText = "Close";
            newDiv.appendChild(newImg);
            newDiv.appendChild(button);

            button.addEventListener("click", function (event) {
                var getDiv = document.querySelector(".fullScreen");
                getDiv.parentNode.removeChild(getDiv);
            })
        })
    }
});
