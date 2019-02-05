document.addEventListener("DOMContentLoaded",function () {
    var allTT = document.querySelectorAll(".tooltip");

    for (let i = 0; i < allTT.length; i++) {

        allTT[i].addEventListener("mouseover", function (event) {
            var newSpan = document.createElement("span");
            newSpan.className = "tooltipText";
            newSpan.innerText = this.dataset.text;
            this.appendChild(newSpan);
        });

        allTT[i].addEventListener("mouseout", function (event) {
            var spanChild = document.querySelector(".tooltipText");
            spanChild.parentNode.removeChild(spanChild);
        });
    }
});
