document.onload = function () {
    console.log("does this work");
    document.getElementById("enter-aframe").addEventListener("click", function() {
        window.open("aframe.html");
    });
}