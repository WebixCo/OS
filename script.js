function refreshTime() {
  const timeDisplay = document.getElementById("taskbar_time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString.split(" - ")[1];
}
setInterval(refreshTime, 1000);
function refreshTimeDesk() {
  const timeDisplay = document.getElementById("timeDesk");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = "It's " + formattedString.split(" - ")[1];
}
setInterval(refreshTimeDesk, 1000);
function openWeb() {
  new WinBox("Flame Browser", {
    url: "https://onyxos.samdevsapps.repl.co/apps/browser/index.html",
    icon: "apps/browser/flame.png",
  });
}
function openGobosWorld() {
  new WinBox("Gobo's World", {
    url: "https://turbowarp.org/377668347/embed?autoplay&settings-button&addons=pause%2Cremove-curved-stage-border%2Cgamepad",
    icon: "img/gobo.png",
  });
}
function openMC() {
  new WinBox("Minecraft Classic", {
    url: "https://classic.minecraft.net/",
    icon: "img/mcclasic.png",
  });
}



function openShl() {
  new WinBox("Shellshockers", {
    url: "https://scrambled.world/",
    icon: "img/shl.ico",
  });
}

function opencookie() {
  new WinBox("Cookie Clicker", {
    url: "https://onyx-os-cookie-clicker.samdevsapps.repl.co/",
    icon: "https://onyx-os-cookie-clicker.samdevsapps.repl.co/img/favicon.ico",
  });
}

function openPnt() {
  new WinBox("PaintZ", {
    url: "https://onyxos.samdevsapps.repl.co/apps/paintz/",
    icon: "https://onyxos.samdevsapps.repl.co/apps/paintz/images/logo/favicon.ico",
  });
}

function openDino() {
  new WinBox("Dino Game", {
    url: "https://onyxos.samdevsapps.repl.co/apps/Dino/",
    icon: "https://onyxos.samdevsapps.repl.co/apps/Dino/icon.png",
  });
}

function runFile(content, first, title){
  console.log(content)
  new WinBox(title, {
    url: content
  });
}

const registerServiceWorker = async () => {
        if ("serviceWorker" in navigator) {
          try {
            const registration = await navigator.serviceWorker.register("/sw.js", {
              scope: "/",
            });
            if (registration.installing) {
              console.log("Service worker installing");
            } else if (registration.waiting) {
              console.log("Service worker installed");
            } else if (registration.active) {
              console.log("Service worker active");
            }
          } catch (error) {
            console.error(`Registration failed with ${error}`);
          }
        }
      };

      // …

      registerServiceWorker();
var loginH3 = document.getElementById("login")
const queryString = window.location.href;
const parameters = new URLSearchParams(queryString);
const value = parameters.get('name');
loginH3.textContent = ""+value