document.addEventListener("DOMContentLoaded", function () {
    var liElements = document.querySelector("ul").children;

    for (let i = 0; i < liElements.length; i++) {
        liElements[i].addEventListener("mouseover", function () {
            var isUl = this.querySelector("ul");
            if (isUl !== null) {
                isUl.style.display = "block";
            }
        });

        liElements[i].addEventListener("mouseout", function () {
            var isUl = this.querySelector("ul");
            if (isUl !== null) {
                isUl.style.display = "none";
            }
        });
    }

});