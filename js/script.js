require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import form from './modules/form';
import slider from './modules/slider';
import {showModal} from './modules/modal';
 

document.addEventListener('DOMContentLoaded', () => {
    const intervalOpenModal = setTimeout(() => showModal('.modal', intervalOpenModal), 30000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', intervalOpenModal);
    timer('.timer', '2021-06-30');
    cards();
    calc();
    form('form', intervalOpenModal);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});