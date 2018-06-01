// Variables
var turn = 1; // Keeps track of whose turn it is
var buttons = document.getElementsByClassName('space');
var btnValue = [];
var whoWins = 0;
var winCombos = [
    // Horizontals
  '0,1,2',
  '3,4,5',
  '6,7,8',

  // Verticals
  '0,3,6',
  '1,4,7',
  '2,5,8',

  // Diagonals
  '0,4,8',
  '2,4,6']


// Wait for page to load before allowing user to click buttons

document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        //Initialize buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', ButtonLogic)
        }
    }
}

document.getElementById('reset').addEventListener('click',reset);

function ButtonLogic(evt) {
    var selectedSpace = evt.target.innerHTML;
    if (selectedSpace == '') {
        console.log('You made a move');
        if (turn == 1 || turn % 2 == 1) {
            evt.target.innerHTML = 'X';
        }
        else {
            evt.target.innerHTML = 'O';
        }
        turn++;
    }
    winner();
}

function winner() {
    btnValue = [];
    var xInd = [];
    var oInd = [];
    for (var i = 0; i < buttons.length; i++) {
        btnValue.push(buttons[i].innerHTML);
        if (btnValue[i] == 'X') {
            xInd.push(i);
        }
        else if (btnValue[i] == 'O') {
            oInd.push(i);
        }

        if (winCombos.indexOf(xInd.sort().join()) != -1) {
            whoWins = 1;
            break;
        }
        if (winCombos.indexOf(oInd.sort().join()) != -1) {
            whoWins = 2;
            break;
        }
    }
    if (whoWins == 1) {
        alert("Player1 wins!");
    }
    if (whoWins == 2) {
        alert("Player2 wins!");
    }
    if (turn == 11) {
        alert("We have a tie!")
    }
}

function reset() {
    location.reload();
}


for (var i = 0, winCombos.length; i++) {
    var 
}
