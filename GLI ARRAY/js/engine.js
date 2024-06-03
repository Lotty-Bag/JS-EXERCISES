// Es 1. Memorizzare in un array di dieci posizioni i primi dieci numeri naturali.

//var es1_array = []
var es1_array = new Array(10)

for (i = 0; i < 10; i++) {
        //es1_array.push(i + 1)
        es1_array[i] = i+1
}

let es1 = document.getElementById('es1')
es1.innerText = "[" + es1_array + "]"


// Es 2. Leggere e memorizzare in un array di 8 celle, 8 numeri reali, dopo averli memorizzati calcolarne la somma e la media.

var es2_array = []
var sum = 0
const MAX_R = 10

for (i = 0; i < 8; i++) {
    es2_array.push(Math.random()*MAX_R)
}

for (i = 0; i < es2_array.length; i++) {
    sum += es2_array[i]
}

var es2_average = sum/es2_array.length

let es2 = document.getElementById('es2')
es2.innerText = "Il mio array è: [" + es2_array + "]. La somma dei suoi elementi è " + sum + " mentre la loro media è " + es2_average + "."

// Es 3. Leggere e memorizzare in un array sette numeri, dopo averli letti contare quante volte è stato memorizzato lo zero.

var es3_array = []

for (i = 0; i < 3; i++) {
    es3_array.push(Math.ceil(Math.random()*10) % 2)
}

var zero = 0
for (i = 0; i < 3; i++) {
    if (es3_array[i] == 0) {
        zero++
    }
}

var num_zero = " volte."
if (zero == 1){
    num_zero = " volta."
}

let es3 = document.getElementById('es3')
es3.innerText = "Il mio array è: [" + es3_array + "]. Al suo interno il numero 0 è presente: " + zero + num_zero


//Es 4. Memorizzare in un array di 50 posti i primi 50 numeri naturali in ordine inverso.

var es4_array = []

// for (i = 0; i < 50; i++){
//     es4_array.push(i + 1)
// }

// es4_array.reverse()

for (i = 50; i > 0; i=i-1) {
    es4_array.push(i)
}

// for (i = 50; i > 0; i=i-3) <-- in this for, each iteration I am decrementing the value of the i of 3

let es4 = document.getElementById('es4')
es4.innerText = "[" + es4_array + "]" 

/*
Es 5. Creare un array di interi con 10 posti, inserire zeri in tutte le celle;
leggere in che posizione inserire un 1 e inserirlo nella corretta posizione dell’array; scandire l’array una cella alla volta fermandosi quando si trova l’uno, dire in che cella è stato trovato.
*/

var es5_array = []

for (i=0; i < 10; i++) {
    es5_array.push(i)
    es5_array[i] = 0
}

es5_array[7] = 1
var found = false
for (i = 0; i < 10; i++) {
    if(es5_array[i] == 1) {
        let es5 = document.getElementById('es5')
        es5.innerText = "[" + es5_array + "]. Ho trovato il numero 1 e si trova nella pozione " + i
        found = true
        break
    } 
}

if (!found) {
    let es5 = document.getElementById('es5')
    es5.innerText = "[" + es5_array + "]. Non sono stati trovati degli 1 all'interno dell'array."
}

// Es 10. Leggere un array di interi di 10 posizioni e verificare  se è palindromo (ovvero se non cambia ad essere letto dalla prima cella all’ultima o viceversa).
var es6_array = [1,2,3,2,1]

var palindromo = true
for (i = 0; i < es6_array.length / 2; i++) {
    if(es6_array[i] != es6_array[es6_array.length -1 -i]) {
        palindromo = false
        break
    }
}

// var es6_array_reverse = new Array(es6_array.length)
// for (i = 0; i < es6_array.length; i++) {
//     es6_array_reverse[i] = es6_array[es6_array.length -1 -i]
// }
// console.log("es6_array: " + es6_array)
// console.log("es6_array_reverse: " + es6_array_reverse)
// var palindromo = true
// for (i = 0; i < es6_array.length; i++) {
//     if(es6_array[i] != es6_array_reverse[i]) {
//         console.log("i: " + i + " --> " + es6_array[i] + " != " +  es6_array_reverse[i])
//         palindromo = false
//         break
//     }
// }

if (palindromo == false) {
    let es6 = document.getElementById('es6')
    es6.innerText = "[" + es6_array + "]. Questo array non è palindromo."
} else {
    let es6 = document.getElementById('es6')
    es6.innerText = "[" + es6_array + "]. Questo array è palindromo."
}


//Es 7. Leggere un array di interi di 5 posizioni e dopo averlo letto cercare al suo interno il massimo e scrivere il massimo e la posizione della cella in cui è memorizzato.

var es7_array = [1, 2, 7, 4, 5]
var i_max = 0

for (i=1; i < es7_array.length; i++) {
    if(es7_array[i_max] < es7_array[i]) {
        i_max = i
    }
}

let es7 = document.getElementById('es7')
es7.innerText = "Dato l'array: [" + es7_array + "] il suo valore massimo è " + es7_array[i_max] + " e si trova nella posizione " + i_max

// Es 8. Leggere un array di interi di 6 posizioni, leggere un ulteriore numero intero e dire quanti numeri memorizzati nell’array sono inferiori e quanti superiori dell’ultimo numero letto.

var es8_array = [3, 7, 1, 9, 6, 2]

var confronto = 5
var num_inf = 0
var num_sup = 0

for (i=0; i < es8_array.length; i++) {
    if(es8_array[i] > confronto) {
        num_sup++
    } else if (es8_array[i] < confronto) {
        num_inf++
    }
}

document.getElementById('es8').innerText = "Dato l'array: [" + es8_array + "] notiamo che confrontando i valori con il numero " + confronto + ", abbiamo " + num_sup + " numeri superiori e " + num_inf + " numeri inferiori."

// Esercizio sulla matrice

var m = [
            [3, 5, 7],
            [4, 9, 6],
            [1, 2, 11]
        ]

const NR = 3
const NC = 3

for (i = 0; i < NR; i++) {
    var s = ""
    for (j = 0; j < NC; j++) {
        s = s + " " + m[i][j]
    }
    console.log(s)
}

// for (i = 0; i < NR; i++) {
//     var s = ""
//     for (j = NC - 1; j >= 0; j--) {
//         s = s + " " + m[i][j]
//     }
//     console.log(s)
// }

console.log("print of the right diagonal")

var sumdd = 0
for (i = 0; i < NR; i++) {
        console.log(m[i][i]) 
        sumdd += m[i][i]
}

console.log("La somma della right diagonal è: " + sumdd)

console.log("print of the left diagonal")
// for (i = 0; i < NR; i++) {
//     for (j = 0; j < NC; j++) {
//         if(i + j == 2) {
//             console.log(m[i][j])
//         }
//     }
// }

var col = 2
var row = 0
var sumds = 0
for (i = 0; i < NR; i++) {
    console.log(m[row][col])
    sumds += m[row][col]
    row++
    col--
}

console.log("La somma della left diagonal è: " + sumds)




