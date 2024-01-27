
let jokeButton = document.getElementById("inputButton");
let jokesStart = [
    "Come lo chiami un vergine dell'alabama?",
    "Come chiami la foto di famiglia di un orfano?",
    "Man mano che vado avanti nella vita ripenso a tutte quelle persone che ho perso lungo la strada...",
    "Il modo più veloce per far rimanere incinta una suora?",
    "Come impedisci ad un bambino di annegare in estate?",
    "Ho ceduto il mio posto ad una persona cieca sull'autobus...",
    "Quando ero piccolo il gioco che mi divertiva di più era fare i castelli con mio nonno...",
    "Cos'é piccolo, giovane e può sopravvivere sott'acqua?",
    "Mio nonno diceva sempre che si vivrebbe molto meglio senza tecnologia...",
    "Cosa hanno in comune gli orfani e i ciechi?",
    "Perché le ragazze dell'alabama non fanno la reverse cowgirl?",
    "Avevo un sogno in cui facevo sesso con un uomo di colore...",
    "Io sono bisessuale...",
    "Cosa ottieni quanto stimoli le palle di uomo il giorno della vigilia?",
    "L'altro giorno stavo facendo il solletico ai piedi del mio fratellino..."
];

let punchlines = [
    "Un orfano",
    "Un selfie!",
    "Forse la guida turistica non è il lavoro che fa per me :|",
    "Farla vestire da bambina.",
    "Lo anneghi in primavera!",
    "È così che ho perso il mio lavoro da autista.",
    "Il divertimento è finito quando mia madre mi ha vietato di usare le sue ceneri.",
    "Non un bambino!",
    "per questo l'ho scollegato dal supporto vitale.",
    "Nessuno dei due può vedere i propri genitori.",
    "Perché in alabama non si voltano le spalle alla famiglia.",
    "poi finalmente un giorno sono riuscito a realizzare il mio sogno.",
    "ma non lo dico alle persone che conosco perché suona un pò gay.",
    "Un bianco natale.",
    "E mia mamma ha detto 'smettila!, aspetta almeno che sia nato!'"
];

let joke = document.getElementById("joke")

jokeButton.addEventListener("click", useInputButton);

let currentJokeIndex = 0;

function useInputButton() {
    if (jokeButton.value === "Make me laugh!") {
        jokeButton.value = "LoL";
        joke.innerText = punchlines[currentJokeIndex];
        currentJokeIndex = getRandomIntInclusive(0, jokesStart.length);
    } else {
        jokeButton.value = "Make me laugh!";
        joke.innerText = jokesStart[currentJokeIndex];
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}