document.getElementById("difficulty-1").addEventListener("click",postPlayerName);
document.getElementById("difficulty-2").addEventListener("click",postPlayerName);
document.getElementById("difficulty-3").addEventListener("click",postPlayerName);
document.getElementById("local-start").addEventListener("click",postPlayerName);
var default_name = document.getElementById('player-name').innerText;

$(".welcome-player").hide();
function postPlayerName(e) {

    
    if((document.getElementById("name2").value) !=""){
        var player_name = document.getElementById("name2").value;
    }
    else{
        var player_name = document.getElementById("name1").value;
    }


    if(!player_name)player_name="Default";// daca nu alege un nume

    console.log(player_name);
    console.log(default_name);
    e.preventDefault();
    default_name= player_name;
    $("#player-name").text("Welcome "+player_name);
    $(".player_name_1 >p").text(player_name);
    $(".welcome-player").fadeIn("slow",function(){
    });
 

}