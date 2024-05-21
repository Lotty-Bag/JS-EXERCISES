function calcola() {
    var ini = 1
    var fin = 1024
    var med = Math.ceil((ini + fin)/2)

    var x = document.getElementById('textarea').value
    var numIte = 0

    if (x>fin || x<ini) {
        alert("Il numero inserito non rispetta il range richiesto.")
        return;
    }

    while (ini != fin) {
        if (x < med) {
            fin = med - 1
            let orList = document.getElementById('orList')  
            let item = document.createElement("li")
            item.innerText = "i=" + ini + "; f=" + fin + "; m=" + med + ". Il mio numero è MINORE rispetto alla media."
            orList.appendChild(item)

        } else {
            ini = med
            let orList = document.getElementById('orList')  
            let item = document.createElement("li")
            item.innerText = "i=" + ini + "; f=" + fin + "; m=" + med + ". Il mio numero è MAGGIORE rispetto alla media."
            orList.appendChild(item)
        }  
        med = Math.ceil((ini + fin)/2)
        numIte++
    }



    let h4 = document.getElementById('h4') 
    h4.innerHTML = "Il numero trovato è <b style='color:green;'>" + ini + "</b> ed è stato trovato in <b style='color:green;'>" + numIte + "</b> iterazioni" + "<br><br>Le iterazioni vengono calcolate con la seguente formula: <b style='color:green;'>log<sub>2</sub>(1024)</b> il cui risultato è proprio <b style='color:green;'>" + Math.log(1024) / Math.log(2) + "</b>."

}
