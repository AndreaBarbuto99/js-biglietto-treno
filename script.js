/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60 */

const userKm = parseFloat(prompt("inserisci il numero di chilometri che vuoi percorrere"));
const userAge = parseInt(prompt("inserisci la tua età"));
let minorPrice = 0 ;
let oldPrice = 0 ;

console.log(userKm, userAge) ;

let ticketPrice = 0.21 * userKm ; 

if (userAge < 18) {
    minorPrice = ticketPrice - ticketPrice * 20 / 100;
    console.log("prezzo biglietto minori " + "€" + minorPrice.toFixed(2));
    document.getElementById("minor-price").innerHTML = "€" + minorPrice.toFixed(2);
}

else if (userAge >= 65) {
    oldPrice = ticketPrice - ticketPrice * 40 / 100;
    console.log("prezzo biglietto anziani " + "€" + oldPrice.toFixed(2));
    document.getElementById("old-price").innerHTML = "€" + oldPrice.toFixed(2);
}

else {
    console.log("prezzo biglietto normale " + "€" + ticketPrice.toFixed(2));
    document.getElementById("normal-price").innerHTML = "€" + ticketPrice.toFixed(2);

}

