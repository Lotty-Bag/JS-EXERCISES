
const V = -1
var turn = 'playerX'
var move = 0

var M = [
            [V, V, V],
            [V, V, V],
            [V, V, V]
        ]



/* Il gioco inizia con la X */

var section = document.getElementById("section")
var vincitore = document.getElementById("vincitore")
var button = document.createElement("button")

function playAgain() {
    button.addEventListener('click', function() {
        init()
    })
}


function play(pos) {
    showTheMove(pos)

    if (checkWinner(pos) == true){
        section.removeAttribute("class")
        section.appendChild(button)
        button.setAttribute('class','btn btn-success style-button')
        button.innerText = "Gioca di nuovo"
        section.setAttribute('class','text-center style-section')
        vincitore.setAttribute('class','text-center style-vincitore')
        vincitore.innerText = turn + " HAI VINTO!"
        playAgain()
    } 
    
    if (move == 8){
        section.removeAttribute("class")
        section.appendChild(button)
        button.setAttribute('class','btn btn-success style-button')
        button.innerText = "Ritenta"
        section.setAttribute('class','text-center style-section')
        vincitore.setAttribute('class','text-center style-vincitore')
        vincitore.innerText = "La partita è pari!"
        playAgain()
    }

    updateTurn()

}

function init() {
        for (r=0; r < M.length; r++) {
            for(c=0; c < M[r].length; c++) {
                M[r][c] = V
            }
        }
      
        section.classList[0]
        section.classList.replace('style-section', 'hidden')
        vincitore.removeAttribute("class")
        button.removeAttribute("class")

        var cells = document.getElementsByClassName('ildiv')
        for(i=0; i<cells.length; i++) {
            cells[i].getElementsByTagName("h1")[0].innerHTML = ""
        }

        turn = 'playerX'
        move = 0

        //location.reload();    con questa riga aggiorno la pagina al click del bottone.. in questo modo potrei non scrivere tutto quello che c'è sopra.
}

function showTheMove(pos) {
    /* quando clicco nel mio reticolo devo vedere comparire la X nella posizione corrispondente => prendo l'id del div e al suo interno prendo l'h1 dentro il quale scrivo X nel suo turno */
    
    var dom = document.getElementById(pos)

    if (turn == "playerX") {
        dom.innerHTML = "X"
    } else {
        dom.innerHTML = "O"
    }

    updateMatrix(pos) 
}

function updateMatrix(pos) {
    /* quando clicco si deve aggiornare la matrice => 0 e 1 devono comparire nelle giuste coordinate della matrice e andare a sosituire V */

    // var riga = pos[0]
    // var colonna = pos[1]

    // if (turn == "playerX") {
    //     M[riga][colonna] = "X"
    // } else {
    //     M[riga][colonna] = "O"
    // }

    //M[riga][colonna] = turn == "playerX" ? "X" : "O"

    M[pos[0]][pos[1]] = turn == "playerX" ? "X" : "O"

    console.log(M)

}

function checkWinner(pos) { 
   /* Controllo la matrice dalla 5a giocata => controllo tutte le righe, tutte le colonne e le due diagonali => ciclo for che parte da 5 */

    if (move < 4) {
        return false
    } 

    var value = turn == "playerX" ? "X" : "O"

    // controlliamo le righe
    for (r=0; r < M.length; r++) {
        var win = true
        for(c=0; c < M[r].length; c++) {
            if (M[r][c] != value) {
                console.log("M[" + r + "][" + c + "] = " + M[r][c] + " != " + value)
                win = false
                break
            } 
        }
        if (win == true) {
            console.log("riga " + r)
            return true 
        }
    }

    // controlliamo le colonne
    for (c=0; c < M.length; c++) {
        var win = true
        for(r=0; r < M[c].length; r++) {
            if (M[r][c] != value) {
                console.log("M[" + c + "][" + r + "] = " + M[c][r] + " != " + value)
                win = false
                break
            } 
        }
        if (win == true) {
            console.log("colonna " + c)
            return true
        }
    }

    // controlliamo la diagonale destra
    var win = true
    for (r = 0; r < M.length; r++) {
        if (M[r][r] != value) {
            win = false
            break
        } 
    }
    if (win == true) {
        console.log("diagonale destra")
        return true
    }

    // controlliamo la diagonale sinistra
    var c = 2
    win = true
    for (r = 0; r < M.length; r++) {
        if (M[r][c] != value) {
            win = false
            break
        }     
        //console.log(M[r][c])
        c--
    }
    if (win == true) {
        console.log("diagonale sinistra")
        return true
    }

    return false
}

function updateTurn() {
    /* Se la X è stata posizionata allora è il turno di O  */
    
    /* Lo posso scrivere così :

    if (turn == 'playerX'){
        turn = 'playerY'
    } else {
        turn = 'playerX'
    }

    Oppure con il modulo: 

    turn = (turn + 1) % 2

    oppure con l'operatore ternario:
    */

    turn = turn == 'playerX' ? 'playerY' : 'playerX'
    move++
    
    console.log("È il turno di: " + turn + " e sono state fatte " + move + " mossa/e.")
    // console.log("È il turno di: " + turn + "e sono state fatte " + countMove() + " mossa/e.")
}


// function countMove() {

//     var mossa = 0

//     // r = riga & c = colonna
//     for (r=0; r < M.length; r++) {
//         for(c=0; c < M[r].length; c++) {
//             if (M[r][c] != V) {
//                 mossa++
//             }
//         }
//     }
//     return mossa
// }

