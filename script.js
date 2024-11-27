// Récupération des éléments HTML nécessaires pour la gestion des peintres et du menu burger.
const navLinks = document.querySelectorAll(".nav__link");
const subtitlePaint = document.querySelector(".subtitle__h2_Paint");
const naissanceDeces = document.querySelector(".naissanceDeces");
const gridTableaux = document.querySelector(".gridTableaux");
const galeryPaint = document.querySelector(".galeryPaint");
const burgerIcon = document.querySelector(".icon__burger");
const primaryList = document.querySelector(".primary__list");
const description = document.querySelector(".description");
const gridEntete = document.querySelector(".gridEntete").style.zIndex = '100';

// Informations sur les peintres (Nom, dates, chemins des tableaux et étiquettes).
const peintres = {
  Picasso: {
    dates: "(25 Octobre 1881 - 8 Avril 1973)",
    tableaux: [
      { src: "Assets/Images/PabloPicasso/Autoportrait_Picasso.png", label: "Autoportrait à la palette, 1906" },
      { src: "Assets/Images/PabloPicasso/Demoiselles_Avignon.png", label: "Les Demoiselles d'Avignon, 1907" },
      { src: "Assets/Images/PabloPicasso/Femme_qui_pleure.png", label: "Femme qui pleure, 1937" },
      { src: "Assets/Images/PabloPicasso/guernica.png", label: "Guernica, 1937" },
      { src: "Assets/Images/PabloPicasso/Le_peintre_et_son_modele.png", label: "Le Peintre et son Modèle, 1963" },
      { src: "Assets/Images/PabloPicasso/Marie_Therese.png", label: "Marie-Thérèse, 1932" },
    ],
  },
  Monet: {
    dates: "(14 Novembre 1840 - 5 Décembre 1926)",
    tableaux: [
      { src: "Assets/Images/ClaudeMonet/Impression_soleil_levant-1872.png", label: "Impression, Soleil Levant, 1872" },
      { src: "Assets/Images/ClaudeMonet/La_Promenade.png", label: "La Promenade, 1875" },
      { src: "Assets/Images/ClaudeMonet/Le_déjeuner-1873.png", label: "Le Déjeuner, 1873" },
      { src: "Assets/Images/ClaudeMonet/Les_Coquelicots.png", label: "Les Coquelicots, 1873" },
      { src: "Assets/Images/ClaudeMonet/Madame_Monet_et_Enfant-1875.png", label: "Madame Monet et Enfant, 1875" },
      { src: "Assets/Images/ClaudeMonet/Nymphéas-1916.png", label: "Nymphéas, 1916" },
    ],
  },
  Caillebotte: {
    dates: "(19 Août 1848 - 21 Février 1894)",
    tableaux: [
      { src: "Assets/Images/GustaveCaillebotte/Autoportrait_Caillebotte.png", label: "Autoportrait (Canotier au haut-de-forme), 1878" },
      { src: "Assets/Images/GustaveCaillebotte/Jour_de_pluie_à_Paris.png", label: "Jour de pluie à Paris, 1877" },
      { src: "Assets/Images/GustaveCaillebotte/Peintres_en_batiment.png", label: "Peintres en bâtiment, 1877" },
      { src: "Assets/Images/GustaveCaillebotte/Perissoires_sur_l_Yerres.png", label: "Périssoires sur l'Yerres, 1893" },
      { src: "Assets/Images/GustaveCaillebotte/Raboteurs_de_parquet.png", label: "Raboteurs de parquet, 1875" },
    ],
  },
  Vermeer: {
    dates: "(31 Octobre 1632 - 15 Décembre 1675)",
    tableaux: [
      { src: "Assets/Images/JohannesVermeer/fille_a_la-perle.png", label: "Fille à la perle, 1665" },
      { src: "Assets/Images/JohannesVermeer/La_laitière.png", label: "La laitière, 1658" },
      { src: "Assets/Images/JohannesVermeer/La_liseuse_à_la_fenêtre.png", label: "La liseuse à la fenêtre, 1657" },
    ],
  },
  Van_Gogh: {
    dates: "(30 Mars 1853 - 29 Juillet 1890)",
    tableaux: [
      { src: "Assets/Images/VincentVanGogh/Campagne_Montagneuse-1889.jpg", label: "Campagne Montagneuse, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_Chambre_de_van_gogh-1889.png", label: "La chambre de Van Gogh, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_nuit_Etoilee-1889.png", label: "La nuit étoilée, 1889" },
      { src: "Assets/Images/VincentVanGogh/La_sieste.png", label: "La sieste, 1890" },
      { src: "Assets/Images/VincentVanGogh/Les_Iris-1889.png", label: "Les iris, 1889" },
      { src: "Assets/Images/VincentVanGogh/Terrasse_café.png", label: "Terrasse de café, 1888" },
    ],
  },
  Kandinsky: {
    dates: "(16 Décembre 1866 - 13 Décembre 1944)",
    tableaux: [
      { src: "Assets/Images/WassilyKandinsky/Composition-VI-1913.png", label: "Composition VI, 1913" },
      { src: "Assets/Images/WassilyKandinsky/Composition-1939.png", label: "Composition, 1939" },
      { src: "Assets/Images/WassilyKandinsky/Jaune_rouge_bleu.png", label: "Jaune, rouge, bleu, 1925" },
      { src: "Assets/Images/WassilyKandinsky/Moscou-1916.png", label: "Moscou, 1916" },
      { src: "Assets/Images/WassilyKandinsky/Noir-et-violet-1923.png", label: "Noir et violet, 1923" },
      { src: "Assets/Images/WassilyKandinsky/tableau-en-bleu-1925.png", label: "tableau en bleu, 1925" },
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
  
        // Mise à jour de la galerie avec les tableaux et leurs étiquettes.
        gridTableaux.innerHTML = ""; // Vide la galerie existante.
        const tableaux = peintres[peintreId].tableaux;
  
        tableaux.forEach((tableau) => {
          // Crée un conteneur pour chaque tableau et son étiquette.
          const tableauContainer = document.createElement("div");
          tableauContainer.classList.add("tableau");
  
          // Ajoute l'image du tableau.
          const img = document.createElement("img");
          img.src = tableau.src; // Chemin de l'image.
          img.alt = tableau.label; // indique la description de l'image.
          img.classList.add("galeryImage");
  
          // Ajoute l'étiquette sous le tableau.
          const label = document.createElement("div");
          label.classList.add("tableLabel");
          label.textContent = tableau.label;
  
          // Assemble le conteneur.
          tableauContainer.appendChild(img);
          tableauContainer.appendChild(label);
          gridTableaux.appendChild(tableauContainer);
        });

        
        // Lancer l'animation des éléments.
        applyBounceAnimation();
    }
});
});

  // Fonction pour appliquer l'animation de chute, rebond et gestion des plans.
  function applyBounceAnimation() {
    // Déplace l'animation vers l'arrière-plan temporairement.
    // gridEntete.style.zIndex = "5";
    galeryPaint.style.zIndex = "10";
  
    // Ajoute la classe d'animation pour chaque élément dans l'animation container.
    subtitlePaint.classList.add("bounce-fall");
    naissanceDeces.classList.add("bounce-fall");
    gridTableaux.classList.add("bounce-fall");
  
    // Supprime la classe après l'animation pour permettre de relancer l'animation.
    setTimeout(() => {
        subtitlePaint.classList.remove("bounce-fall");
        naissanceDeces.classList.remove("bounce-fall");
        gridTableaux.classList.remove("bounce-fall");
  
      // Réinitialise les z-index après l'animation.
      descriptionSection.style.zIndex = "0";
      galeryPaint.style.zIndex = "10";
    }, 2500); // Durée de l'animation définie dans le CSS.
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