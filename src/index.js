import { DOM } from './DOM.js'
import { game } from './gameLogic.js'


const dom = DOM();
const newGame = game();

newGame.startGame(1000);

document.getElementById('start-button').addEventListener('click', dom.resetPage);
document.getElementById('difficulty-button').addEventListener('click', dom.renderStartPage);
document.getElementById('level-button').addEventListener('click', dom.resetPage);
