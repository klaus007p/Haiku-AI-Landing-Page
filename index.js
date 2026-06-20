//Feature 1: Dark Theme

// const DarkTheme = document.querySelector('#theme-btn');

// DarkTheme.addEventListener('click', () =>{
//     document.body.classList.toggle('dark')
// })


const DarkTheme = document.querySelector('#theme-btn')

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
}

DarkTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    } else{
        localStorage.setItem('theme', 'light')
    }
});



// Feature 2: Mobile Hamburger Menu

const Hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

Hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
});