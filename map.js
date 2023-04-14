const mapLink = document.querySelector(".contacts-button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".exit-modal");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("visually-hidden");
    mapPopup.classList.add('modal-show');
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("visually-hidden");
    connectPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("visually-hidden")) {
            evt.preventDefault();
            mapPopup.classList.remove("visually-hidden");
        } else {
            evt.preventDefault();
            mapPopup.classList.add("visually-hidden");
            mapPopup.classList.remove("modal-show");
        }
    }
});