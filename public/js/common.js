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

$(".popup_bg, .popup_close").click(function() {
    $(".popup").fadeOut(300);
})