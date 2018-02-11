var A10;
(function (A10) {
    window.addEventListener("load", init);
    //Boxen
    let baumtyp = document.createElement("select");
    let halterungtyp = document.createElement("select"); //Selekt Boxen erstellen
    let lieferopttyp = document.createElement("select");
    var korb = document.createElement("div"); //Warenkorb Div erstellen
    //Eingabe Mensch
    let Name = document.createElement("input");
    let preName = document.createElement("input");
    let Mail = document.createElement("input"); //Texteingabefelder erstellen
    let address = document.createElement("input");
    let kommentar = document.createElement("input");
    //Button
    let prufen = document.createElement("div");
    //All die erstellen Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    var gesamtpreis = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist
    function init() {
        //Warenkorb Definieren und Anhängen
        let h2 = document.createElement("h2"); //Warenkorb überschrift
        h2.innerText = "Deine Bestellung"; //Text der überschrift
        h2.style.position = "fixed"; //CSS Gestaltung
        h2.style.left = "35%";
        h2.style.top = "5%";
        document.getElementById("korbid").appendChild(h2); //Überschrift an div mit id korbid ins DOM hinzufügen
        korb.style.display = "inline-block"; //Warenkorb Stylen
        korb.style.position = "fixed";
        korb.style.left = "35%";
        korb.style.width = "20%";
        korb.style.height = "70%";
        korb.style.top = "1%";
        korb.style.margin = "5%";
        korb.style.marginLeft = "0.3%";
        document.getElementById("korbid").appendChild(korb); //Warenkorb (korb) an DOM anhängen
        //Baum Definieren und Anhängen        
        baumtyp.addEventListener("change", AuswahlAuslesen); //oben erstellten baumtyp vararbeiten
        document.getElementById("baumtyp").appendChild(baumtyp);
        for (let i = 0; i < A10.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = A10.baumdaten[i].name;
            baumtyp.id = A10.baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts; Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist
            baumtyp.appendChild(option);
        }
        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        for (let i = 0; i < A10.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = A10.halterungdaten[i].name;
            halterungtyp.id = A10.halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }
        //Kugel Selektor       
        for (let i = 0; i < A10.kugeldaten.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox"; //Macht es zur Checkbox
            kugeltyp.id = A10.kugeldaten[i].element;
            kugeltyp.addEventListener("change", function () {
                ChkKugelnAuslesen(kugeltyp, "1"); //Werte übergeben; in kugeltyp ist alles enthalten
            });
            document.getElementById("kugeln").appendChild(kugeltyp);
            //Labels hinzufügen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = A10.kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
        }
        //Kerzen Selektor       
        for (let i = 0; i < A10.kerzendaten.length; i++) {
            let kerzetyp = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = A10.kerzendaten[i].element;
            kerzetyp.addEventListener("change", function () {
                ChkKerzenAuslesen(kerzetyp, "1");
            });
            document.getElementById("kerzen").appendChild(kerzetyp);
            //Label Hinzufügen
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = A10.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
        }
        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        for (let i = 0; i < A10.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = A10.lieferoptionen[i].name;
            lieferopttyp.id = A10.lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }
        //Persönliche Daten Eingeben
        Name.type = "text";
        Name.placeholder = "Name";
        Name.required = true;
        Name.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Name);
        preName.type = "text";
        preName.placeholder = "Vorname";
        preName.required = true;
        preName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(preName);
        Mail.type = "email"; //Um nutzung von @ vorauszusetzen
        Mail.placeholder = "Email, bitte @ nicht vergessen";
        Mail.required = true;
        Mail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(Mail);
        address.type = "text";
        address.placeholder = "Adresse";
        address.required = true;
        address.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(address);
        //Button generieren
        let button = document.createElement("button");
        button.innerText = "Bestellung Pruefen";
        button.addEventListener("click", PrufeData);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    function ChkKugelnAuslesen(chkElement, anzahl) {
        for (let i = 0; i < A10.kugeldaten.length; i++) {
            if (A10.kugeldaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, A10.kugeldaten[i].name, A10.kugeldaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function ChkKerzenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < A10.kerzendaten.length; i++) {
            if (A10.kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, A10.kerzendaten[i].name, A10.kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(A10.baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(A10.baumdaten, false, baumname); //false --> Element wurde abgewählt
        }
        var halterungname = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(A10.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(A10.halterungdaten, false, halterungname);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(A10.lieferoptionen, true, lieferant);
        }
    }
    //Wird von DropDown genutzt; Sucht nach dem Preis
    function ZuWarenkorb(data, ischeckt, elementname) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name == elementname) {
                Warenkorb(data[i].element, elementname, data[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement; //Preis von anzahl mal Element berechnen
        preisElement = anzahl * preis;
        //Wird erst bei zweitem Durchgang ausgef�hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen aktuelles p 
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            korb.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }
    function PrufeData() {
        prufen.innerText = "";
        if (Name.checkValidity() == false || preName.checkValidity() == false || Mail.checkValidity() == false || address.checkValidity() == false) {
            prufen.innerText = "Deine Daten sind fehlerhaft. Korrigiere deinen Fehler und probiere es nochmal!";
            prufen.style.color = "red";
            prufen.style.position = "absolute";
            prufen.style.top = "80%";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Dein Weihnachtsbaum wird gebastelt! Frohes Fest :)";
            prufen.style.color = "green";
            prufen.style.position = "absolute";
            prufen.style.top = "80%";
            document.body.appendChild(prufen);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=Aufgabe10a.js.map