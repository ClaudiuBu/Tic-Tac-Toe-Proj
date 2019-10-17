// Main menu 

alert("main-menu-script added");

function singlePlayerClick(){
    console.log("Ajung in scriptul de single-player");
    $('.menu-container').fadeOut( "slow", function() {
        $('.body-Tic-Tac-Toe').removeClass("invisible").fadeIn("slow",function(){
            //animation comple;
        }).addClass("visible");
      });

}

function multiPlayerClick(){
    console.log("Ajung in scriptul de multi-player");
}

function localMultiPlayerClick(){
    console.log("Ajung in scriptul de local");
}
