var StudiVZ;
(function (StudiVZ) {
    var ArrayData = [];
    var students = [];
    var stop = false;
    // das was sie eingeben ist mein input, da bef�lle ich meinen array
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (m) oder 1 (f)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var Matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(Matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitted = _input.split(","); // der string wird aufgesplitted durch kommas und f�llt das array
        if (parseInt(splitted[0]) == NaN) {
            return "Matrikelnummer keine Nummer";
        }
        let geschlecht = parseInt(splitted[4]) == 1;
        let student = {
            Matrikel: parseInt(splitted[0]),
            Name: splitted[1],
            Firstname: splitted[2],
            Age: parseInt(splitted[3]),
            Gender: geschlecht,
            Comment: splitted[3]
        };
        students.push(student); // Var vom Typ Array wird var student zugewiesen durch die methode push
        return "Eingegebene Daten" + "Matrikelnummer:" + student.Matrikel + "Nachname:" + student.Name + "Vorname:" + student.Firstname + "Alter:" + student.Age + "Geschlecht:" + student.Gender + "Kommentar:" + student.Comment;
    }
    function queryData(_Matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].Matrikel == _Matrikel) {
                //Wenn auffindbar, werden daten ausgegeben
                return "Deine Daten zur Matrikel:" + students[i].Name + students[i].Firstname + students[i].Age + students[i].Gender;
            }
            else {
                return "Keine Daten zur Matrikel";
            }
        }
        return;
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe6.js.map