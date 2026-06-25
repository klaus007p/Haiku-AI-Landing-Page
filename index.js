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


// Feature 3: Active navbar highlighting

const Links = document.querySelectorAll(".nav-links a");

Links.forEach(link =>{
    link.addEventListener("click", (e)=>{
        Links.forEach(item =>{
            item.classList.remove("active");
        })
        
        link.classList.add("active");
    })
})


// Feature 4: Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>{
    const target = parseFloat(counter.dataset.target);

    let count = 0;

    const updateCounter = () =>{
        const increment = target / 500;


        if (count < target) {
            count += increment;

            if (target < 100) {
                counter.textContent = count.toFixed(1) + "%";
            } else {
                counter.textContent = Math.ceil(count);
            }

            requestAnimationFrame(updateCounter);
        } else {
            if (target < 100) {
                counter.textContent = target + "%";
            } else {
                counter.textContent = target.toLocaleString();
            }
        }
    };


    
    updateCounter();
   
});

// Feature 5: Pricing monthly/yearly switch

const cards = document.querySelectorAll(".price-card");

let current = 0;

cards[current].classList.add("active");

setInterval(() =>{
    cards[current].classList.remove("active");

    current = (current + 1) % cards.length;
    cards[current].classList.add("active");
}, 2000)


// Feature 6: Testimonial carousel feature

const Testimonial = document.querySelectorAll(".testimonial")

let intervals = 0;
Testimonial[intervals].classList.add("active");

setInterval(() =>{
    Testimonial[intervals].classList.remove("active");

    intervals = (intervals + 1) % Testimonial.length;
    Testimonial[intervals].classList.add("active");
}, 2000) //No button involved so added transformation



// Feature 7 : FAQ accordion


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item =>{
    const questions = item.querySelector('.faq-question');

    questions.addEventListener("click",() =>{
        item.classList.toggle('active')
    })
})

// Feature 8: Scroll reveal animations
const revealSelectors = [
  'header',
  '.hero',
  '.stats',
  '#features',
  '#pricing',
  '#testimonials',
  '.faq',
  '#cta',
  'footer'
];

const revealTargets = revealSelectors
  .map(selector => document.querySelector(selector))
  .filter(Boolean);

revealTargets.push(...document.querySelectorAll('.feature-card, .price-card, .testimonial, .faq-item'));

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
