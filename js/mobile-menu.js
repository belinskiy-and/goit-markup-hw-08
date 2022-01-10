// (() => {
//     const menuBtnRef = document.querySelector('[data-menu-btn]');
//     const mobileMenuRef = document.querySelector('[data-menu]');

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("menu-expanded") === "true" || false;
            
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("menu-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//     });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();