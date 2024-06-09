$(".header_ham").click(function() {
    $(".header_menu").slideToggle(300);
})

$(".btn-back").click(function() {
    history.back();
})

$(".btn-popup").click(function() {
    $(".popup").fadeOut(300);
    let popup = $(this).data("link");
    $(popup).fadeIn(300);
})

$(".popup_bg").click(function() {
    $(".popup").fadeOut(300);
})

$(".popup_close").click(function() {
    $(".popup").fadeOut(300);
})

$(".popup-full_close").click(function() {
    $(".popup").fadeOut(300);
})

$(".popup").click(function (event) {
    var popupContent = $(".popup_window");
    if (!popupContent.is(event.target) && popupContent.has(event.target).length === 0) {
        $(".popup").fadeOut(300);
    }
});

var music = document.getElementById("bgMusic");
window.onload = function() {
    music.play();
}

window.onload = function(){
    $(".load-bg").fadeOut();
}