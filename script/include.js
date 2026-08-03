document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  const promises = [];

  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    const fetchPromise = fetch(file)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
      });
    promises.push(fetchPromise);
  });

  // On attend que tous les includes soient chargés
  Promise.all(promises).then(() => {
    const toggle = document.querySelector(".menu-toggle");
    const header = document.querySelector(".site-header");

    if (toggle && header) {
      toggle.addEventListener("click", () => {
        console.log("clic menu");
        header.classList.toggle("open");
      });
    } else {
      console.warn("Éléments introuvables");
    }


    // Mode sombre
    const bouton = document.getElementById('toggle-theme');

    bouton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    });

    console.log("Abonne toi !")

      // ✅ Initialiser le piano ici, une fois que le HTML du piano est bien chargé
  if (document.querySelector(".piano-keys")) {
    initPiano(); // appelle la fonction SEULEMENT si le HTML du piano est présent
  } else {
    console.warn("Piano non trouvé dans le DOM !");
  }

  });
});
