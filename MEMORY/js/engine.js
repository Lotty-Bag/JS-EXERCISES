/*

////--------        MEMORY        --------////

*/

const IMAGES = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg", 
    "img/5.jpg", 
    "img/6.jpg", 
    "img/7.jpg", 
    "img/8.jpg", 
    "img/9.jpg", 
    "img/10.jpg"
]

const NROW = 5
const NCOLUMN = 4
let V = -1    //VOID VALUE

let M = [
    [V, V, V, V],
    [V, V, V, V],
    [V, V, V, V],
    [V, V, V, V],
    [V, V, V, V]
]

let card1 = V
let card2 = V


/*
function init2() {
    for (r=0; r<M.length; r++) {
        for (c=0; c<M[r].length; c++) {
            M[r][c] = V
        }
    }

    let counter = 0
    
    // Questo metodo funziona ma non è ottimizzato, perchè come vedo dal counter, i tentativi di inserimento sono più di 20 che sono quelli che basterebbero a riempire la matrice.
    for (i=0; i<IMAGES.length; i++) {
        let deployed = 0
        while (deployed < 2) {
            let randomRow = Math.floor(Math.random()*(NROW))
            let randomColumn = Math.floor(Math.random()*(NCOLUMN))
            //console.log("this is random row: " + randomRow + "; this is random column: " + randomColumn)
            if (M[randomRow][randomColumn] === V) {
                deployed++
                M[randomRow][randomColumn] = i
            }
            counter++
        }
    }
    console.log("Num di tentativi: " + counter)
}
*/


function init() {
    for (r=0; r<M.length; r++) {
        for (c=0; c<M[r].length; c++) {
            M[r][c] = V
        }
    }

    let positions = []
    for (i=0; i<(NROW*NCOLUMN); i++) {
        positions.push(i)
    }

    for (i=0; i<IMAGES.length; i++) {
        for (j=0; j<2; j++) {
            let indexRandom = Math.floor(Math.random()*positions.length)
            let value = positions[indexRandom]
            positions.splice(indexRandom, 1)
            let r = Math.floor(value / NCOLUMN)
            let c = value % NCOLUMN
            M[r][c] = i
        }
 
    }

    let matrix = document.getElementById('matrix')
    console.log(matrix)

    for (r=0; r<M.length; r++) {
        
        let row = document.createElement('div')
        row.setAttribute('class', 'row pt-4')
        matrix.appendChild(row)

        for (c=0; c<M[r].length; c++) {

            let col = document.createElement('div')
            col.setAttribute('class', 'col-3')
            row.appendChild(col)
            let divCardFront = document.createElement('div')
            divCardFront.setAttribute('class', 'card-front mx-auto')
            divCardFront.setAttribute('id', `${r}${c}`)
            divCardFront.setAttribute('onclick', 'play(this)')
            col.appendChild(divCardFront)
            let divCardBack = document.createElement('div')
            divCardBack.setAttribute('class', 'card-back hidden')
            col.appendChild(divCardBack)
            let img = document.createElement('img')
            img.setAttribute('src', IMAGES[M[r][c]])
            img.setAttribute('class', 'img-fluid')
            divCardBack.appendChild(img)
        
        }
    }
}


function play(element) {
    element.setAttribute('class', 'hidden')
    element.nextElementSibling.setAttribute('class', 'card-back mx-auto')
    let idCard = element.getAttribute('id')

    if (card1 == V) {
        card1 = idCard
    } else {
        card2 = idCard

        let r1 = card1[0]
        let c1 = card1[1]
        let r2 = card2[0]
        let c2 = card2[1]
        
        if (M[r1][c1] == M[r2][c2]) {

            setTimeout(()=>{
                document.getElementById(card1).nextElementSibling.setAttribute('class', 'hidden')
                element.nextElementSibling.setAttribute('class', 'hidden')
            }, 2000)
        } 

    }

}

init();
console.log(M)
