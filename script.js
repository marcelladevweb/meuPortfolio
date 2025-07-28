document.addEventListener('DOMContentLoaded', () => {

    
    const sections = document.querySelectorAll('section[id]');

    function activateMenuAtCurrentSection() {
       
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58; 
            const sectionId = current.getAttribute('id');
            const menuLink = document.querySelector('.menu a[href*=' + sectionId + ']');

            if (menuLink) {
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
       
                    menuLink.classList.add('active-link');
                } else {
                
                    menuLink.classList.remove('active-link');
                }
            }
        });
    }
    
   
    window.addEventListener('scroll', activateMenuAtCurrentSection);



    const backToTopButton = document.querySelector('.back-to-top');

    function toggleBackToTopButton() {
        // Se o usuário rolou mais de 400px para baixo
        if (window.scrollY > 400) {
            // Adiciona a classe 'show' para tornar o botão visível
            backToTopButton.classList.add('show');
        } else {
            // Remove a classe para esconder o botão
            backToTopButton.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
});