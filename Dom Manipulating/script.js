/* objective 1
addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);
    addEventListener("click", click);
    function click() {
        alert("This is a nice message.")
    }
}
/*

/* objective 2
let button = document.getElementById("button");
button.addEventListener("click", click);
function click() {
    let message = document.getElementById("text-box").value;
    alert(message);
}
*/

/* objective 3
let div = document.getElementById("divObj3");
div.addEventListener("mouseover", function(e) {
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseout", function(e) {
    div.style.backgroundColor = "black";
})
/*


/* objective 4
let p = document.getElementById("p");
p.addEventListener("click", function() {
    let allchar = "0123456789ABCDEF";
    let randcol = "";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    p.style.color = "#" + randcol;
    p.style.cursor = "pointer"
})
*/


 /*objective 5
let button = document.getElementById("button");
let div = document.getElementById("div");
button.addEventListener("click", function() {
    let span = document.createElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Cameron");
    span.appendChild(text);
})*/

// objective 6
let friends = ["Camille", "Antonio", "Will", "Rara", "Kj", "Pookie", "Daveion", "chuck", "lucas", "Mark"];
let button = document.getElementById("button");
let ul = document.getElementById("ul");
button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }
});