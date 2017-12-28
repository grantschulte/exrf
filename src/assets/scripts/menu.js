const menu = document.getElementById("menu");
const trigger = document.getElementById("menu-icon");
const close = document.getElementById("close");
const body = document.body;

function init() {
  if (menu && trigger) {
    trigger.addEventListener("click", () => {
      body.classList.add("menu-on");
      menu.classList.add("on");
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
    body.classList.remove("menu-on");
    menu.classList.remove("on");
  }
}

init();
