// chiedi email
var email = prompt("Inserisci la tua mail")
var emailRegistrate = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"];
var accesso = 0
for (var i = 0; i < emailRegistrate.length; i++) {
    if (emailRegistrate[i] == email) {
        console.log("ACCESSO CONSENTITO");
        document.getElementById("accesso").innerHTML = "ACCESSO CONSENTITO!!";
        var accesso = 1
    }
}
if (accesso != 1) {
    console.log("ACCESSO NEGATO");
    document.getElementById("accesso").innerHTML = "ACCESSO NEGATO!!";
}
