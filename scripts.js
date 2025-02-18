// Smooth scrolling navigation (Optional)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


