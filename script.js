//Variables
let maVar = "La valeur" //valeur qui change
const maConst = "Autre valeur" //ne changera jamais

// Structure conditionnelles
//if (condition et condition ou (condition et condition))
if(maVar == "titi"){
    console.log("C'est ok")
} else if(maVar == "La valeur"){
    console.log("Autre cas")
} else {
    console.log("Tant pis")
}

switch(maVar){
    case "titi":
        console.log("C'est ok")
    break;
    case "La valeur":
        console.log("Autre cas")
    break;
    default:
        console.log("Tant pis")
}

// Boucles
for(let i = 0; i<100; i+2){
    console.log("Nombres pairs :" +i)
}

// Fonctions

// Classes
