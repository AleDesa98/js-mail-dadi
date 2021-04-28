var numeroUtente = Math.floor(Math.random() * 6) + 1;
var numeroComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById("utente").innerHTML = "Il tuo numero è: " + numeroUtente;
document.getElementById("computer").innerHTML = "Il numero del tuo avversario è: " + numeroComputer;
if (numeroComputer > numeroUtente) {
    document.getElementById("risultato").innerHTML = "HAI PERSO!!"
} else if (numeroComputer < numeroUtente) {
    document.getElementById("risultato").innerHTML = "HAI VINTO!!"
} else {
    document.getElementById("risultato").innerHTML = "PAREGGIO"
}