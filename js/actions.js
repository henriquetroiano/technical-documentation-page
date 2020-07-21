const menuButton = document.querySelector('#navbar');

menuButton.addEventListener('click', function(event ) {
    setTimeout(() => {
        menuButton.classList.toggle('hide');
        console.log(this.getBoundingClientRect())
    }, 200)
})