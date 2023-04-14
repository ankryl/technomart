const connectButt = document.querySelector('.button-open-contanct-map');
console.log(connectButt);
const connectPopup = document.querySelector('.modal-connection-form');
const connectClose = document.querySelector('.exit-modal');
const connectionSend = document.querySelector('.button-modal-connection-form');
const connectLogin = document.querySelector('.login-name');
const connectEmail = document.querySelector('.login-mail');
const connectText = document.querySelector('.login-text');
const connectForm = document.querySelector('.connection-form');


connectButt.addEventListener('click', function(evt) {
    evt.preventDefault();
    connectPopup.classList.add('modal-show');
    connectPopup.classList.remove('visually-hidden');
    connectLogin.focus();
})
connectClose.addEventListener('click', function() {
    connectPopup.classList.add('visually-hidden');
    connectPopup.classList.remove("modal-show");
    connectPopup.classList.remove("modal-error");
})
connectForm.addEventListener("submit", function(evt) {
    if (!connectLogin.value || !connectEmail.value || !connectText.value) {
        evt.preventDefault();
        connectPopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (connectPopup.classList.contains("visually-hidden")) {
            evt.preventDefault();
            connectPopup.classList.remove("visually-hidden");
        } else {
            evt.preventDefault();
            connectPopup.classList.add("visually-hidden");
            connectPopup.classList.remove("modal-show");
            connectPopup.classList.remove("modal-error");
        }
    }
});