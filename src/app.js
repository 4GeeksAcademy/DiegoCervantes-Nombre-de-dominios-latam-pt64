import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function DomainGeneretor () {let pronoun = ['the', 'our', 'hola'];
let adj = ['great', 'big', 'miracle'];
let noun = ['jogger', 'racoon', 'grandioso'];
let terminacion = ['.com', '.net', 'algo']
let Generador = []
for ( let i = 0; i < pronoun.length; i++){
  for (let k = 0; k < adj.length; k++){
    for (let j = 0; j < noun.length; j++){
      for (let h = 0; h < terminacion.length; h++){
        Generador.push(pronoun[i] + adj[k] + noun[j] + terminacion[h])
      }
    }
  }
}
return Generador
}
console.log(DomainGeneretor());

window.onload = function () {
  //write your code here
};