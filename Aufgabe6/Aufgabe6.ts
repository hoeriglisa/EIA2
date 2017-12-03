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

        let splitted: string[] = _input.split(",");

        if (parseInt(splitted[0]) == NaN) { //Wenn Matrikel die die ich nicht eingegeben habe, dann wirds ausgegeben
            return "Matrikelnummer keine Nummer";
        }
        let geschlecht: boolean = parseInt(splitted[4]) == 1;

        let student: StudentData = {
            Matrikel: parseInt(splitted[0]),
            Name: splitted[1],
            Firstname: splitted[2],
            Age: parseInt(splitted[3]),
            Gender: geschlecht,
            Comment: splitted[3]
        };

        students.push(student);

        return "Eingegebene Daten" + "Matrikelnummer:" + student.Matrikel + "Nachname:" + student.Name + "Vorname:" + student.Firstname + "Alter:" + student.Age + "Geschlecht:" + student.Gender + "Kommentar:" + student.Comment;
    }
    function queryData(_Matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikel == _Matrikel) {

                return "Deine Daten zur Matrikel:" + students[i].Name + students[i].Firstname + students[i].Age + students[i].Gender;
            }

            else {
                return "Keine Daten zur Matrikel"
            }

        }

        return;
    }
}