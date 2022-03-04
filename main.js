// Déclaration de fonctions utilitaires
function validerNomPropre(strNomPropre) {
    let blnValide = true;

    if(strNomPropre.length >= 3 && strNomPropre.charAt(0) == strNomPropre.charAt(0).toUpperCase()){
        blnValide = true;
    }else {
        blnValide = false;    
    }
    return blnValide;
}


// Déclaration d'objets

const objMessagesErreur = {
    prenom : 'Le prénom doit avoir au moins trois caractères et débuter par une majuscule.',
    nom : 'Le nom doit avoir au moins trois caractères et débuter par une majuscule.',
    niveauScolaire: 'Le niveau scolaire est requis.',
    accompagnement: 'Le niveau d\'accompagnement est requis.'
};

const jeu = {
    /**
     * Fonction pour faire la validation de toute les méthodes de validation
     */
    validerFormulaireInscription: function () {
       const blnValiderPrenom = this.validerPrenom();
       const blnValiderNom = this.validerNom();
       const blnValiderNiveauScolaire = this.validerNiveauScolaire();
       const blnValiderAccompagnement = this.validerAccompagnement();

       if ( blnValiderPrenom == true && blnValiderNom == true && blnValiderNiveauScolaire == true && blnValiderAccompagnement == true)  {
            document.querySelector('#sectionInscription').classList.add('cacher');
            document.querySelector('#sectionEnigmes').classList.remove('cacher');    
            this.initialiserEnigmes();
        }
    },

    /**
     * Validation si le prénom respecte les critères de 3 lettres et une lettre majuscule
     * @returns Retourne vrai lorsque le prénom est valide
     */
    validerPrenom: function () {
        let blnValide = true;

        if(validerNomPropre(document.getElementById('champPrenom').value) == false){
            document.getElementById('erreurPrenom').innerHTML = objMessagesErreur.prenom;
        }else {
            document.getElementById('erreurPrenom').innerHTML = "";
        }
        return blnValide;
    },

    /**
     * Validation si le nom respecte les critères de 3 lettres et une lettre majuscule
     * @returns Retourne vrai lorsque le nom est valide
     */
    validerNom: function () {
        let blnValide = true;

        if(validerNomPropre(document.getElementById('champNom').value) == false){
            document.getElementById('erreurNom').innerHTML = objMessagesErreur.nom;
        }else {
            document.getElementById('erreurNom').innerHTML = "";
        }
        return blnValide;
    },

    /**
     * Fonction valider si un niveau scolaire a été choisi
     * @returns Retourne vrai lorsque le niveau scolaire est valide
     */
    validerNiveauScolaire: function () {
        let blnValide = true;
        const refChoixNivScolaire = document.getElementById('choixNiveauScolaire').value;
        if( refChoixNivScolaire == 0){
            document.getElementById('erreurNiveauScolaire').innerHTML = objMessagesErreur.niveauScolaire;
        } else {
            document.getElementById('erreurNiveauScolaire').innerHTML = "";
        }
        return blnValide;
    },

    /**
     * Fonction valider si les cases d'accompagnement sont cochés
     * @returns Retourne vrai lorsque le niveau d'accompagnement est valide
     */
    validerAccompagnement: function () {
        let blnValide = true;
        const refAccompagnement = document.querySelector('[name=accompagnement]:checked');
        // À compléter
        console.log(document.querySelector('[name=accompagnement]:checked'));
        if (refAccompagnement == null){
            document.getElementById('erreurAccompagnement').innerHTML = objMessagesErreur.accompagnement;
        }
        return blnValide;
    },

    /**
     * Fonction pour initialiser les énigmes
     */
    initialiserEnigmes: function () {
        console.log('initialiserEnigmes');
    },
};

// Déclaration des écouteurs d'événements
document.querySelector('form').addEventListener('submit', function (objEvenement) {
    objEvenement.preventDefault();
});

document.querySelector('#boutonCommencer').addEventListener('click', function(objEvenement){
    jeu.validerFormulaireInscription();
});
