
var toggle_btn = document.querySelector('.theme-btn');
var body = document.querySelector('body');
var clouds = document.querySelector('#clouds');
var dark_theme_class = 'dark';
var light_theme_class = 'light';

toggle_btn.addEventListener('click', function() {
    if (body.classList.contains(dark_theme_class)) {
        body.classList.remove(dark_theme_class);
        body.classList.add(light_theme_class);
        clouds.classList.remove(dark_theme_class)
        clouds.classList.add(light_theme_class)
        toggle_btn.innerHTML="Dark Theme";
    }   
    else if (body.classList.contains(light_theme_class)){
        body.classList.remove(light_theme_class);
        body.classList.add(dark_theme_class);
        clouds.classList.remove(light_theme_class)
        clouds.classList.add(dark_theme_class)
        toggle_btn.innerHTML="Light Theme";
    }
});