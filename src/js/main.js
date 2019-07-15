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

