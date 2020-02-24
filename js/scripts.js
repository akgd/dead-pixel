console.log(document)
if (document.fullscreenEnabled) {
    handleFullscreen();
} else if (document.mozFullscreenEnabled) {
    handleFullscreen('moz');

} else if (document.webkitFullscreenEnabled) {
    handleFullscreen('webkit');
} else {
    alert('Your browser is not supported.')
}

function handleFullscreen(prefix) {
    const fullscreenEls = document.querySelectorAll('.trigger');
    fullscreenEls.forEach(function (el) {
        el.addEventListener('click', function () {
            if (!prefix) {
                el.requestFullscreen();
            } else if (prefix === 'webkit') {
                el.webkitRequestFullscreen();
            } else if (prefix === 'webkit') {
                el.mozRequestFullscreen();
            }
        })
    })
}
