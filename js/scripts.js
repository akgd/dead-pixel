if (!document.fullscreenEnabled) {
   alert('Your browser is not supported.')
} else {
    handleFullscreen();
}

function handleFullscreen() {
    const fullscreenEls = document.querySelectorAll('.trigger');
fullscreenEls.forEach(function (el) {
    el.addEventListener('click', function() {
        el.requestFullscreen();
    })
})
}
