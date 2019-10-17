// Main menu 

alert("main-menu-script added");

function singlePlayerClick(){
    console.log("Ajung in scriptul de single-player");
    $('.menu-container').fadeOut( "slow", function() {
        $(".singple-p-container").removeClass("invisible");
        // $('.body-Tic-Tac-Toe').removeClass("invisible").fadeIn( "fast", function() {
        //     // Animation complete
        //   });
      });

}

function multiPlayerClick(){
    console.log("Ajung in scriptul de multi-player");
}

function localMultiPlayerClick(){
    console.log("Ajung in scriptul de local");
}
