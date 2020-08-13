/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// build the nav
function navigation_bar() {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const li = document.createElement('li');
        li.classList.add('menu_item');
        const a = document.createElement('a');
        a.classList.add('menu__link');
        a.textContent = section.getAttribute('data-nav');
        a.setAttribute('data-section', `section${i+1}`);
        // link to go to appropriate section
        //a.href = `#section${i+1}`;
        li.appendChild(a);
        navList.append(li);
}
}

navigation_bar();

/*
// activate sections
const lists = document.getElementsByClassName("menu__link");
const activation = document.addEventListener('scroll', () => {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const section_pos = section.getBoundingClientRect();
        // this condition indicates whether a section is activated or not
        if (section_pos.top <= 150 && section_pos.bottom >= 150) {
            section.classList.add('active');
            // when the section is activated, it's also indicated in the navigation bar
            lists[i].style.color = 'white';
            lists[i].style.background = 'black';
        }
        else {
            // when deactivated, the navigation bar goes back to original
            section.classList.remove('active');
            lists[i].style.color = '#000';
            lists[i].style.background = 'white';
        }
    }
});

activation();
*/

function handleClickLink(event) {
    const section = event.target.getAttribute('data-section');
    console.log(section);
    const target = document.getElementById(section);
    console.log(target);
    target.scrollIntoView({ behavior: 'smooth'});
};

document.querySelectorAll('.menu_item').forEach((elem) => {
    elem.addEventListener('click', handleClickLink);
});