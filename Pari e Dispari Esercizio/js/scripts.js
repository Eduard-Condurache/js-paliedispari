
// Variabile con un prompt per far scegliere pari o dispari
// Aggiunto .toLowerCase() cosi non è case sensitve.
const userEvenOrOdd = prompt('Scegli pari o dispari').toLowerCase();
console.log('Hai inserito: ' + userEvenOrOdd);

// Variabile con un prompt dove l'utente inserisce un numero.
const userNumber = parseInt(prompt('Inserisci un numero:'));

// Se non è un numero e il numero inserito dal utente e minore di 1 o maggiore di 5.
// Aggiungi un alert (...) altrimenti stampa in console (...);
if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert('Inserisci un numero corretto e riprova!');
}

else {
    console.log("Hai inserito il numero: " + userNumber);
}

// Variabile con funzione di un numero casuale da a 1 a 5;
const computerNumber = computerRandomNumber(1, 5);
console.log("Il computer ha inserito: " + computerNumber);

// Variabile con funzione che da il risultato tra userNumber e computerNumber.
const result = res(userNumber, computerNumber);

// Variabile con funzione che dice se il numero è pari o dispari, che ha come argomento,
// il risultato salvato nella variabile result.
const resultEvenOrOdd = evenOrOdd(result);
console.log('Il risultato è: ' + result + ' quindi il numero è ' + resultEvenOrOdd);

// Se quello che inserisce l'user tramite il prompt è uguale a pari (and)
// il risultato della funzione è uguale a pari
// Oppure
// Se il prompt è uguale a dispari (and) il risultato della funzione è uguale a dispari.
// Allora stampa in console Hai vinto!
// Altrimenti stampa Hai perso!
if ((userEvenOrOdd === 'pari' && resultEvenOrOdd === 'pari') || (userEvenOrOdd === 'dispari' && resultEvenOrOdd === 'dispari')) {
    console.log('Hai vinto!');
}

else {
    console.log('Hai perso!');
}


// FUNCTIONS

// Funzione che genere un numero casuale compreso tra un valore minimo e uno massimo
// che possiamo decidere noi richiamdo la funzione e cambiato i 2 argomenti con dei numeri.
function computerRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione che fa la somma tra 2 numeri.
function res (numbOne, numbTwo) {
    return numbOne + numbTwo;
}

// Funzione che ritorna il valore pari tramite il calcolo con il modulo oppure ritorna il valore dispari.
function evenOrOdd (num) {
    if (num % 2 == 0) {
        return 'pari';
    }

    else {
        return 'dispari';
    }
}

