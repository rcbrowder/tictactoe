// Variables
var turn = true; // Keeps track of whose turn it is
var buttons = document.getElementsByClassName('space');
var btnValue = []
// Wait for page to load before allowing user to click buttons

document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        //Initialize buttons
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', ButtonLogic)
        }
    }
}


function ButtonLogic(evt) {
    var selectedSpace = evt.target.innerHTML;
    if (selectedSpace == '') {
        console.log('You made a move');
        if (turn == true) {
            evt.target.innerHTML = 'X';
        }
        else {
            evt.target.innerHTML = 'O';
        }
        turn = !turn;
    }
    winner();
}

function winner() {
    btnValue = [];
    for (var i = 0; i < buttons.length; i++) {
        btnValue.push(buttons[i].innerHTML);
        }
    if (btnValue[0] == 'X')
    }

}
