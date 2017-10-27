function greeter (): void {
    let text: string = prompt ("Bitte gib deinen Namen ein");
    if (text != null) {
        document.getElementById("Servus").innerHTML = "Hello " + text + " liebe Gruesse an dich!";
        }};