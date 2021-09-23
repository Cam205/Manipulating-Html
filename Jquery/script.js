/* objective 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Hello how are you doing today?.")
});
*/

/* objective 2
let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});
*/

/* objective 3
let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
});
*/

/* objective 4
let $p = $("#p");
$p.click( function() {
    let $allchar = "0123456789ABCDEF";
    let $randcol = "";
    for (let i = 0; i < 6; i++) {
        $randcol += $allchar[Math.floor(Math.random() * 16)];
    }
    $($p).css("color", "#" + $randcol);
});
*/

/* objective 5
let $button = $("#button");
let $div = $("#div");
$button.click( function() {
    let $span = $("<span>Evan</span>");
    $($span).appendTo($div);
});
*/

// objective 6
let $friends = ["Camille", "Antonio", "Will", "Rara", "Kj", "Pookie", "Daveion", "chuck", "lucas", "Mark"];
let $button = $("#button");
let $ul = $("#ul");
$($button).click(function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $("<li>" + ($friends[i]) + "</li>");
        $($li).appendTo($ul);
    }
});