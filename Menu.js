/* ----------------------------------------------------------------
    Création du composant Menu
------------------------------------------------------------------- */
class Menu {
    labels;
    esp;
    disp
    // Ajout du constructeur
    constructor(labels = [], esp = 20, disp = 0) {
        this.labels = labels;
        this.esp = esp;
        this.disp = disp;
    }
    /* ----------------------------------------------------------------
        Méthode qui de créée la liste
    ------------------------------------------------------------------- */
    getObjDOM() {
        return createListe();
    }
    /* ----------------------------------------------------------------
        Méthode qui modifie l’espacement entre les items.
    ------------------------------------------------------------------- */
    setEsp(espCall) {
        var menuListe = document.getElementById('listeItem');
        menuListe.style.columnGap = espCall + "px";
        menuListe.style.rowGap = espCall + "px";
        return this;
    }
    /* ----------------------------------------------------------------
        Méthode qui définie l'orientation du menu.
    ------------------------------------------------------------------- */
    setDisp(dispCall) {
        // 
        var menuListe = document.getElementById('listeItem');
        if (dispCall == 0) {
            menuListe.style.flexDirection = "row";
        } else if (dispCall == 1) {
            menuListe.style.flexDirection = "column";
        }
        return this;
    }
    /* ----------------------------------------------------------------
        Méthode qui ajoute un item à la suite des autres.
    ------------------------------------------------------------------- */
    addItem(label) {
        labels.push(label);
        var menuListe = document.getElementById('listeItem');
        console.log(labels);
    }
}
const out = document.getElementById('content');
/* ----------------------------------------------------------------
    Vérification du fonctionnement du composant Menu
------------------------------------------------------------------- */
let labels = ["Accueil", "Produits", "Contact"];
let menu = new Menu(labels);
let menuObj = menu.getObjDOM();
console.log(menuObj);
// menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${labels[evt.detail.index]}`));  
menuObj.addEventListener('menu_click', evt => console.log(`Clic sur ${[evt.detail.index]}`));
out.appendChild(menuObj);
setTimeout(() => menu.setEsp(100).setDisp(1).addItem('Test'), 5000);
/* ----------------------------------------------------------------
    Fonction qui crée la liste
------------------------------------------------------------------- */
function createListe() {
    console.log('createListe appeler');
    // Création de la liste 
    var HTMLUListElement = document.createElement("ul");
    HTMLUListElement.setAttribute('id', 'listeItem');
    HTMLUListElement.style.listStyle = "none";
    HTMLUListElement.style.display = "flex";
    // Ajout des items dans la liste
    labels.forEach(index => {
        // Création de l'item de la liste
        let li = document.createElement("li");
        // Ajout du texte dans l'item   
        li.innerText = index;
        // Ajout du gestion de click sur l'item
        li.onclick = function () {
            eventClicked(index);
        };
        // Ajout de l'item dans la liste
        HTMLUListElement.appendChild(li);
    });
    var navContainer = document.querySelector(".navMenu");
    navContainer.appendChild(HTMLUListElement);
    //Renvoie la liste d'élément encapsulé
    return HTMLUListElement;
}

/* ----------------------------------------------------------------
    Fonction qui gere le clique sur un item
------------------------------------------------------------------- */
function eventClicked(index) {
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