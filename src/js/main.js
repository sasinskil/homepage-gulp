"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const name = 'Łukasz';
const age = 24;

const whoHeader = document.querySelector('.who__title--js');

//console.log(whoHeader);
//console.log(whoHeader.innerHTML);

whoHeader.innerHTML = `Kim jest ${name} ?`;

const welcome = (name, age) => {
    if (age < 18) {
        console.log('Ups, nie jestem pełnoletni, nie mogę udzielić Ci pewnych informacji ale miło, że tu zaglądasz');
    } else {
        console.log(`Witaj ! Nazywam się ${name}, mam ${age} lata - miło, że tutaj zaglądasz!`);
    }
}

welcome(name, age);


// const button = document.querySelector('.navigation__button--js');
// const navigationList = document.querySelector('.navigation__list--js');

// button.addEventListener('click', (e) => {
//     navigationList.classList.toggle('navigation__list--visible');
//     if (navigationList.classList.contains('navigation__list--visible')) {
//         button.innerHTML = 'X';
//     } else {
//         button.innerHTML = '☰';
//     }
// });

// const inputName = document.querySelector('.contact__form--input-name-js');
// const inputEmail = document.querySelector('.contact__form--input-email-js');
// const inputContent = document.querySelector('.contact__form--input-message-js');

// const sendMessageBtn = document.querySelector('.contact__form--button-js');

// inputName.addEventListener('keyup', (e) => {
//     localStorage.setItem('messageName', e.target.value);
// })

// inputEmail.addEventListener('keyup', (e) => {
//     localStorage.setItem('messageEmail', e.target.value);
// })

// inputContent.addEventListener('keyup', (e) => {
//     localStorage.setItem('messageContent', e.target.value);
// })

// sendMessageBtn.addEventListener('click', (e) => {
//     // localStorage.removeItem('messageName');
//     // localStorage.removeItem('messageEmail');
//     // localStorage.removeItem('messageContent');
    
//     localStorage.clear();
// })


// if(localStorage.getItem('messageName')) {
//     inputName.value = localStorage.getItem('messageName');
// }

// if(localStorage.getItem('messageEmail')) {
//     inputEmail.value = localStorage.getItem('messageEmail');
// }

// if(localStorage.getItem('messageContent')) {
//     inputContent.value = localStorage.getItem('messageContent');
// }

const navShowBtn = document.querySelector('.navigation-trigger--js');
const navHideBtn = document.querySelector('.navigation-hide--js');
const nav = document.querySelector('.navigation--js');
const toUpLink = document.querySelector('.footer__link--top-js');

navShowBtn.addEventListener('click', (e) => {
    nav.classList.add('navigation__show');
})

navHideBtn.addEventListener('click', (e) => {
    nav.classList.remove('navigation__show');
})

document.addEventListener('scroll',(e)=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 200) {
        toUpLink.classList.add('footer__link--top-visible');
    } else {
        toUpLink.classList.remove('footer__link--top-visible');
    }
  })