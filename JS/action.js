'use strict'

import * as data from "./games.js";

export class closs {
    constructor() {

        document.querySelector('.btn-close').addEventListener('click' , function() {
            document.querySelector('.details').classList.add('d-none');
            document.querySelector('.home').classList.remove('d-none');
        });
    };
};

export class details {
    constructor() {
        let cards = Array.from(document.querySelectorAll('.card'));

        for(let i = 0; i < cards.length; i++) {
            
            cards[i].addEventListener('click' , function() {
                let id = cards[i].firstElementChild.nextElementSibling.getAttribute('id');
                new data.GetGameDetail(id);

                document.querySelector('.details').classList.remove('d-none');
                document.querySelector('.home').classList.add('d-none');
            });
        };        
    };
};

export class ShowGames {
    constructor() {
        let categoryList = Array.from(document.querySelectorAll('.nav-link'));

        for(let i = 0; i <categoryList.length; i++) {

            categoryList[i].addEventListener('click' , function() {
                let link = categoryList[i].textContent;

                categoryList.forEach(link => link.classList.remove('active'));
                categoryList[i].classList.add('active');
                new data.GetGames(link.toLowerCase());
            });
        };
    };
};