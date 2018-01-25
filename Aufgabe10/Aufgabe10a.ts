
namespace A10 {
    window.addEventListener("load", init);

    //Boxen
    let baumtyp: HTMLSelectElement = document.createElement("select");
    let halterungtyp: HTMLSelectElement = document.createElement("select"); //Selekt Boxen erstellen
    let lieferopttyp: HTMLSelectElement = document.createElement("select");
    var korb: HTMLDivElement = document.createElement("div"); //Warenkorb Div erstellen

    //Eingabe Mensch
    let Name: HTMLInputElement = document.createElement("input");
    let preName: HTMLInputElement = document.createElement("input");
    let Mail: HTMLInputElement = document.createElement("input"); //Texteingabefelder erstellen
    let address: HTMLInputElement = document.createElement("input");
    let kommentar: HTMLInputElement = document.createElement("input");

    //Button
    let prufen: HTMLDivElement = document.createElement("div");

    //All die erstellen Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt

    var gesamtpreis: number = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist


    function init(): void {

        //Warenkorb Definieren und Anhängen
        let h2: HTMLHeadingElement = document.createElement("h2"); //Warenkorb überschrift
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

        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name;
            baumtyp.id = baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts; Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist
            baumtyp.appendChild(option);
        }



        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterungtyp.id = halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }


        //Kugel Selektor       
        for (let i: number = 0; i < kugeldaten.length; i++) {
            let kugeltyp: HTMLInputElement = document.createElement("input");
            kugeltyp.type = "checkbox"; //Macht es zur Checkbox
            kugeltyp.id = kugeldaten[i].element;
            kugeltyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                ChkKugelnAuslesen(kugeltyp, "1"); //Werte übergeben; in kugeltyp ist alles enthalten
            });

            document.getElementById("kugeln").appendChild(kugeltyp);

            //Labels hinzufügen
            let kugellabel: HTMLLabelElement = document.createElement("label");
            kugellabel.innerText = kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
        }



        //Kerzen Selektor       
        for (let i: number = 0; i < kerzendaten.length; i++) {
            let kerzetyp: HTMLInputElement = document.createElement("input");
            kerzetyp.type = "checkbox";
            kerzetyp.id = kerzendaten[i].element;
            kerzetyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                ChkKerzenAuslesen(kerzetyp, "1");
            });

            document.getElementById("kerzen").appendChild(kerzetyp);

            //Label Hinzufügen
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
        }



        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferopttyp.id = lieferoptionen[i].element;
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
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Bestellung Pruefen";
        button.addEventListener("click", PrufeData);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }


    function ChkKugelnAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kugeldaten.length; i++) {
            if (kugeldaten[i].element == chkElement.id) {

                Warenkorb(chkElement.id, kugeldaten[i].name, kugeldaten[i].preis, parseInt(anzahl), chkElement.checked);

            }
        }
    }

    function ChkKerzenAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kerzendaten.length; i++) {
            if (kerzendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }


    function AuswahlAuslesen(): void {
        var baumname: string = baumtyp.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(baumdaten, true, baumname); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewählt
        }


        var halterungname: string = halterungtyp.value;
        if (halterungname != "") {
            ZuWarenkorb(halterungdaten, true, halterungname);
        } else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }



        var lieferant: string = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionen, true, lieferant);
        }
    }

    //Wird von DropDown genutzt; Sucht nach dem Preis
    function ZuWarenkorb(data: Data[], ischeckt: boolean, elementname: string): void {

        for (let i: number = 0; i < data.length; i++) {
            if (data[i].name == elementname) {
                Warenkorb(data[i].element, elementname, data[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }


    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number; //Preis von anzahl mal Element berechnen
        preisElement = anzahl * preis;

        //Wird erst bei zweitem Durchgang ausgef�hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p pr�fen
            if (korb.getElementsByTagName("p")[i].id == elementId) { //Vergleicht Elemente im Warenkorb mit ausgewähltem Element
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen

                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }

            //Gesamtpreis p entfernen um später aktualisiert zurück einzufügen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            korb.appendChild(p);
        }

        //Gesamtpreis wieder hinzufügen
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }


    function PrufeData(): void {

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

}