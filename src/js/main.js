"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const name = 'Łukasz';
const age = 24;

const aboutHeader = document.querySelector('.about__header--js');

//console.log(aboutHeader);
//console.log(aboutHeader.innerHTML);

aboutHeader.innerHTML = `Kim jest ${name} ?`;

const welcome = (name, age) => {
    if (age < 18) {
        console.log('Ups, nie jestem pełnoletni, nie mogę udzielić Ci pewnych informacji ale miło, że tu zaglądasz');
    } else {
        console.log(`Witaj ! Nazywam się ${name}, mam ${age} lata - miło, że tutaj zaglądasz!`);
    }
}

welcome(name, age);


const button = document.querySelector('.navigation__button--js');
const navigationList = document.querySelector('.navigation__list--js');

button.addEventListener('click', (e) => {
    navigationList.classList.toggle('navigation__list--visible');
    if (navigationList.classList.contains('navigation__list--visible')) {
        button.innerHTML = 'X';
    } else {
        button.innerHTML = '☰';
    }
});

const inputName = document.querySelector('.contact__form--input-name-js');
const inputEmail = document.querySelector('.contact__form--input-email-js');
const inputContent = document.querySelector('.contact__form--input-message-js');

const sendMessageBtn = document.querySelector('.contact__form--button-js');

inputName.addEventListener('keyup', (e) => {
    localStorage.setItem('messageName', e.target.value);
})

inputEmail.addEventListener('keyup', (e) => {
    localStorage.setItem('messageEmail', e.target.value);
})

inputContent.addEventListener('keyup', (e) => {
    localStorage.setItem('messageContent', e.target.value);
})

sendMessageBtn.addEventListener('click', (e) => {
    // localStorage.removeItem('messageName');
    // localStorage.removeItem('messageEmail');
    // localStorage.removeItem('messageContent');
    
    localStorage.clear();
})


if(localStorage.getItem('messageName')) {
    inputName.value = localStorage.getItem('messageName');
}

if(localStorage.getItem('messageEmail')) {
    inputEmail.value = localStorage.getItem('messageEmail');
}

if(localStorage.getItem('messageContent')) {
    inputContent.value = localStorage.getItem('messageContent');
}