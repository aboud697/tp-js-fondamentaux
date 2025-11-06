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
console.log("Je m'appelle Abdllah Jaouad.")
