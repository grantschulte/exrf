const menu = document.getElementById("menu");
const trigger = document.getElementById("menu-icon");
const close = document.getElementById("close");

function init() {
  if (menu && trigger) {
    trigger.addEventListener("click", () => {
      menu.classList.toggle("on");
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
    menu.classList.remove("on");
  }
}

init();
