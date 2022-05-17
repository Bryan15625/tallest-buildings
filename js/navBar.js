const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    var overlay = document.getElementById("dark-overlay").style.display;
    document.getElementById("dark-overlay").style.display = overlay === "block" ? "none" : "block";

});
