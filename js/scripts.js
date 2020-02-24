addFullscreenTriggerEvents('.trigger');

function addFullscreenTriggerEvents(selector) {
    const fullscreenEls = document.querySelectorAll(selector);
    fullscreenEls.forEach(function (el) {
        el.addEventListener('click', function () {
            launchFullscreen(el);
        });
    });
}

function launchFullscreen(el) {
    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
    }
}