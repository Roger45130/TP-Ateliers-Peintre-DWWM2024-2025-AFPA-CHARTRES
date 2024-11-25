// Récupération des éléments HTML nécessaires pour la gestion des peintres et de leurs peintures.

const navLinks = document.querySelectorAll(".nav__link");
const subtitlePaint = document.querySelector(".subtitle__h2_Paint");
const naissanceDeces = document.querySelector(".naissanceDeces");
const gridTableaux = document.querySelector(".gridTableaux");
const galeryPaint = document.querySelector(".galeryPaint");

// Informations sur les Peintres (Nom, dates, chemins des tableaux).
const peintres = {
    Picasso: {
        dates: "(25 Octobre 1881 - 8 Avril 1973)",
        tableaux: [
            "Assets/Images/PabloPicasso/Autoportrait_Picasso.png",
            "Assets/Images/PabloPicasso/Demoiselles_Avignon.png",
            "Assets/Images/PabloPicasso/Femme_qui_pleure.png",
            "Assets/Images/PabloPicasso/guernica.png",
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
            "Assets/Images/GustaveCaillebotte/Perissoires_sur_l_Yerres.png",
            "Assets/Images/GustaveCaillebotte/Raboteurs_de_parquet.png",
        ],
    },
    Vermeer: {
        dates: "(31 Octobre 1632 - 15 Décembre 1675)",
        tableaux: [
            "Assets/Images/JohannesVermeer/fille_a_la-perle.png",
            "Assets/Images/JohannesVermeer/La_laitière.png",
            "Assets/Images/JohannesVermeer/La_liseuse_à_la_fenêtre.png",
        ],
    },
    Van_Gogh: {
        dates: "(30 Mars 1853 - 29 Juillet 1890)",
        tableaux: [
            "Assets/Images/VincentVanGogh/Campagne_Montagneuse-1889.jpg",
            "Assets/Images/VincentVanGogh/La_Chambre_de_van_gogh-1889.png",
            "Assets/Images/VincentVanGogh/La_nuit_Etoilee-1889.png",
            "Assets/Images/VincentVanGogh/La_sieste.png",
            "Assets/Images/VincentVanGogh/Les_Iris-1889.png",
            "Assets/Images/VincentVanGogh/Terrasse_café.png",
        ],
    },
    Kandinsky: {
        dates: "(16 Décembre 1866 - 13 Décembre 1944)",
        tableaux: [
            "Assets/Images/WassilyKandinsky/Composition-VI-1913.png",
            "Assets/Images/WassilyKandinsky/Composition-1939.png",
            "Assets/Images/WassilyKandinsky/Jaune_rouge_bleu.png",
            "Assets/Images/WassilyKandinsky/Moscou-1916.png",
            "Assets/Images/WassilyKandinsky/Noir-et-violet-1923.png",
            "Assets/Images/WassilyKandinsky/tableau-en-bleu-1925.png",
        ],
    },
};

// Gestionnaire d'événements pour les liens du menu.
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien.

        const peintreId = link.id;

        if (peintres[peintreId]) {
            // Mise à jour du titre avec le nom du peintre sélectionné.
            subtitlePaint.textContent = `Galerie ${peintreId}`;
            subtitlePaint.textContent = subtitlePaint.textContent.replace(/_/g, " ");

            // Mise à jour des dates de naissance et décès.
            naissanceDeces.textContent = peintres[peintreId].dates;

            // Mise à jour de la galerie avec les tableaux.
            gridTableaux.innerHTML = ""; // Vide la galerie existante.
            const tableaux = peintres[peintreId].tableaux;

            tableaux.forEach((tableau) => {
                const img = document.createElement("img");
                img.src = tableau; // Chemin de l'image.
                img.alt = `Tableau de ${peintreId}`;
                img.classList.add("galeryImage");

                gridTableaux.appendChild(img);
            });

            // Appliquer l'animation après le chargement des images.
            applyBounceAnimation();
        }
    });
});

// Fonction pour appliquer l'animation de chute et rebond.
function applyBounceAnimation() {
    const animationContainer = document.querySelector(".animation");

    if (animationContainer) {
        const images = animationContainer.querySelectorAll(".galeryImage");

        images.forEach((image, index) => {
            // Ajoute un délai pour que les vignettes s'animent une par une.
            image.style.animationDelay = `${index * 0.25}s`;

            // Ajoute une classe d'animation à chaque vignette.
            image.classList.add("bounce-fall");
        });
    }
}

// Récupération des éléments pour le menu burger.
const burgerIcon = document.querySelector(".icon__burger");
const primaryList = document.querySelector(".primary__list");

// Fonction pour afficher ou masquer les liens du menu principal.
function toggleMenu() {
    if (primaryList.style.display === "flex") {
        primaryList.style.display = "none";
    } else {
        primaryList.style.display = "flex";
        primaryList.style.flexDirection = "column";
        primaryList.style.alignItems = "flex-start";
        primaryList.style.paddingLeft = "60px";
    }
}

// Gestionnaire d'événements pour l'icône du menu burger.
burgerIcon.addEventListener("click", toggleMenu);

// Fonction pour gérer l'affichage des éléments selon la taille de l'écran.
function handleResize() {
    if (window.innerWidth > 768) {
        // Réinitialise le style pour les écrans plus larges que 768px.
        primaryList.style.display = "flex";
        primaryList.style.flexDirection = "row";
        primaryList.style.alignItems = "center";
        primaryList.style.paddingLeft = "0";
    } else {
        primaryList.style.display = "none";
    }
}

// Appelle la fonction handleResize au chargement de la page et lors du redimensionnement.
window.addEventListener("resize", handleResize);
handleResize();