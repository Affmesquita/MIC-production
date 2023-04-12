
const btnMobile = document.getElementsByClassName('hamburger-menu');

    function toggleMenu(){
        const nav = document.getElementsByClassName('nav')
        nav.classlist.toggle('active')
    }

btnMobile.addEventListener('click', toggleMenu);
