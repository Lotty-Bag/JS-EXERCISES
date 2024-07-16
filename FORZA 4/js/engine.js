/*

////--------        FORZA 4        --------////

1. Crea una matrice per rappresentare il tabellone.

2. Ogni elemento della matrice conterrà un valore che rappresenta il giocatore che occupa quella casella:
    0 = casella vuota
    1 = giocatore 1 (es. pedina rossa)
    2 = giocatore 2 (es. pedina gialla)
*/


const V = 'a'
const RED = 1
const YELLOW = 2
var turn = 0
var move = 0
const FULLCOLUMN = -1
const NOBODY = -1

var nRED = 0
var nYELLOW = 0


var M = [
    [V, V, V, V, V, V, V],
    [V, V, V, V, V, V, V],
    [V, V, V, V, V, V, V],
    [V, V, V, V, V, V, V],
    [V, V, V, V, V, V, V],
    [V, V, V, V, V, V, V]
]

function play(pos) {
    var column = pos[1]
    var row = checkColumn(pos)
    if (row != FULLCOLUMN) {
        showTheMove(row, column)
        checkWinner()
        updateTurn(pos)
    }

}


function showTheMove(row, column) {

    var id = row.toString() + column.toString()
    //console.log("questo è il mio id: " + id)
    
    var dom = document.getElementById(id)

    if (turn == YELLOW) {
        dom.classList.replace('circle', 'circleYellow')
    } else {
        dom.classList.replace('circle', 'circleRed')
    }

    updateMatrix(row, column) 
}


function checkColumn(pos) {
    var column = pos[1]

    for (r=5; r >= 0 ; r--) {
        if (M[r][column] == V) {
            //console.log("qui mettiamo il colore: " + r)
            return r
        }
    }
    return FULLCOLUMN
}

function updateMatrix(row, column) {
    M[row][column] = turn == YELLOW ? YELLOW : RED
    console.log(M)
}

function checkDsx (x,y) {

    // for (i=0; i<4; i++) {
    //     if (M[x-i][y+i] == V) {
    //         return NOBODY
    //     } else if (M[x-i][y+i] == RED) {
    //         nRED++
    //     } else {
    //         nYELLOW++
    //     }
    // }

    for (i=0; i<4; i++) {
        if (M[x-i][y+i] == V) {
            return NOBODY
        } else if (M[x-i][y+i] == RED) {
            nRED++
        } else {
            nYELLOW++
        }
    }
}



function checkWinner() {
    
    
    // controllo le righe

    for (r=0; r<M.length; r++) {

        var one = 0
        var two = 0

        for(c=0; c<M[r].length; c++) {
            if (M[r][c] == V) {
                one = 0
                two = 0
            }
            if (M[r][c] == RED) {
                one++
                if (one == 4) {
                    console.log("Giocatore " + RED + " hai vinto!")
                    return true
                }
            }
            if (M[r][c] == YELLOW) {
                two++
                if (two == 4) {
                    console.log("Giocatore " + YELLOW + " hai vinto!")
                    return true
                }
            }
        }
    }

    // controllo le colonne

    for (c=0; c<M[0].length; c++) {

        var win = false
        var one = 0
        var two = 0
        for (r=0; r<M.length; r++) {
            if (M[r][c] == V) {
                one = 0
            }
            if (M[r][c] == RED) {
                one++
                if (one == 4) {
                    win = true
                    console.log("Giocatore " + RED + " hai vinto!")
                    return true
                }
            }
            if (M[r][c] == YELLOW) {
                two++
                if (two == 4) {
                    win = true
                    console.log("Giocatore " + YELLOW + " hai vinto!")
                    return true
                }
            }
        }
    }
    


        // controllo le diagonali sinistre /

        var Ds = checkDsx(r,c)

        if (Ds == RED) {
            return RED
        } else if (Ds == YELLOW) {
            return YELLOW
        }
}



function updateTurn() {
    turn = turn == YELLOW ? RED : YELLOW
    move++
    console.log("È il turno di: " + turn + " e sono state fatte " + move + " mossa/e.")
}