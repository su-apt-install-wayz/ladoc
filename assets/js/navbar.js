//-- Changement de la navBar
const nav = document.querySelector('#nav');

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if(scrollPosition >  10) {
        if(!nav.classList.contains('scrolled-down')) {
            nav.classList.add('scrolled-down');
        }
    } else {
        if(nav.classList.contains('scrolled-down')) {
            nav.classList.remove('scrolled-down');
        }
    }
}

if (window.innerWidth <= 780) {
    document.addEventListener("scroll", onScroll);
}

function copyIP() {
    const ipText = document.getElementById("ipAddress").innerText;

    const tempInput = document.createElement("input");
    tempInput.value = ipText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
        
    document.getElementById("ipAddressButton").innerHTML = '<i class="uil uil-check"></i>';
}