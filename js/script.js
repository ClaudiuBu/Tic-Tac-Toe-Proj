var onOff, gameStart = true;
var winner, squareOne, squareTwo, squareThree;
var squares = [0, 0, 0, 0, 0, 0, 0, 0, 0];


$('.square').click(function (e) {
    if (gameStart == true) {
        if ($(this).hasClass('x-square') || $(this).hasClass('o-square')) {
            console.log(squares[parseInt(this.innerHTML, 10)]);
            console.log("Nu intru in conditia de adaugare a clasei.");

        }
        else {

            if (!onOff) {
                displayX(this);
                squares[parseInt(this.innerHTML, 10)] = 1;
                console.log(this.innerHTML + ":" + squares[parseInt(this.innerHTML, 10)]);
                decideWinner();
                toggleFade("player_2_turn","player_1_turn");
            }
            else {
                displayO(this);
                squares[parseInt(this.innerHTML, 10)] = 2;
                console.log(this.innerHTML + ":" + squares[parseInt(this.innerHTML, 10)]);
                decideWinner();
                
                toggleFade("player_1_turn","player_2_turn");
            }
        }
    }

    else {
        //show result
        //displayResult(winner);
    }
})

function displayX(e) {
    $(e).animate({
        backgroundColor: "#332267",
    }, 1500).addClass('x-square');
    onOff = true;
    console.log(onOff);
}
function displayO(e) {
    $(e).animate({
        backgroundColor: "#332267",
    }, 100).addClass('o-square');
    onOff = false;
    console.log(onOff);
}
function decideWinner() {
    //Check to see if the game is finished
    debug();
    for (var i = 0; i < squares.length; i++) {
        if ((squares[i] == 1 && squares[i + 1] == 1
            && squares[i + 2] == 1) || (squares[i] == 2
                && squares[i + 1] == 2
                && squares[i + 2] == 2)) {
            squareOne = i;
            squareTwo = i + 1;
            squareThree = i + 2;
            if (squareOne == 0 && squareTwo == 1 && squareThree == 2 ||
                squareOne == 3 && squareTwo == 4 && squareThree == 5 ||
                squareOne == 6 && squareTwo == 7 && squareThree == 8) {
                checkWin(i);
            }
        }
        else if ((squares[i] == 1 && squares[i + 3] == 1 && squares[i + 6] == 1)
            || (squares[i] == 2 && squares[i + 3] == 2 && squares[i + 6] == 2)) {
            squareOne = i;
            squareTwo = i + 3;
            squareThree = i + 6;
            checkWin(i);

        }
        else if ((squares[i] == 1 && squares[i + 4] == 1 && squares[i + 8] == 1)
            || (squares[i] == 2 && squares[i + 4] == 2 && squares[i + 8] == 2)) {

            squareOne = i;
            squareTwo = i + 4;
            squareThree = i + 8;
            checkWin(i);
        }
        else if (squares[i + 2] == 1 && squares[i + 4] == 1 && squares[i + 6] == 1) {
            squareOne = i + 2;
            squareTwo = i + 4;
            squareThree = i + 6;
            
            winner = "x"; // x won
            console.log(winner);
            displayResult(winner);
        }
        else if (squares[i + 2] == 2 && squares[i + 4] == 2 && squares[i + 6] == 2) {

            squareOne = i + 2;
            squareTwo = i + 4;
            squareThree = i + 6;
            
            winner = "o"; //o won
            console.log(winner);
            displayResult(winner);
        }
        else;
    }
    console.log(squareOne + "," + squareTwo + "," + squareThree);
}

function checkWin(arg) {
    console.log(squares[arg]);
    if (squares[arg] == 1) {
        winner = "x"; // x won
        console.log(winner);
        displayResult(winner);
    }
    else if (squares[arg] == 2) {
        winner = "o"; //o won
        console.log(winner);
        displayResult(winner);
    }
}
function displayResult(arg) {
    console.log(arg);
    switch (arg) {
        case "x":
        case "o":
            console.log("Am ajuns in caseul:" + arg);
            updateBoard(squareOne, squareTwo, squareThree, arg);
            break;
        default: break;
    }
}

function updateBoard(arg1, arg2, arg3, arg) {

    console.log("Am ajuns in updateBoard");
    console.log(arg1, arg2, arg3, arg);
    $(".square-" + arg1.toString()).addClass(arg + "-square-win");
    $(".square-" + arg2.toString()).addClass(arg + "-square-win");
    $(".square-" + arg3.toString()).addClass(arg + "-square-win");

    $(".diagonal-line").addClass("visible");
    $(".diagonal-line").addClass("col-" + arg1.toString()+"-"+ arg2.toString()+"-"+ arg3.toString());

    gameEnd();
}

function debug() {
    for (var i = 0; i < squares.length; i++) {
        console.log("squares[" + i + "]=" + squares[i] + "si sunt " + squares.length + "elemente");
    }
}
function gameEnd(){
    $(".title").children("h1:first-child").html("Game Over. Press <span>A</span> to retry");
    $(".title").children("h1:nth-child(2)").text("");
    $(".title").children("h1:nth-child(3)").text("");
    document.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 65) {
            location.reload();
        }
        // do something
      });
}
    //Jucatorul alege square.
    //Dupa alege compul din ce ramane

    //Game win conditions


function toggleFade(classToFadeIn,classToFadeOut){

    $('.'+classToFadeIn).fadeIn("slow",function(){
        $('.'+classToFadeOut).fadeOut("slow",function(){
        });
    });
}