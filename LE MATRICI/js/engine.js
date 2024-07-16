/*

////--------        ESERCIZIO 1        --------////

Data una matrice 5x5, calcolare la somma degli elementi presenti al di sopra della diagonale destra e poi i rimanenti (quindi quelli al di sotto della diagonale più la diagonale stessa)

*/

var V = 0

var M = [
    [V, V, V, V, V],
    [V, V, V, V, V],
    [V, V, V, V, V],
    [V, V, V, V, V],
    [V, V, V, V, V]
]
var h6 = document.getElementsByTagName('h6')



function updateMatrix () {

    var i = 0   // devo salvare il valore iniziale di i altrimenti altrimenti sotto mi darebbe errore

    for (r=0; r<M.length; r++) {
        for (c=0; c<M[0].length; c++) {
            M[r][c] = parseInt(document.getElementsByTagName('h6')[i].id)
            i++     // devo ad orgni ciclo incrementare il valore di i altrimenti mi prenderebbe solo il primo elemento
        }
    }
    console.log(M)
}

updateMatrix ()

var sumUp = 0 
var sumLow = 0
var sum1 = document.getElementById("sum1")
var sum2 = document.getElementById("sum2")


function sumUpDiag () {
    for(r=0; r<M.length; r++) {
        for(c=r; c<M[r].length ; c++) {
            sumUp += M[r][c]
        }
    }
    console.log(sumUp)
    sum1.innerHTML = "La somma degli elementi dalla diagonale in su è <b>" + sumUp + "</b>."
}

sumUpDiag ()

function sumLowDiag () {
    for(r=1; r<M.length; r++) {
        for(c=0; c<r ; c++) {
            sumLow += M[r][c]
        }
    }
    console.log(sumLow)
    sum2.innerHTML = "La somma degli elementi dalla diagonale in giù è <b>" + sumLow + "</b>."
}

sumLowDiag ()