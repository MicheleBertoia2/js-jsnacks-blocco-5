/*
*SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
  
  {
    name : 'Graziella',
    peso : 10,
  },

  {
    name : 'Velociraptor',
    peso : 4,
  },

  {
    name : 'Atala',
    peso : 7,
  },

  {
    name : 'Chonk',
    peso : 15,
  },

  {
    name : 'BiciDaCorsaSuperLeggera',
    peso : 3,
  },
]

const bikesOrdered = bikes.sort(function(a, b){return a.peso-b.peso})
// console.log(bikesOrdered);
const {name, peso} = bikes[0];
// console.log(name, peso, bikes[0]);
const message = `La bici da corsa più leggera è la ${name} con un peso di ${peso}kg`
console.log(message);
