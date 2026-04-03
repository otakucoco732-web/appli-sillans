// //Variables
// let maVar = "La valeur" //valeur qui change
// const maConst = "Autre valeur" //ne changera jamais

// // Structure conditionnelles
// //if (condition et condition ou (condition et condition))
// if(maVar == "titi"){
//     console.log("C'est ok")
// } else if(maVar == "La valeur"){
//     console.log("Autre cas")
// } else {
//     console.log("Tant pis")
// }

// switch(maVar){
//     case "titi":
//         console.log("C'est ok")
//     break;
//     case "La valeur":
//         console.log("Autre cas")
//     break;
//     default:
//         console.log("Tant pis")
// }

// Ternaire : if else condensé
// qui a pour objectif d'attibuer une valeur à une variable
// variable = (condition) ? valeur si vrai : valeur si faux
const age = 12
const information = age >= 18 ? "Majeur" : "Mineur"

// // Boucles
// for(let i = 0; i<100; i+2){
//     console.log("Nombres pairs :" +i)
// }

// const h1 = document.querySelector('h1')
// h1.innerHTML = "HELLLOOOOOOO"
// h1.textContent = "Miaou"

const article = `
        <article>
            <h2>Titre</h2>
            <div>
                <div>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                    </ul>
                </div>
            </div>
        </article>`

document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("afterbegin", article)

const h1 = document.querySelector("h1")
let count = 0
const title = h1.textContent
h1.addEventListener('click',()=>{
    count++
    h1.textContent = `${title} ${count}`
})

// localStorage.setItem("clé", valeur au format STRING)
localStorage.setItem('prenom', "Coralie")
// localStorage.getItem("clé")
const prenom = localStorage.getItem('prenom')
console.log(prenom)

const person = {
    prenom :"Coralie",
    nom: "Meyer",
    age: 19
}

const strPerson = JSON.stringify(person)

localStorage.setItem('person', strPerson)

const parsePerson = JSON.parse(localStorage.getItem('person1'))

const fruits = ["tomate", "pomme", "banane", "orange"]

const ul = document.querySelector('ul')

fruits.forEach((fruit) => {
    ul.insertAdjacentHTML("afterbegin", `<li> ${fruit} </li>`)
})

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    // el.addEventListener('click', () =>{
    //     console.log(this.DataTransferItem.id)
    // })
    button.addEventListener('click', (el) => {
        const id = el.target.dataset.id
        document.querySelector("body > section:nth-child(3) > p")
        .textContent = `Tu as cliqué sur ${id}`
    })
})