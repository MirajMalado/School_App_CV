//SUPABASE///

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE3NDIxNSwiZXhwIjoxOTU1NzUwMjE1fQ.opmzyMhA3rVnuQFo31eGgT-KVY9gN-N-WvjYei4j-DA"

const API_URL = "https://jywhypiqmujlrmbbfehm.supabase.co/rest/v1/School_App"

//Declaration 
const buttonEL = document.getElementById('btn-suggestion')
const formEL = document. getElementById ('form')
const nameEL = document. getElementById ('nom')
const prenomEL = document. getElementById ('prenom')
const bioEL = document. getElementById ('exampleFormControlTextarea1')
const levelEL = document. getElementById ('level')
const valider = document.querySelector ('#btn-suggestion')
const saveEL = document. getElementById ('saveEL')
const suppEL = document. getElementById ('supp')
const modifEL = document. getElementById ('modif')

let inputSuggestion = document.querySelector('#exampleFormControlTextarea1')


//LES  FONCTIONS 



//Insertion carte au niveau du DOM//
buttonEL.addEventListener('click', (e)=>{
    console.log (e)
    const ajouter_List = document. getElementById ('ajout_List')

    ajouter_List.insertAdjacentHTML(
        "afterbegin", 
        `
        <div class="card w-75 mt-5">
        <h3> Profil de l'apprenant </h3>
        <div class= "text-end" >
        <i class="bi bi-pen" id="modif"></i>
        <i class="bi bi-archive" id="supp"></i>
        </div>
                    <div class="card-body">
                      <h5 class="card-title"> ${prenomEL.value} ${nameEL.value} <br>${levelEL.value}</h5>
                      <p class="card-text">${bioEL.value}</p>
                    </div>
                  </div>
        
        `
    
    )


});


//ENVOI DES DONNEES VERS LE SUPABASE



// VERIFICATION DES MOTS SAISIS
inputSuggestion.addEventListener("input", (event) => {
    const longueurMax = 130
    const contenuSaisi = inputSuggestion.value
    const longueurSaisi = contenuSaisi.length
    const reste = longueurMax - longueurSaisi
  
    //AFFICHAGE DES NOMBRES DE SAISIE
    const paragraphCompteur = document.getElementById("limite-text")
    const compteurText = document.getElementById("text-progress")
    const restantText = document.getElementById("text-restant")
    const btnSuggestion = document.getElementById("btn-suggestion")
    compteurText.textContent = longueurSaisi
    restantText.textContent = " Il vous reste " + reste
  
     //CHANGEMENT DE COULEUR EN CAS DE DEPASSEMENT DE LA SAISIE. 

  if (reste < 0) {
    paragraphCompteur.style.color = "#ce0033"
    btnSuggestion.disabled = true
  } else if (reste <= 16) {
    paragraphCompteur.style.color = "yellow"
    btnSuggestion.disabled = false
  } else {
    paragraphCompteur.style.color = "#00000"
    btnSuggestion.disabled = false
  }
})

//Bouton supprrimer et modifier//


//ECOUTER LE BOUTON SAUVEGARDER//
saveEL.addEventListener('click')