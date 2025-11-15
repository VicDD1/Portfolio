
var toggle_btn = document.querySelector('.theme-btn');
var body = document.querySelector('body');
var a = document.querySelectorAll('a');
var dark_theme_class = 'dark';
var light_theme_class = 'light';

toggle_btn.addEventListener('click', function() {
    if (body.classList.contains(dark_theme_class)) {
        body.classList.remove(dark_theme_class);
        body.classList.add(light_theme_class);
        toggle_btn.innerHTML="Dark Theme";
    }   
    else if (body.classList.contains(light_theme_class)){
        body.classList.remove(light_theme_class);
        body.classList.add(dark_theme_class);
        toggle_btn.innerHTML="Light Theme";
    }
    a.forEach((element) =>{ 
        if (element.classList.contains(dark_theme_class)){
            element.classList.remove(dark_theme_class);
            element.classList.add(light_theme_class);
        }
        else if (element.classList.contains(light_theme_class)){
            element.classList.remove(light_theme_class);
            element.classList.add(dark_theme_class);
        }
    })
});