//  Récupération des éléments HTML nécessaires pour la gesion des peintres et de leurs peintures.

const navLinks = document.querySelectorAll(".nav__link");
const subtitlePaint = document.querySelector(".subtitle__h2_Paint");
const naissanceDeces = document.querySelector(".naissanceDeces");
const gridTableaux = document.querySelector(".gridTableaux");

//  Information sur les Peintres (Prénom, nom, date de naissance, date de décès, direction pour récupéré les tableaux).

const peintres = {
    Picasso: {
        dates: "(25 Octobre 1881 - 8 Avril 1973)",
        tabeaux: [
            "Assets/Images/PabloPicasso/Autoportrait_Picasso.png",
            "Assets/Images/PabloPicasso/Demoiselle_Avignon.png",
            "Assets/Images/PabloPicasso/Femme_qui_pleure.png",
            "Assets/Images/PabloPicasso/gernica.png",
            "Assets/Images/PabloPicasso/Le_peintre_et_son_modele.png",
            "Assets/Images/PabloPicasso/Marie_Therese.png",
        ],
    },
    Monet: {
        dates: "(14 Novembre 1840 - 5 Décembre 1926)",
        tableaux: [
            "Assets/Images/ClaudeMonet/Impression_soleil_levant-1872.png",
            "Assets/Images/ClaudeMonet/La_Promenade.png",
            "Assets/Images/ClaudeMonet/Le_déjeuner-1873.png",
            "Assets/Images/ClaudeMonet/Les_Coquelicots.png",
            "Assets/Images/ClaudeMonet/Madame_Monet_et_Enfant-1875.png",
            "Assets/Images/ClaudeMonet/Nymphéas-1916.png",
        ],
    },
    Caillebotte: {
        dates: "(19 Août 1848 - 21 Février 1894)",
        tableaux: [
            "Assets/Images/GustaveCaillebotte/Autoportrait_Caillebotte.png",
            "Assets/Images/GustaveCaillebotte/Jour_de_pluie_à_Paris.png",
            "Assets/Images/GustaveCaillebotte/Peintres_en_batiment.png",
            "Assets/Images/GustaveCaillebotte/Perissoires_sur_l'Yerres.png",
            "Assets/Images/GustaveCaillebotte/Raboteur_de_parquet.png",
        ],
    },
    Vermeer: {
        dates: "(31 Octobre 1632 - 15 Décembre 1675)",
        tabeaux: [
            "Assets/Images/JohannesVermeer/fille_a_la_perle.png",
            "Assets/Images/JohannesVermeer/La_laitière.png",
            "Assets/Images/JohannesVermeer/La_liseuse_à_la_fenêtre.png",
        ],
    },
    Van_Gogh: {
        dates: "(30 Mars 1853 - 29 Juillet 1890)",
        tabeaux: [
            "Assets/Images/VincentVanGogh/Campagne_Montagneuse-1889.jpg",
            "Assets/Images/VincentVanGogh/La_Chambre_de_vn_gogh-1889.png",
            "Assets/Images/VincentVanGogh/La_nuit_Etoilee-1889.png",
            "Assets/Images/VincentVanGogh/La_sieste.png",
            "Assets/Images/VincentVanGogh/Les_Iris-1889.png",
            "Assets/Images/VincentVanGogh/Terrasse_café.png",
        ],
    },
    Kandinsky: {
        dates: "(16 Décembre 1866 - 13 Décembre 1944)",
        tabeaux: [
            "Assets/Images/WassilyKandinsky/Compostion_VI-1913.png",
            "Assets/Images/WassilyKandinsky/Compostion_X-1939.png",
            "Assets/Images/WassilyKandinsky/Jaune_rouge_bleu.png",
            "Assets/Images/WassilyKandinsky/Moscou-1916.png",
            "Assets/Images/WassilyKandinsky/Noir-et-violet-1923.png",
            "Assets/Images/WassilyKandinsky/tableau-en-bleu-1925.png",
        ],
    },
};

//  Gestionnaire d'évènement pour les liens du menu.

navLinks.forEach((link) => {
    link.addEventListener("click", (event) =>{
        event.preventDefault(); //  Cela empêche le comportement par défaut.

        const peintreId = link.id;
        console.log(peintreId);

        if(peintres[peintreId]) {
            //  Mise à jour du nom du peintre selon le choix effectuer dans le menu.
            subtitlePaint.textContent = `Galerie ${peintreId}`;
            //  Supprime le "_" dans le nom de "Van_Gogh" pour le remplacer par un " ".
            subtitlePaint.textContent = subtitlePaint.textContent.replace(/_/g, " ");
            
            //  Mise à jour automatique de la date de naissance et de décès en fonction du nom du peintre selon le choix effectuer dans le menu.
            naissanceDeces.textContent = peintres[peintreId].dates;
            
            //  Mise à jour automatique des tableau en fonction du nom du peintre selon le choix effectuer dans le menu.
            gridTableaux.innerHTML = ""; // Cela réinitialise entièrement la galerie ou la vide au cas ou elle a été agrémenter précédament.
            const tableaux = peintres[peintreId].tabeaux;

        
            tableaux.forEach((tableaux, index) => {
                const img = document.createElement("img");
                img.src = tableaux; //  envoi la recherche dans le Array (tableaux).
                img.alt = `Tableau de ${peintreId}`;
                img.classList.add("galeryImage");

                //  Ajouter l'image à la dernière ligne.
                const lastRow = gridTableaux.lastChild;
                lastRow.appendChild(img);
            });
        }
    });
});

//  Récupération des éléments HTML nécessaires pour le menu burger.

const burgerIcon = document.querySelector(".icon__burger");
const primaryList = document.querySelector(".primary__list");

//  Fonction pour afficher ou masquer les liens du menu principale.

function toggleMenu() {
    // Contrôle pour savoir si le menu principale est déjà afficher ou non.
    if(primaryList.Style.display === "flex") {
        // Masquer le menu principale.
        primaryList.Style.display = "none";
    } else {
        // Affiche le menu principale.
        primaryList.Style.display = "flex";
        primaryList.Style.flexDirection = "column";
        primaryList.Style.alignItems = "flex-start";
        primaryList.Style.paddingLeft = "60px";
    }
}

//  Ajoute un gesionnaire d'élément pour l'icône burger.

burgerIcon.addEventListener("click", toggleMenu);

//  Fonction pour gérer l'affichage des éléments selon la taille de l'écran qu'utilise l'utilisateur.
function handleResize() {
    if (window.innerWidth > 768) {
        //  Réinitialise le style pour le écran plus larges que 768px.
        primaryList.Style.display = "flex";
        primaryList.Style.flexDirection = "row";
        primaryList.Style.alignItems = "center";
        primaryList.Style.paddingLeft = "0";
    }
}

//  Appel la fonction handleResize au chargement de la page et lors du redimensionnement de la page en fonction de l'écran de l'utilisateur.

window.addEventListener("resize", handleResize);
handleResize();