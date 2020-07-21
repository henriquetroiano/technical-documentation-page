const menuButton = document.querySelector('#navbar');

menuButton.addEventListener('click', function(event ) {
    window.scrollTo(0, 0)
    setTimeout(() => {
        menuButton.classList.toggle('hide');
        console.log(this.getBoundingClientRect())
    }, 100)
})