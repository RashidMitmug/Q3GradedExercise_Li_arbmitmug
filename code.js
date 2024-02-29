function loadStart() {
    alert("User will be redirected to another page...");
    window.open("second.html");
}
function change(){
    document.getElementById("image").src="images/bladerunner2.jpg";
}
function revert(){
    document.getElementById("image").src="images/bladerunner.webp";
}