let massage = document.getElementById("massage");
let content = document.getElementById("content");


function isOnline() { 
    massage.innerText = " 🟢 You Are Online "
    content.style.border = "10px solid #6ffc03";
}

function isOffline() { 
    massage.innerText = " 🔴 You Are Offline  "
    content.style.border = "10px solid #de3914";
}

window.addEventListener("online",isOnline);
window.addEventListener("offline",isOffline);

