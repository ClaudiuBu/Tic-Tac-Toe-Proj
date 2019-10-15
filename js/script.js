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
                decideWinner()
            }
            else {
                displayO(this);
                squares[parseInt(this.innerHTML, 10)] = 2;
                console.log(this.innerHTML + ":" + squares[parseInt(this.innerHTML, 10)]);
                decideWinner()
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

    debug();
    for (var i = 0; i < squares.length; i++) {
        if ((squares[i] == 1 && squares[i + 1] ==  1  && squares[i + 2] == 1) != 0) {
            squareOne = i; squareTwo = i + 1; squareThree = i + 2;
        }
    }
    console.log(squareOne + "," + squareTwo + "," + squareThree);
    if (squares[0] == 1 && squares[1] == 1 && squares[2] == 1) {
        console.log("A castigat X");
        winner = "x";
        console.log(winner);
        displayResult(winner);
    }
    else if (squares[0] == squares[1] == squares[2] == 2 || squares[3] == squares[4] == squares[5] == 2
        || squares[6] == squares[7] == squares[8] == 2) {


        console.log("A castigat O");
        winner = "o";
        console.log(winner);
        displayResult(winner);
    }
    else return;

}
function displayResult(arg) {
    switch (arg) {
        case "x":
            console.log("Am ajuns in caseul:" + arg);
            updateBoard(squareOne, squareTwo, squareThree, arg);
            break;
        default: break;
    }
}

function updateBoard(arg1, arg2, arg3, arg) {

    console.log("Am ajuns in updateBoard");
    console.log(arg1,arg2,arg3,arg);
    $(".square-" + arg1.toString()).addClass(arg + "-square-win");
    $(".square-" + arg2.toString()).addClass(arg + "-square-win");
    $(".square-" + arg3.toString()).addClass(arg + "-square-win");

    $(".diagonal-line").addClass("visible");
}

function debug() {
    for (var i = 0; i < squares.length; i++) {
        console.log("squares[" + i + "]=" + squares[i] + "si sunt " + squares.length + "elemente");
    }
}
//Jucatorul alege square.
//Dupa alege compul din ce ramane

//Game win conditions

