'use strict'
import * as data from "./games.js";

export class DisplayGame {
    constructor() {
        let box = '';

        for(let i = 0; i < data.games.length ; i++) {
            box += `<div class="col-lg-3 col-md-6">
                        <div class="card text-white text-decoration-none">
                            <img src="${data.games[i].thumbnail}" class="card-img-top" alt="${data.games[i].title}">
                            <div id="${data.games[i].id}" class="card-body pt-0 d-flex flex-wrap justify-content-between ">
                                <h2 class="fw-semibold w-75">${data.games[i].title}</h2>
                                <article class="badge bg-primary text-center rounded-3 py-2 px-2 fw-bold">Free</article>
                                <h5 class="w-100 pt-2 text-center text-secondary lh-base fw-semibold">${data.games[i].short_description.split(' ').slice(0, 8).join(',')}</h5>
                            </div>
                            <div class="card-footer d-flex justify-content-between fw-bold">
                                <div class="cat text-center rounded-2 px-2">${data.games[i].genre}</div>
                                <div class="plat text-center rounded-2 px-2">${data.games[i].platform}</div>
                            </div>
                        </div>
                    </div>`
        }
        document.querySelector('.games').innerHTML = box;
    }
};

export class DisplayDetails {
    constructor() {
        data.gameDetail;
        let box = `<div class="col-md-4">
                        <img src="${data.gameDetail.thumbnail}" class="w-100 rounded-3" alt="${data.gameDetail.title}">
                    </div>
                    <div class="col-md-8">
                        <article class="h3 pt-md-0 pt-4">Title: ${data.gameDetail.title}</article>
                        <article>Category: <span class="fw-bold text-black px-2 rounded-2">${data.gameDetail.genre}</span></article>
                        <article class="my-3">Platform: <span class="fw-bold text-black px-2 rounded-2">${data.gameDetail.platform}</span></article>
                        <article>Status: <span class="fw-bold text-black px-2 rounded-2">${data.gameDetail.status}</span></article>
                        <p class="pt-3"> ${data.gameDetail.description}</p>
                        <a href="${data.gameDetail.game_url}" class="btn btn-outline-warning text-white">Show Game</a>
                    </div>`
        
        document.querySelector('.info').innerHTML = box;
    }
}