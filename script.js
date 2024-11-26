// Récupération des éléments HTML nécessaires pour la gestion des peintres et du menu burger.
const navLinks = document.querySelectorAll(".nav__link");
const subtitlePaint = document.querySelector(".subtitle__h2_Paint");
const naissanceDeces = document.querySelector(".naissanceDeces");
const gridTableaux = document.querySelector(".gridTableaux");
const galeryPaint = document.querySelector(".galeryPaint");
const burgerIcon = document.querySelector(".icon__burger");
const primaryList = document.querySelector(".primary__list");
const animationContainer = document.querySelector(".animation");

// Informations sur les peintres (Nom, dates, chemins des tableaux).
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

      // Lancer l'animation des éléments.
      applyBounceAnimation();
    }
  });
});

// Fonction pour appliquer l'animation de chute et rebond.
function applyBounceAnimation() {
  // Ajoute la classe d'animation pour chaque élément dans l'animation container.
  subtitlePaint.classList.add("bounce-fall");
  naissanceDeces.classList.add("bounce-fall");
  gridTableaux.classList.add("bounce-fall");

  // Supprime la classe après l'animation pour permettre de relancer l'animation.
  setTimeout(() => {
    subtitlePaint.classList.remove("bounce-fall");
    naissanceDeces.classList.remove("bounce-fall");
    gridTableaux.classList.remove("bounce-fall");
  }, 2500); // Durée de l'animation définie dans le CSS (2,5 secondes).
}

// Fonction pour afficher ou masquer les liens du menu principal (Burger Menu).
function toggleMenu() {
  primaryList.classList.toggle("active");
}

// Gestionnaire d'événements pour l'icône du menu burger.
burgerIcon.addEventListener("click", toggleMenu);

// Fonction pour gérer les ajustements de style au redimensionnement.
function handleResize() {
  if (window.innerWidth > 768) {
    // Cacher l'icône du menu burger pour les écrans plus larges que 768px.
    burgerIcon.classList.add("hidden");
    burgerIcon.classList.remove("visible");
  } else {
    // Afficher l'icône du menu burger pour les écrans de 768px ou moins.
    burgerIcon.classList.add("visible");
    burgerIcon.classList.remove("hidden");
  }

  // Réinitialise les styles du menu principal pour les écrans plus larges que 768px.
  if (window.innerWidth > 768) {
    primaryList.classList.remove("active");
  }
}

// Appelle la fonction handleResize au chargement de la page et lors du redimensionnement.
window.addEventListener("resize", handleResize);
handleResize();
