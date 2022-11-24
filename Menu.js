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
            let li = document.createElement("li");
            li.innerText = index;
            // Ajout de l'evénement
            // const event = new CustomEvent('menu_click', {
            //     detail: {
            //         index: index
            //     }
            // });
            // On diffuse l'évènement            
            // li.dispatchEvent(event);

            // li.setAttribute('onclick','eventClicked('+index+')');
            // li.setAttribute.onclick = function() { eventClicked(index); };
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
    // console.log('Cliqué sur '+index);
    // On diffuse l'évènement    
    listeDev.dispatchEvent(event);
}
const out = document.getElementById('content');

let labels = ["Accueil", "Produits", "Contact"]; 
let menu = new Menu(labels);
let menuObj = menu.getObjDOM(); 
// menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${labels[evt.detail.index]}`)); 
// menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${labels}`)); 
menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${[evt.detail.index]}`)); 

// menuObj.addEventListener('menu_click', evt => console.log('TAREUS')); 

out.appendChild(menuObj);

