var i = 0
var f = 16

var m = Math.ceil((i + f)/2)

var numero = document.getElementsByClassName('numero')
numero[0].textContent = m
numero[1].textContent = m
numero[2].textContent = m

function scelta(minmag) {
    if (minmag == 'min') {
        f = m - 1
    } else {
        i = m
    }

    if (i == f) {
        var section = document.getElementById('esercizio1')
        section.innerHTML = "<h2>Il numero da te scelto è: " + i + "</h2>"
    } else {
        m = Math.ceil((i + f)/2)
        numero[0].textContent = m
        numero[1].textContent = m
        numero[2].textContent = m
    }
}

