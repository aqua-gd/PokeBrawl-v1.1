// CLASS POKEMONS --------------------------------------------------------------

class Pokemon {
    constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
        this.name = a;
        this.imgLeft = b;
        this.imgRight = c;
        this.atk = d;
        this.life = e;
        this.totalLife = f;
        this.atkImgLeft = g;
        this.atkImgRight = h;
        this.cantJumps = i;
        this.jumpSpeed = j;
        this.speed = k;
        this.bend = l;
        this.countAtk = m,
        this.showUlti = n
    }
}

//Create pokemons
const charizard = ['Charizard', './images/charizardLeft.png', './images/charizardRight.png', 20, 1400, 1400, './images/fireLeft.png', './images/fireRight.png', 8, 1.6, 150, false, 0, false];
const venusaur = ['Venusaur', './images/venusaurLeft.png', './images/venusaurRight.png', 22, 1400, 1400, './images/plantLeft.png', './images/plantRight.png', 3, 1.6, 150, false, 0, false];
const blastoise = ['Blastoise', './images/blastoiseLeft.png', './images/blastoiseRight.png', 22, 1400, 1400, './images/waterLeft.png', './images/waterRight.png', 3, 1.6, 150, false, 0, false];

const typhlosion = ['Typhlosion', './images/typhlosionLeft.png', './images/typhlosionRight.png', 22, 1400, 1400, './images/fireLeft.png', './images/fireRight.png', 3, 1.6, 150, false, 0, false];
const meganium = ['Meganium', './images/meganiumLeft.png', './images/meganiumRight.png', 22, 1400, 1400, './images/plantLeft.png', './images/plantRight.png', 3, 1.6, 150, false, 0, false];
const feraligatr = ['Feraligatr', './images/feraligatrLeft.png', './images/feraligatrRight.png', 22, 1400, 1400, './images/waterLeft.png', './images/waterRight.png', 3, 1.6, 150, false, 0, false];

// GLOBAL VARS --------------------------------------------------------------
const doc = document;
let actTime = true;
let time = 99;
const maxAtk = 21;

// OBJ FROM HTML --------------------------------------------------------------

// Name & life containers
const namePk1 = doc.getElementById('namePk1');
const namePk2 = doc.getElementById('namePk2');
const lifePk1 = doc.getElementById('lifePk1');
const lifePk2 = doc.getElementById('lifePk2');
const atkPk1 = doc.getElementById('atkPk1');
const atkPk2 = doc.getElementById('atkPk2');
const ulti1 = doc.getElementById('ulti1');
const ulti2 = doc.getElementById('ulti2');
const containerPk1 = doc.getElementsByClassName('containerPk1')[0];
const containerPk2 = doc.getElementsByClassName('containerPk2')[0];

// Styles & vars from CSS
const computedStyle1 = getComputedStyle(lifePk1);
const widthPk1 = parseFloat(computedStyle1.getPropertyValue('--life1'));
const computedStyle2 = getComputedStyle(lifePk2);
const widthPk2 = parseFloat(computedStyle2.getPropertyValue('--life2'));

// Buttons
const gameBtn = doc.getElementById('gameBtn');
const infBtn = doc.getElementById('infBtn');
const closeInfBtn = doc.getElementById('closeInfBtn');
const playBtn = doc.getElementById('playBtn');
const playAgainBtn = doc.getElementById('playAgainBtn');

// Containers
const winnerContainer = doc.getElementById('winnerContainer');
const txtWinner = doc.getElementById('txtWinner');
const imgWinnerPk = doc.getElementById('imgWinnerPk');
const nameWinnerPk = doc.getElementById('nameWinnerPk');
const imgLooserPk = doc.getElementById('imgLooserPk');
const nameLooserPk = doc.getElementById('nameLooserPk');

const imgDraw = doc.getElementById('imgDraw');
const gameViewport = doc.getElementById('gameViewport');
const selectContainer = doc.getElementById('selectContainer');
const infContainer = doc.getElementById('infContainer');
const pokemon1 = doc.getElementById('pokemon1');
const pokemon2 = doc.getElementById('pokemon2');
const timer = doc.getElementById('timer');
let choosePokemon1, choosePokemon2;

// MOVEMENT KEYS --------------------------------------------------------------

const arrows = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
    space: 32,

    left: 37,
    up: 38,
    right: 39,
    down: 40,
    enter: 13
};
