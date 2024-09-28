const year = document.getElementById('year');
year.innerHTML = "Copyright &copy " + new Date().getFullYear() + " - LaDoc.wiki | Tous droits réservés.";

let footerOpen = false;

function enableFooter() {
    const footer = document.getElementById('footer');
    const touche = document.getElementById('touche');
    if (!footerOpen) {
        footer.classList.add('active');
        footerOpen = true;
    }
    else {
        footer.classList.remove('active');
        footerOpen = false;
    }

    document.addEventListener("click", function (event) {
        if (footerOpen) {
            if (event.target !== footer && event.target !== touche) {
                footer.classList.remove('active');
                footerOpen = false;
            }
        }
    });
}

function disableFooter() {
    footer.classList.remove('active');
    footerOpen = false;
}