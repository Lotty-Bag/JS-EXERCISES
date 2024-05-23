
var array = []

for(a=0; a<100; a++){
    var numCas = Math.ceil(Math.random()*1024)+1
    array.push(numCas)
// per ordinare un array possiamo usare il metodo .sort() che però ordina gli elementi come fossero stringhe, 
//quindi dobbiamo creare una funzione all'interno di sort() che ordini in maniera crescente i numeri
}

array.sort((a,b)=> a-b)
console.log(array)

/*

ESECUZIONE DELL'ESERCIZIO CON I METODI DI JAVASCRIPT

function verifica(){
    console.log(array)
    var input = document.getElementById('input').value

    const numTrovato = array.find(e => e == input);

    if (numTrovato) {
        position = array.indexOf(numTrovato)
        let text = document.getElementById('risultato')
        text.innerHTML = "Il numero " + input + " è presente nell'array e si trova nella posizione " + position
    } else {
        let text = document.getElementById('risultato')
        text.innerHTML = "Il numero " + input + " non è presente nell'array! :("
    }

}
*/






// ESECUZIONE DELL'ESERCIZIO CONTROLLANDO ALL'INTERNO DELL'ARRAY 

/*

function check() {
    var x = document.getElementById('input').value
    var index_element = verifica(x)
    console.log(index_element)
    if(index_element < 0)
        alert("Element " + x + " not found")

}

verifica controlla se un elemento passato in input è presente nell'array array

in: input (intero)
out: i (intero) che indica la posizione nell'array dove è stato indivuato il valore input. se input non è trovato, la funzione restituisce -1, la funzione restituisce -2 se il valore cercato è maggiore di 1024 o minor di 0 


function verifica(input) {

    if (input > 1024 || input < 0)
        return -2
        
    for (i=0; i<array.length; i++) {
        if (array[i] == input) {
            let text = document.getElementById('risultato')
            text.innerHTML = "Il numero " + input + " è presente nell'array e si trova nella posizione " + i
            console.log(i + ": Ho trovato il numero")
            return i                                        // avrei potuto anche usare il -break- che interrompe il ciclo
        } 
    }
    let text = document.getElementById('risultato')
    text.innerHTML = "Il numero " + input + " non è presente nell'array"
    console.log(i + ": il numero non è nell'array")
    return -1                                           
    // return -1 si usa con gli array ed è una convenzione comune che sta ad indicare che un elemento non è stato trovato 
}

*/





function verifica() {
    var input = document.getElementById('input').value
    var start = 0
    var end = array.length - 1
    var media = Math.ceil((start + end)/2)

    while (start != end) {
        if (input == array[media]) {
            console.log("Trovato in posizione " + media)
            return media
        } else if (input < array[media]) {
            console.log("Il valore si trova a sinistra del valore controllato adesso che sta in posizione " + media + " ed ha valore " + array[media])
            end = media - 1
        } else if (input > array[media]) {
            console.log("Il valore si trova a destra del valore controllato adesso che sta in posizione " + media + " ed ha valore " + array[media])
            start = media + 1
        }
        media = Math.ceil((start + end)/2)
        console.log("Il valore della media è stato aggiornato in " + media)
    }
    if (input == array[start]) {
        console.log("Trovato in posizione " + media)
        return start
    }
    console.log("Non trovato")
    return -1
}


