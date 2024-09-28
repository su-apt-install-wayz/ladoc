
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
    let searchWord = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchWord)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});
