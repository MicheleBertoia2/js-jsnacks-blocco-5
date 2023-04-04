/*
jSnack 2
Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti
*** BONUS
Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome
*/

const studenti = [
  
  {
    firstname : 'Gianni',
    lastname  : 'Fagianni',
    matricola : 54, 
    voti      : [ 6,7,8,5 ]
  },

  {
    firstname : 'Giannina',
    lastname  : 'Fagianna',
    matricola : 15, 
    voti      : [ 10,8,9,9 ]
  },

  {
    firstname : 'Mario',
    lastname  : 'Merola',
    matricola : 67, 
    voti      : [ 6,6,6,6 ]
  },

  {
    firstname : 'Siamo',
    lastname  : 'Carichi',
    matricola : 30, 
    voti      : [ 6,7,6,5 ]
  },

  {
    firstname : 'Dominic',
    lastname  : 'Toretto',
    matricola : 17, 
    voti      : [ 8,8,8,8 ]
  },

  {
    firstname : 'Luca',
    lastname  : 'Abete',
    matricola : 70, 
    voti      : [ 7,7,8,4 ]
  },
]

const studentiNuovo = studenti.map((studente, voti) => {
  const object = {
    completeName : `${studente.firstname} ${studente.lastname}`,
    matricola : studente.matricola,
    mediaVoto : mediaVoti(studente.voti),
  }
  return object;
})

console.log(studentiNuovo);

//BONUS

const studentiOrdered = studenti.sort((a, b) => a.lastname.localeCompare(b.lastname));
console.log(studentiOrdered);

const containerStudenti = document.querySelector('.row');

studentiOrdered.forEach((studente) => {
  const {firstname, lastname, matricola, voti} = studente;
  const card =`
  <div class="col-md-4 mb-5">
    <div class="card h-100">
      <img src="img/matricola${matricola}.webp" class="h-100" alt="${firstname} ${lastname}">
      <h3>${lastname} ${firstname}</h3>
      <p>Media Voti: ${mediaVoti(voti)}</p>
    </div>
  </div>
  `
  containerStudenti.innerHTML += card
})


//----------------functions---------


function mediaVoti (voti){
  let somma = 0
  for (let voto of voti){
    somma += voto;
  }

  const media = (somma / voti.length).toFixed(2);
  return media;
}