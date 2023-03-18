// Variables globales
let operateur = '';
let nombre1 = '';
let nombre2 = '';

// Fonction pour ajouter un chiffre
function ajouterChiffre(chiffre) {
  if (operateur === '') {
    nombre1 += chiffre;
    document.getElementById('resultat').value = nombre1;
  } else {
    nombre2 += chiffre;
    document.getElementById('resultat').value = nombre2;
  }
}

// Fonction pour ajouter un opérateur
function ajouterOperateur(op) {
  operateur = op;
}

// Fonction pour effacer l'écran
function effacer() {
  operateur = '';
  nombre1 = '';
  nombre2 = '';
  document.getElementById('resultat').value = '';
}

// Fonction pour calculer le résultat
function calculer() {
  let resultat;
  switch (operateur) {
    case '+':
      resultat = parseInt(nombre1) + parseInt(nombre2);
      break;
    case '-':
      resultat = parseInt(nombre1) - parseInt(nombre2);
      break;
    case '*':
      resultat = parseInt(nombre1) * parseInt(nombre2);
      break;
    case '/':
      resultat = parseInt(nombre1) / parseInt(nombre2);
      break;
    default:
      break;
  }
  document.getElementById('resultat').value = resultat;
}
