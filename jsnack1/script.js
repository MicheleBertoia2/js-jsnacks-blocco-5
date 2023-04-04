/*
jSnack 1
Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65
*/

const utenti = [
  
  {
    firstname : 'Gianni',
    lastname  : 'Fagianni',
    age       : 54, 
  },

  {
    firstname : 'Giannina',
    lastname  : 'Fagianna',
    age       : 15, 
  },

  {
    firstname : 'Mario',
    lastname  : 'Merola',
    age       : 67, 
  },

  {
    firstname : 'Siamo',
    lastname  : 'Carichi',
    age       : 30, 
  },

  {
    firstname : 'Dominic',
    lastname  : 'Toretto',
    age       : 17, 
  },

  {
    firstname : 'Luca',
    lastname  : 'Abete',
    age       : 70, 
  },
]

const minorenni = utenti.filter((utente) => (utente.age < 18));
console.log(minorenni);

const over65 = utenti.filter((utente) => (utente.age > 65));
console.log(over65);