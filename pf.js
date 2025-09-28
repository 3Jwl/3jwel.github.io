const themetoggle = document.getElementById('themetoggle');
const preferDarkScheme = window.matchMedia('prefers-color-scheme: dark');
const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && preferDarkScheme.matches)) {
        document.body.classList.add('darkmode');

    } else {
        document.body.classList.remove('darkmode');
    }

themetoggle.addEventListener('click', function(){
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
        localStorage.setItem('theme', "light");
    } else {
        document.body.classList.add('darkmode');
        localStorage.setItem('theme', 'dark');
    }
});