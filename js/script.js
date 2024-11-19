document.addEventListener('DOMContentLoaded', function() {
    const serviceElements = document.querySelectorAll(' .services .iconService.hidden, .activity.hidden');

    function handleScroll() {
        serviceElements.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.classList.add('visible');
                element.classList.remove('hidden');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama a la función una vez para verificar la posición inicial
});
