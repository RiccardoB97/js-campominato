/**Istruzioni:

In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
 **/

/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati. */

var livello = Number(prompt('A che livello vuoi giocare? [0-1-2]'))

function randomBombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var limit;

if (livello == 0) {
    limit = 100;
} else if (livello == 1) {
    limit = 80;
} else if (livello == 2) {
    limit = 50;
}

var bombe = []
var bomba;
while (bombe.length < 16) {
    bomba = randomBombe(1, limit);
    if (!bombe.includes(bomba)) {
        bombe.push(bomba);
    }
}

console.log(bombe);

var punteggio = 0;
var chance = limit - 16;
var lista = [];

do {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a ' + limit))
    if (bombe.includes(userNumber)) {
        alert('Hai preso una bomba, hai perso! Il tuo punteggio è: ' + punteggio)
    } else if (lista.includes(userNumber)) {
        alert('Numero gia inserito')
    } else if (userNumber < 1 || userNumber > limit || isNaN(userNumber)) {
        alert('Numero non consentito!')
    } else {
        lista.push(userNumber);
        punteggio += 1;
    }
} while (lista.length < chance && !bombe.includes(userNumber));
if (lista.length == chance) {
    alert('Hai vinto! Il tuo punteggio è ' + punteggio)
};