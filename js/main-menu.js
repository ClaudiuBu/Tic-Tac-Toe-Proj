// Main menu 

function singlePlayerClick(){
    console.log("Ajung in scriptul de single-player");
    $('.menu-container').fadeOut( "slow", function() {
        $(".singple-p-container").removeClass("invisible");

      });

}

function multiPlayerClick(){
    console.log("Ajung in scriptul de multi-player");
}

function localMultiPlayerClick(){
    console.log("Ajung in scriptul de local");
}

function easyDificulty(){
    setTimeout(startGame(), 1000);
}
function mediumDificulty(){
    setTimeout(startGame(), 1000);
}
function hardDificulty(){
    setTimeout(startGame(), 1000);
}

function startGame(){
        $('.singple-p-container').fadeOut("fast",function(){
            $("#main-menu").addClass("display-none");
            $('.body-Tic-Tac-Toe').removeClass("invisible").fadeIn( "fast", function() {
                $('.score_board').removeClass("invisible");
                // Animation complete
                 });
        });
    

}