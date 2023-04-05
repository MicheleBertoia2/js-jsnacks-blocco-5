/*
*SNACK 4*
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
Questo è l’elenco degli studenti:
Id  Name                             Grades
213 Marco della Rovere    78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini           74
196 Luigi Grimaldello 	    68
102 Piero della Francesca 50
120 Francesca da Polenta  84
*/

const studenti = [
  
  {
    id : 213,
    name : 'Marco della Rovere',
    grades: 78,
  },

  {
    id : 110,
    name : 'Paola Cortellessa',
    grades: 96,
  },

  {
    id : 250,
    name : 'Andrea Mantegna',
    grades: 48,
  },

  {
    id : 145,
    name : 'Gaia Borromini',
    grades: 74,
  },

  {
    id : 196,
    name : 'Luigi Grimaldello',
    grades: 68,
  },

  {
    id : 102,
    name : 'Piero della Francesca',
    grades: 50,
  },

  {
    id : 120,
    name : 'Francesca da Polenta',
    grades: 84,
  },
]

//1.
const studentiUp = studenti.map((studente) => studente.name.toUpperCase());
console.log('studentiUp', studentiUp);

//2.
const studentiGradeOver70 = studenti.filter((studente) => studente.grades >= 70)
console.log('studentiGradeOver70', studentiGradeOver70);

//3.
const studentiGradeOver70Id120 = studenti.filter((studente) => studente.grades >= 70 && studente.id >= 120);
console.log('studentiGradeOver70Id120', studentiGradeOver70Id120);