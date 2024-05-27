/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/


const BAD_INPUT = -1
const NO_ACTION = -2
const DICE_FACES = 6
var N = 3
var sum_player1 = 0
var sum_player2 = 0


function tira(players) {
    var result_array = []
    var sum = 0

    if (players != "player1" && players != "player2") {
        console.log("Unexpected parameter: " + players + ". Exiting.")
        return BAD_INPUT
    }

    if ((players == "player1" && sum_player1 != 0) || (players == "player2" && sum_player2 != 0)) {
        console.log("Player: " + players + " already rolled the dice. Nothing to do.")
        return NO_ACTION
    }
    
    for(i = 0; i < N; i++) {
        var random_result = Math.ceil(Math.random() * DICE_FACES)
        result_array.push(random_result)
        console.log(random_result)
        sum += result_array[i]
    }

    if (players == 'player1') {
        sum_player1 = sum
    } else {
        sum_player2 = sum
    }

    for(i = 0; i < N; i++) {
        if (players == 'player1') {
            let list_roll = document.getElementById('roll')
            let roll = document.createElement('li')
            roll.innerText = "Roll n." + i + " : " + result_array[i]
            list_roll.appendChild(roll)
            let total = document.getElementById('total')      
        } else {
            let list_roll2 = document.getElementById('roll2')
            let roll2 = document.createElement('li')
            roll2.innerText = "Roll n." + i + " : " + result_array[i]
            list_roll2.appendChild(roll2)

        }
    }

    let total = document.getElementById('total')      
    total.innerHTML = "The total of the rolls is " + sum_player1 + "."  
    let total2 = document.getElementById('total2')
    total2.innerHTML = "The total of the rolls is " + sum_player2 + "."  


    if (sum_player1 > sum_player2) {
        let winner = document.getElementById('winner')
        winner.innerText = "Player 1 win!"
    }  else {
        let winner = document.getElementById('winner')
        winner.innerText = "Player 2 win!"
    } 

    if (sum_player1 = sum_player2) {
        let winner = document.getElementById('winner')
        winner.innerText = "The game is tied"
    }
}
