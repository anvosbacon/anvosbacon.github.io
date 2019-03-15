// =====================================================================
// Change image on click
// ---------------------------------------------------------------------
var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/soccer-ball-logo-1.png") {
        myImage.setAttribute("src", "images/soccer-ball-logo-2.jpg");
    } else {
        myImage.setAttribute("src", "images/soccer-ball-logo-1.png");
    }
}

// =====================================================================
// Personalized message
// ---------------------------------------------------------------------
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Goalie is cool, " + myName + "!";
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Goalie is cool, " + storedName + "!";
}

myButton.onclick = function() {
    setUserName();
}