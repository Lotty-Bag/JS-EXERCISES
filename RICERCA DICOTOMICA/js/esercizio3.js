
var array = []

for(a=0; a<101; a++){
    var numCas = Math.ceil(Math.random()*1024)+1
    array.push(numCas)
// per ordinare un array possiamo usare il metodo .sort() che però ordina gli elementi come fossero stringhe, 
//quindi dobbiamo creare una funzione all'interno di sort() che ordini in maniera crescente i numeri
    array.sort((a,b)=> a-b)
}



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

    

