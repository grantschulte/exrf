const menu = document.getElementById("menu");
const trigger = document.getElementById("menuIcon");
const close = document.getElementById("close");
const body = document.body;

function init() {
  if (menu && trigger) {
    trigger.addEventListener("click", () => {
      body.classList.add("-menuOpen");
      menu.classList.add("-open");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      closeMenu();
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

function closeMenu() {
  if (menu) {
    body.classList.remove("-menuOpen");
    menu.classList.remove("-open");
  }
}

init();
