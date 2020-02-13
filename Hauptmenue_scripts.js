let button_german = document.getElementById("ID10");
button_german.addEventListener("click", to_german);

function to_german() {
    document.getElementById("ID10").innerHTML = "Deutsch"
    document.getElementById("ID11").innerHTML = "Englisch"
    document.getElementById("ID12").innerHTML = "Benutzer Hinzufügen"
    document.getElementById("ID13").innerHTML = "Logout"
    document.getElementById("ID14").innerHTML = "Hauptmenü"
    document.getElementById("ID14").style.fontSize = "200%"
    document.getElementById("ID15").innerHTML = "Ressource"
    document.getElementById("ID16").innerHTML = "Ressourcen Details"
    document.getElementById("ID17").innerHTML = "Datum"
    document.getElementById("ID18").innerHTML = "Start Zeitpunkt"
    document.getElementById("ID19").innerHTML = "End Zeitpunkt"
    document.getElementById("ID20").innerHTML = "Verbindliche Buchung"
    document.getElementById("ID21").innerHTML = "Buchen"
}

let button_english = document.getElementById("ID11");
button_english.addEventListener("click", to_english);

function to_english() {
    document.getElementById("ID10").innerHTML = "German"
    document.getElementById("ID11").innerHTML = "English"
    document.getElementById("ID12").innerHTML = "Add User"
    document.getElementById("ID13").innerHTML = "Logout"
    document.getElementById("ID14").innerHTML = "Main Menue"
    document.getElementById("ID14").style.fontSize = "200%"
    document.getElementById("ID15").innerHTML = "Ressource"
    document.getElementById("ID16").innerHTML = "Ressource Details"
    document.getElementById("ID17").innerHTML = "End Time"
    document.getElementById("ID18").innerHTML = "Start Time"
    document.getElementById("ID19").innerHTML = "End Time"
    document.getElementById("ID20").innerHTML = "Binding Reservation"
    document.getElementById("ID21").innerHTML = "Reserve"
}