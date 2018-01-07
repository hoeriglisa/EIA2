namespace StudiVZ {
    interface StudentData {
        Matrikel: number;
        Name: string;
        Firstname: string;
        Age: number;
        Gender: boolean;
        Comment: string;
    }

    var ArrayData: string[] = [];
    var students: StudentData[] = [];
    var stop: boolean = false;

    // das was sie eingeben ist mein input, da befülle ich meinen array
    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 (m) oder 1 (f)) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var Matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(Matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {

        let splitted: string[] = _input.split(","); // der string wird aufgesplitted durch kommas und füllt das array

        if (parseInt(splitted[0]) == NaN) { //Vergleich: Wenn Matrikel die die ich nicht eingegeben habe, dann wirds ausgegeben
            return "Matrikelnummer keine Nummer";
        }
        let geschlecht: boolean = parseInt(splitted[4]) == 1;

        let student: StudentData = { //aufruf von array
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
    function queryData(_Matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikel == _Matrikel) { //Ich frage ab ob sie gleich sind durch zwei gleichzeichen
            //Wenn auffindbar, werden daten ausgegeben

                return "Deine Daten zur Matrikel:" + students[i].Name + students[i].Firstname + students[i].Age + students[i].Gender;
            }

            else {
                return "Keine Daten zur Matrikel"
            }

        }

        return;
    }
}