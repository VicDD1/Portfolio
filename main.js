
var toggle_btn = document.querySelector('.theme-btn');
var body = document.querySelector('body');
var dark_theme_class = 'dark';

toggle_btn.addEventListener('click', function() {
    if (body.classList.contains(dark_theme_class)) {
        body.classList.remove(dark_theme_class);
        toggle_btn.innerHTML="Theme Sombre"
    }   
    else {
        body.classList.add(dark_theme_class);
        toggle_btn.innerHTML="Theme Claire"
}
});