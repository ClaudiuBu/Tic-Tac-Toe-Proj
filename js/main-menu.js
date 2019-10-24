// Main menu 

function singlePlayerClick(){
    console.log("Ajung in scriptul de single-player");
    $('.menu-container').fadeOut( "slow", function() {
        $(".singple-p-container").removeClass("invisible");

      });

}

function multiPlayerClick(){
    console.log("Ajung in scriptul de multi-player");
    $('.menu-container').fadeOut( "slow", function() {
        $(".multiplayer").removeClass("invisible");

      });
}

function localMultiPlayerClick(){
    $('.menu-container').fadeOut( "slow", function() {
        $(".local-multiplayer").removeClass("invisible");

      });

}
function startGameLocal(){
    setTimeout(startGame(), 1000);
    localMultiplayer();
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