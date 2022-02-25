ergebnisComputer = 0;
ergebnisSpieler = 0;


var display = function(text) {
    var ausgabeParagraph = document.getElementById('ausgabe');
    ausgabeParagraph.innerHTML = text + "<br>";
    return;
};

var displayErgebnis = function(text) {
    var ausgabeParagraph = document.getElementById('ergebnis');
    ausgabeParagraph.innerHTML = text + "<br>";
    return;
};


var vergleich = function(auswahlSpieler, auswahlComputer) {
    auswahlSpieler = auswahlSpieler.toLowerCase().trim();
    auswahlComputer = auswahlComputer.toLowerCase().trim();
    if (auswahlSpieler === auswahlComputer) {
        ergebnisComputer++;
        ergebnisSpieler++;
        return "Unentschieden!";
    } else if (auswahlSpieler === "stein") {
        if (auswahlComputer === "schere") {
            ergebnisSpieler++;
            return "Stein gewinnt";
        } else {
            ergebnisComputer++;
            return "Papier gewinnt!";
        }
    } else if (auswahlSpieler === "papier") {
        if (auswahlComputer === "stein") {
            ergebnisSpieler++;
            return "Papier gewinnt!";
        } else {
            ergebnisComputer++;
            return "Schere gewinnt!";
        }
    } else if (auswahlSpieler === "schere") {
        if (auswahlComputer === "stein") {
            ergebnisComputer++;
            return "Stein gewinnt!";
        } else {
            ergebnisSpieler++;
            return "Schere gewinnt!";
        }
    } else {
        return "Falsche Eingabe!?"
    }
};

var erzeugeComputerAuswahl = function() {
    var zufallsZahl = Math.random();
    if (zufallsZahl < 0.34) {
        return "stein";
    } else if (zufallsZahl <= 0.67) {
        return "papier";
    } else {
        return "schere";
    }
};

var spielen = function(spielerAuswahl) {
    var meldung;
    var ergebnis;
    var computerAuswahl = erzeugeComputerAuswahl();

    meldung = "Du hast " + spielerAuswahl.substr(0, 1).toUpperCase() + spielerAuswahl.substr(1) + " und der Computer hat " + computerAuswahl.substr(0, 1).toUpperCase() + computerAuswahl.substr(1) + ".\n";
    meldung = meldung + vergleich(spielerAuswahl, computerAuswahl);
    display(meldung);

    ergebnis = "user " + ergebnisSpieler + " :  " + ergebnisComputer + " pc ";
    displayErgebnis(ergebnis);

};