'use strict'

import * as display from "./UI.js";
import * as event from "./action.js"

const options = {
    headers: {
        'x-rapidapi-key': '5657ccdc78mshc4f96c8f8c98100p1b10c0jsnfc24c7568722',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

export let games = [];
export let gameDetail = [];

export class GetGames {
    constructor(gameCategry = "mmorpg") {
        (async function getGamesData() {

            try {
        
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameCategry}`, options);
                const data = await response.json();
                games = data;
                new display.DisplayGame();
                new event.details();
        
            } catch (error) {
        
                console.error(error);
            };
        })();
    };
};

export class GetGameDetail {
    constructor(gameId) {
        (async function getGameDetailData() {

            try {
        
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
                const data = await response.json();
                gameDetail = data;
                new display.DisplayDetails();
        
            } catch (error) {
        
                console.error(error);
            };
        })();
    };
};