console.log("Laboratoire prêt !");

const nom = "Abdallah Jaouad";
let age = 16;

console.log(nom)
  console.log(age)

  const motDePasseAttendu = "secret123";
  let motDePasseUtilisateur = "secret123"

  if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");

} else if (motDePasseUtilisateur < 8){
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");

} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Abdallah",
    nom: "Jaouad",
    age: 16,
    competences: ["HTML", "CSS"]
};

console.log(moi);
console.log("Je m'appelle " + moi.prenom + " " + moi.nom)

const notes = [12, 15, 9, 18];

console.log(notes[0]);
console.log(notes.length);

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 19},
    { prenom: 'Louise', age: 17 }
]

for (let i = 0; i < classe.length; i++) {
    if (classe[i].age >= 18) {
    console.log(classe[i].prenom + " est majeur");
} else {
    console.log(classe[i].prenom + " est mineur");
}
}
const prenom = "Alice"

function saluer (prenom) {
    const message = "Bonjour " + prenom;
    return message;
}

// On "appelle" la fonction
const salutationPourAlice = saluer("Alice");
console.log(salutationPourAlice); // Affiche "Bonjour Alice"


const estMajeur = (age) => age >=18