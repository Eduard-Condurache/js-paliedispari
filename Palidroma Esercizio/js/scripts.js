
const userWord = prompt('Inserisci una parola!');

checkPali(userWord);

function checkPali (stringa) {
    stringa = stringa.toLowerCase();
    
    const len = stringa.length - 1;
    const mid = len / 2;

    for (let i = 0; i < mid; i++) {
        if (stringa[i] !== stringa[len - i]) {
            return console.log("Non è una parola palindroma");
        }
    }

    return console.log("E' una parola palindroma");
}