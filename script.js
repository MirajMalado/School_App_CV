//SUPABASE///

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTIwOTc0NiwiZXhwIjoxOTU2Nzg1NzQ2fQ.xSrL7QLUOh34mOvkA5-CoBsU7jCfphnFepRI_C4iXC8"

const API_URL = "https://pkuusneffrezojrampxk.supabase.co/rest/v1/SchoolAP"

//Declaration 
const buttonEL = document.getElementById('btn-suggestion')
const formEL = document. getElementById ('form')
const nameEL = document. getElementById ('nom')
const prenomEL = document. getElementById ('prenom')
const bioEL = document. getElementById ('exampleFormControlTextarea1')
const levelEL = document. getElementById ('level')
const valider = document.querySelector ('#btn-suggestion')
const saveEL = document. getElementById ('saveEL')
const CompetEL = document.getElementById ('competences')
const mainList = document.getElementById('mainList')
const mainContent = document.getElementById('main_content')
console.log(saveEL)

const APPRENANTS = []

let inputSuggestion = document.querySelector('#exampleFormControlTextarea1')


//LES  FONCTIONS 



//Insertion carte au niveau du DOM//
buttonEL.addEventListener('click', (e)=>{
    let apprenant = {prenom:prenomEL.value,
    nom:nameEL.value,
    bio:bioEL.value,
    level:levelEL.value,
    competences:CompetEL.value,
    }
    const idSup = 'supprimer-'+apprenant.prenom
    const idModif = 'modifier-'+apprenant.prenom
    alert('Vos Données ont été ajoutées')
    console.log (e)
    const ajouter_List = document. getElementById ('ajout_List')

APPRENANTS.push(apprenant)
    ajouter_List.insertAdjacentHTML(
        "afterbegin", 
        `
        <div class="card w-75 mt-5">
        <h3> Profil de l'apprenant </h3>
        <div class= "text-end" >
        <i class="bi bi-pen" id="${idModif}"></i>
        <i class="bi bi-archive" id="${idSup}"></i>
        </div>
                    <div class="card-body">
                      <h5 class="card-title"> ${apprenant.prenom} ${apprenant.nom} <br>${apprenant.level} <br></h5>
                      <p class="card-text">${apprenant.bio}</p>
                    </div>
                  </div>
        
        `
    
    )
console.log(APPRENANTS)
const modifEl = document.getElementById(idModif)
const suppEL = document.getElementById(idSup)
console.log(modifEl,suppEL);
modifEl.addEventListener('click', ()=>{
  alert('Modification')
})
suppEL.addEventListener('click',()=>{
  alert('Supprimer')
})
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
saveEL.addEventListener('click',()=>{
  alert('Vos Données ont été sauvegardées')
  mainContent.classList.add('d-none')
  mainList.classList.remove('d-none')
  APPRENANTS.forEach(apprenant=>{
fetch(
    API_URL,{
      method:'POST',
      headers:{
        apikey:API_KEY, 'Content-Type':'application/json'
      },
      body:JSON.stringify(apprenant)
    }
  )
  })
  
}) 

//Ajout de la carte d'affichage des derails//

    