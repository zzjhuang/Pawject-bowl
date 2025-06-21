document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('overlay');

  if (menuToggle && overlay) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        menuToggle.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  }
});
