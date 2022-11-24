// Création du composant Menu
class Menu {
    labels;
    esp;
    disp
    // Ajout du constructeur
    constructor(labels = [], esp = 20, disp = 0) {
       this.labels = labels;
    }
    // Création de la méthode
    getObjDOM(){
        // Création de la liste 
        var HTMLUListElement = document.createElement("ul");
        HTMLUListElement.setAttribute('id', 'listeItem');

        // Ajout des items dans la liste
        labels.forEach(index => {
            // Création de l'item de la liste
            let li = document.createElement("li");
            // Ajout du texte dans l'item
            li.innerText = index;
            // Ajout du gestion de click sur l'item
            li.onclick = function() {  
                eventClicked(index); 
            };  
            // Ajout de l'item dans la liste
            HTMLUListElement.appendChild(li);
        });
        //Renvoie la liste d'élément encapsulé
        return HTMLUListElement;
    } 
}
// Gestion du clique sur un item
function eventClicked(index){   
    // Ajout de l'evénement
    const event = new CustomEvent('menu_click', {
        detail: {
            index: index
        }
    });
    var listeDev = document.getElementById('listeItem');
    // On diffuse l'évènement    
    listeDev.dispatchEvent(event);
}
const out = document.getElementById('content');

let labels = ["Accueil", "Produits", "Contact"]; 
let menu = new Menu(labels);
let menuObj = menu.getObjDOM(); 
// menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${labels[evt.detail.index]}`));  
menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${[evt.detail.index]}`)); 
out.appendChild(menuObj);