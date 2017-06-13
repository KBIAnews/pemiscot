function resizeCards(){
    $(".home-card").css("height", $(window).height() - 50 + "px")
}

var homeMap = {};

$(document).ready(function(){
    resizeCards();

    $('aside').fadeTo( 1000, 0 );
});

$(document).scroll(function(){
    $('aside:in-viewport').fadeTo( 1500, 1 );
});