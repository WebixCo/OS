window.onmessage = function(e) {
  console.log("Recieved: " + e.data)
  if(e.data.data !== undefined){
    runFile(e.data.data, e.data.title);
    console.log("Recieved: " + e.data)
  }
  if(e.data == "openNotes"){
    openNotes()
  }
  
};



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}




function updateRow() {
  
}

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
    url: "./apps/browser/index.html",
    icon: "apps/browser/flame.png",
    bottom: 40,
  });
}
function openGobosWorld() {
  new WinBox("Gobo's World", {
    url: "https://turbowarp.org/377668347/embed?autoplay&settings-button&addons=pause%2Cremove-curved-stage-border%2Cgamepad",
    icon: "img/gobo.png",
    bottom: 40,
  });
}
function openMC() {
  new WinBox("Minecraft Classic", {
    url: "https://classic.minecraft.net/",
    icon: "img/mcclasic.png",
    bottom: 40,
  });
}



function openShl() {
  new WinBox("Shellshockers", {
    url: "https://scrambled.world/",
    icon: "img/shl.ico",
    bottom: 40,
  });
}

function opencookie() {
  new WinBox("Cookie Clicker", {
    url: "https://onyx-os-cookie-clicker.samdevsapps.repl.co/",
    icon: "https://onyx-os-cookie-clicker.samdevsapps.repl.co/img/favicon.ico",
    bottom: 40,
  });
}

function openPnt(fix) {
  if(fix === "yea"){
    var paintz = new WinBox("PaintZ", {
      url: "https://paintz.app/",
      icon: "apps/paintz/images/logo/favicon.ico",
      bottom: 40,
    });
  } else{
    confirmwb("OnyxOS's local PaintZ is currently broken, do you want to load the external PaintZ instead?<small>This means PaintZ won't be in the style of OnyxOS!</small>", 'openPnt("yea")', 'console.log("Paint Exited")')
  }
  
}

function openDino() {
  new WinBox("Dino Game", {
    url: "./apps/Dino/",
    icon: "./apps/Dino/icon.png",
    bottom: 40,
  });
}

function openFileMgr(){
  new WinBox("Files", {
    html: "<iframe style='height:100%; width:100%;' onmessage='alert()' src='./files.html'></iframe>",
    bottom: 40,
  });
}

function openweatherapp(){
  new WinBox("Weather", {
    url: "weatherApp.html",
    bottom: 40,
    width: 204,
    height:600
  });
}

function openNotes(){
  new WinBox("Notes (via OnyxAssistant)", {
    url: "https://onyxassistant.samdevsapps.repl.co/onyxnotes/os.html",
    bottom: 40,
  });
}

function openAssistant(){
  new WinBox("OnyxAssistant", {
    url: "https://onyxassistant.samdevsapps.repl.co/onyx_app.html",
    bottom: 40,
  });
}

function runFile(content, title){
  console.log(content)
  new WinBox(title, {
    url: content,
    bottom: 40,
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
localStorage.db = parameters.get('db');

window.open = function(url){
  new WinBox("flamewebview", {
    url: url,
    bottom: 40,
  });
}

function open(url){
  new WinBox("flamewebview", {
    url: url,
    bottom: 40,
  });
}

function syncapp(){
  new WinBox("Sync", {
    url: "sync-app.html",
    bottom: 40,
  });
}
function shutdown(){
  document.write("<center><h1>It is now safe to shut down your computer...")
  document.body.style.background = "black";
  document.body.style.color = "yellow";
  document.title = "It is now safe to shutdown your computer..."
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

  var crashpage = httpGet("offline.html");
function crash(){
  document.getElementsByTagName("html")[0].innerHTML = crashpage
}
var i = 0;



function virus(){
  for(var i = 0; i < 100;i++){
    //new WinBox()
    try {
      console.log(i);
      new WinBox(
        {
          max: false,
          min: false,
          class: ["virus","no-close", "no-min","no-max", "no-resize", "no-move","no-full"],
          
        }
      );
   }  
   catch (e) {
      console.log(e);
   }
  }
}

function confirmwb(confirmation, onyes, onno){
  var confstatus;
  confbox = new WinBox("confirm", {
    modal: true,
    html: "<center><h3>" + confirmation + "<br><button id='btnOk'>OK</button><button id='btnCancel' >Cancel</button></h3></center>",
  });
  document.getElementById("btnOk").onclick= function(){eval(onyes);confbox.close();}
  document.getElementById("btnCancel").onclick= function(){eval(onno);confbox.close();}
}