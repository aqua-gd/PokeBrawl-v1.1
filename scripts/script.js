// TODO:
//  - duracion del salto: 500ms => 600ms READY
//  - Stop the game when time finish => READY
//  - Fix atk movement => READY
//  - El pokemon se agacha mientras se mantiene presionado => READY
//  - Minimo 2 atk diferentes => ULTI added READY
//  - Fix empate => READY
//  - Atk ulti detectar colision izq-der => READY
//  - Add 3 more pokemons => READY
//  - Complete the info secction

// BTN EVENTS --------------------------------------------------------------

playBtn.addEventListener('click', () => {
    //Choose pokemons
    if (doc.getElementById('charizard1').checked) {
        choosePokemon1 = new Pokemon(charizard[0], charizard[1], charizard[2], charizard[3], charizard[4], charizard[5], charizard[6], charizard[7], charizard[8], charizard[9], charizard[10], charizard[11], charizard[12]);
    }
    else if (doc.getElementById('venusaur1').checked) {
        choosePokemon1 = new Pokemon(venusaur[0], venusaur[1], venusaur[2], venusaur[3], venusaur[4], venusaur[5], venusaur[6], venusaur[7], venusaur[8], venusaur[9], venusaur[10], venusaur[11], venusaur[12]);
    }
    else if (doc.getElementById('blastoise1').checked) {
        choosePokemon1 = new Pokemon(blastoise[0], blastoise[1], blastoise[2], blastoise[3], blastoise[4], blastoise[5], blastoise[6], blastoise[7], blastoise[8], blastoise[9], blastoise[10], blastoise[11], blastoise[12]);
    }
    else if (doc.getElementById('typhlosion1').checked) {
        choosePokemon1 = new Pokemon(typhlosion[0], typhlosion[1], typhlosion[2], typhlosion[3], typhlosion[4], typhlosion[5], typhlosion[6], typhlosion[7], typhlosion[8], typhlosion[9], typhlosion[10], typhlosion[11], typhlosion[12]);
    }
    else if (doc.getElementById('meganium1').checked) {
        choosePokemon1 = new Pokemon(meganium[0], meganium[1], meganium[2], meganium[3], meganium[4], meganium[5], meganium[6], meganium[7], meganium[8], meganium[9], meganium[10], meganium[11], meganium[12]);
    }
    else if (doc.getElementById('feraligatr1').checked) {
        choosePokemon1 = new Pokemon(feraligatr[0], feraligatr[1], feraligatr[2], feraligatr[3], feraligatr[4], feraligatr[5], feraligatr[6], feraligatr[7], feraligatr[8], feraligatr[9], feraligatr[10], feraligatr[11], feraligatr[12]);
    }

    if (doc.getElementById('charizard2').checked) {
        choosePokemon2 = new Pokemon(charizard[0], charizard[1], charizard[2], charizard[3], charizard[4], charizard[5], charizard[6], charizard[7], charizard[8], charizard[9], charizard[10], charizard[11], charizard[12]);
    }
    else if (doc.getElementById('venusaur2').checked) {
        choosePokemon2 = new Pokemon(venusaur[0], venusaur[1], venusaur[2], venusaur[3], venusaur[4], venusaur[5], venusaur[6], venusaur[7], venusaur[8], venusaur[9], venusaur[10], venusaur[11], venusaur[12]);
    }
    else if (doc.getElementById('blastoise2').checked) {
        choosePokemon2 = new Pokemon(blastoise[0], blastoise[1], blastoise[2], blastoise[3], blastoise[4], blastoise[5], blastoise[6], blastoise[7], blastoise[8], blastoise[9], blastoise[10], blastoise[11], blastoise[12]);
    }
    else if (doc.getElementById('typhlosion2').checked) {
        choosePokemon2 = new Pokemon(typhlosion[0], typhlosion[1], typhlosion[2], typhlosion[3], typhlosion[4], typhlosion[5], typhlosion[6], typhlosion[7], typhlosion[8], typhlosion[9], typhlosion[10], typhlosion[11], typhlosion[12]);
    }
    else if (doc.getElementById('meganium2').checked) {
        choosePokemon2 = new Pokemon(meganium[0], meganium[1], meganium[2], meganium[3], meganium[4], meganium[5], meganium[6], meganium[7], meganium[8], meganium[9], meganium[10], meganium[11], meganium[12]);
    }
    else if (doc.getElementById('feraligatr2').checked) {
        choosePokemon2 = new Pokemon(feraligatr[0], feraligatr[1], feraligatr[2], feraligatr[3], feraligatr[4], feraligatr[5], feraligatr[6], feraligatr[7], feraligatr[8], feraligatr[9], feraligatr[10], feraligatr[11], feraligatr[12]);
    }

    // Show pokemons and life containers
    pokemon1.style.backgroundImage = `url(${choosePokemon1.imgLeft})`;
    pokemon2.style.backgroundImage = `url(${choosePokemon2.imgRight})`;
    pokemon1.style.display = 'block';
    pokemon2.style.display = 'block';
    namePk1.innerHTML = '1P - ' + choosePokemon1.name;
    namePk2.innerHTML = '2P - ' + choosePokemon2.name;
    containerPk1.style.display = 'block';
    containerPk2.style.display = 'block';

    // Hide selectContainer
    selectContainer.style.opacity = '0';
    setTimeout(() => {
        selectContainer.style.display = 'none';
    }, 200);

    updateTime();
})

gameBtn.addEventListener('click', () => {
    location.reload();
})

infBtn.addEventListener('click', () => {
    selectContainer.style.display = 'none';
    infContainer.style.display = 'block';
    setTimeout(() => {
        infContainer.style.opacity = '0.8';
    }, 100);
    showInfContainer = true;
});

closeInfBtn.addEventListener('click', () => {
    location.reload();
});

// POKEMONS MOVEMENT --------------------------------------------------------------

doc.addEventListener('keyup', movPokemon);
doc.addEventListener('keydown', bendPokemon);

let pk1View = true, pk2View = true;
let pk1X = 0, pk1Y = 0;
let pk2X = 0, pk2Y = 0;

function winner(time) {
    let winnerP, looserP;
    let winnerP_img, looserP_img;

    if (time) {
        if (choosePokemon1.life > choosePokemon2.life) {
            winnerP = 'PLAYER 1';
            looserP = 'PLAYER 2';
            winnerP_img = choosePokemon1.imgLeft;
            looserP_img = choosePokemon2.imgRight;
            txtWinner.innerHTML = winnerP + ' WIN!';
        } else if (choosePokemon2.life > choosePokemon1.life) {
            winnerP = 'PLAYER 2';
            looserP = 'PLAYER 1';
            winnerP_img = choosePokemon2.imgLeft;
            looserP_img = choosePokemon1.imgRight;
            txtWinner.innerHTML = winnerP + ' WIN!';
        } else if (choosePokemon1.life = choosePokemon2.life) {
            txtWinner.innerHTML = 'DRAW';
            winnerP = '';
            looserP = '';
            imgWinnerPk.style.display = 'none';
            imgLooserPk.style.display = 'none';
            imgDraw.style.display = 'block';
        }
    } else if (!time) {
        if (choosePokemon1.life > 0) {
            winnerP = 'PLAYER 1';
            looserP = 'PLAYER 2';
            winnerP_img = choosePokemon1.imgLeft;
            looserP_img = choosePokemon2.imgRight;
            txtWinner.innerHTML = winnerP + ' WIN!';
        } else if (choosePokemon2.life > 0) {
            winnerP = 'PLAYER 2';
            looserP = 'PLAYER 1';
            winnerP_img = choosePokemon2.imgLeft;
            looserP_img = choosePokemon1.imgRight;
            txtWinner.innerHTML = winnerP + ' WIN!';
        }
    }
    imgWinnerPk.src = winnerP_img;
    imgLooserPk.src = looserP_img;
    nameWinnerPk.innerHTML = winnerP;
    nameLooserPk.innerHTML = looserP;

    actTime = false;
    winnerContainer.style.display = 'block';
    setTimeout(() => {
        winnerContainer.style.opacity = '0.9';
    }, 300);
    playAgainBtn.addEventListener('click', () => {
        location.reload();
    });
}

// movPokemon() needs jumpPokemon(), atkPokemon() & detectColision()
function movPokemon(key) {
    // key.preventDefault();
    if (choosePokemon1.life > 0 && choosePokemon2.life > 0) {
        switch (key.keyCode) {
            // Player 1 --------------------------------------------------------------
            case arrows.a:
                if (pokemon1.getBoundingClientRect().left > (Math.floor(gameViewport.getBoundingClientRect().left) + 100)) {
                    pk1X -= choosePokemon1.speed;
                    pokemon1.style.backgroundImage = `url(${choosePokemon1.imgRight})`;
                    pk1View = false;
                }
                break;
            case arrows.w:
                jumpPokemon(pokemon1, choosePokemon1);
                break;
            case arrows.d:
                if (pokemon1.getBoundingClientRect().right < (gameViewport.getBoundingClientRect().right - 200)) {
                    pk1X += choosePokemon1.speed;
                    pokemon1.style.backgroundImage = `url(${choosePokemon1.imgLeft})`;
                    pk1View = true;
                }
                break;
            case arrows.s:
                choosePokemon1.bend = false;
                pokemon1.style.backgroundSize = '250px';
                pokemon1.style.height = "250px";
                pk1Y -= choosePokemon1.speed / choosePokemon1.jumpSpeed;
                break;
            case arrows.space:
                if (pk1View) {
                    atkPokemon(pokemon1, choosePokemon1, choosePokemon2, pokemon2, 'left', lifePk2, atkPk1, 1, 2, ulti1, 1);
                } else if (!pk1View) {
                    atkPokemon(pokemon1, choosePokemon1, choosePokemon2, pokemon2, 'right', lifePk2, atkPk1, 1, 2, ulti1, 1);
                }
                break;

            // Player 2 --------------------------------------------------------------
            case arrows.left:
                if (pokemon2.getBoundingClientRect().left > (Math.floor(gameViewport.getBoundingClientRect().left) + 100)) {
                    pk2X -= choosePokemon2.speed;
                    pokemon2.style.backgroundImage = `url(${choosePokemon2.imgRight})`;
                    pk2View = true;
                }
                break;
            case arrows.up:
                jumpPokemon(pokemon2, choosePokemon2);
                break;
            case arrows.right:
                if (pokemon2.getBoundingClientRect().right < (gameViewport.getBoundingClientRect().right - 200)) {
                    pk2X += choosePokemon2.speed;
                    pokemon2.style.backgroundImage = `url(${choosePokemon2.imgLeft})`;
                    pk2View = false;
                }
                break;
            case arrows.down:
                choosePokemon2.bend = false;
                pokemon2.style.backgroundSize = '250px';
                pokemon2.style.height = "250px";
                pk2Y -= choosePokemon2.speed / choosePokemon2.jumpSpeed;
                break;
            case arrows.enter:
                if (pk2View) {
                    atkPokemon(pokemon2, choosePokemon2, choosePokemon1, pokemon1, 'right', lifePk1, atkPk2, 2, 1, ulti2, 1);
                } else if (!pk2View) {
                    atkPokemon(pokemon2, choosePokemon2, choosePokemon1, pokemon1, 'left', lifePk1, atkPk2, 2, 1, ulti2, 1);
                }
                break;
        }
        pokemon1.style.transform = `translate(${pk1X}px, ${pk1Y}px)`;
        pokemon2.style.transform = `translate(${pk2X}px, ${pk2Y}px)`;
    }

}

function jumpPokemon(pokemon, choosePk) {
    if (choosePk.cantJumps > 0 && pokemon.getBoundingClientRect().top > (gameViewport.getBoundingClientRect().top + 200)) {
        choosePk.cantJumps -= 1;
        if (choosePk == choosePokemon1) {
            pk1Y -= (choosePk.speed * choosePk.jumpSpeed);
        } else if (choosePk == choosePokemon2) {
            pk2Y -= (choosePk.speed * choosePk.jumpSpeed);
        }
        console.log(choosePk.cantJumps);
        setTimeout(() => {
            choosePk.cantJumps -= 1;
            console.log(choosePk.cantJumps);
            if (choosePk == choosePokemon1) {
                pk1Y += (choosePk.speed * choosePk.jumpSpeed);
                pokemon.style.transform = `translate(${pk1X}px, ${pk1Y}px)`;
            } else if (choosePk == choosePokemon2) {
                pk2Y += (choosePk.speed * choosePk.jumpSpeed);
                pokemon.style.transform = `translate(${pk2X}px, ${pk2Y}px)`;
            }
            if (choosePk.cantJumps <= 0) {
                setTimeout(() => {
                    if (choosePk.name == 'Charizard') {
                        choosePk.cantJumps = charizard[8];
                    }
                    else {
                        choosePk.cantJumps = venusaur[8];
                    }
                }, 500);
            }
        }, 600);
    }
}

function bendPokemon(key) {
    if (key.keyCode == arrows.s) {
        if (!choosePokemon1.bend && pokemon1.getBoundingClientRect().bottom < (gameViewport.getBoundingClientRect().bottom)) {
            pk1Y += choosePokemon1.speed / choosePokemon1.jumpSpeed;
            pokemon1.style.backgroundSize = '250px 220px';
            pokemon1.style.height = "200";
            choosePokemon1.bend = true;
            pokemon1.style.transform = `translate(${pk1X}px, ${pk1Y}px)`;
        }
    } else if (key.keyCode == arrows.down) {
        if (!choosePokemon2.bend && pokemon2.getBoundingClientRect().bottom < (gameViewport.getBoundingClientRect().bottom)) {
            pk2Y += choosePokemon2.speed / choosePokemon2.jumpSpeed;
            pokemon2.style.backgroundSize = '250px 220px';
            pokemon2.style.height = "200";
            choosePokemon2.bend = true;
            pokemon2.style.transform = `translate(${pk2X}px, ${pk2Y}px)`;
        }
    }
}

// atkPokemon() needs detectColision()
function atkPokemon(pokemon, choosePk, choosePkAtked, pokemonAtked, direction, lifePk, atkPk, playerAtk, playerAtked, ulti, atkUlti) {
    let atk = doc.createElement('img');
    let atkX, atkY;
    atkX = pokemon.getBoundingClientRect().x;
    atkY = (- gameViewport.getBoundingClientRect().bottom) + pokemon.getBoundingClientRect().top;

    if (choosePk.showUlti) {
        ulti.style.display = 'none';
        choosePk.showUlti = false;
        atkPk.style.setProperty(`--atks${playerAtk}`, ((choosePk.countAtk / maxAtk).toFixed(4)) * 100);
        atkUlti = 10;
        atkY = (- gameViewport.getBoundingClientRect().bottom) + (pokemon.getBoundingClientRect().top - 250);
        atk.style.width = '450px';
    }

    atk.style.display = 'block';
    atk.style.position = 'absolute';
    atk.style.zIndex = '9';
    atk.style.transition = 'all 800ms';

    if (direction == 'right') {
        atkX -= 35;
        atk.src = choosePk.atkImgRight;
    } else if (direction == 'left') {
        atkX += (pokemon.getBoundingClientRect().width * 1 / 2) + 50;
        atk.src = choosePk.atkImgLeft;
    }

    atk.style.transform = `translate(${atkX}px, ${atkY}px`;
    doc.body.appendChild(atk);
    let i = 0;
    let atkTrue = false;

    setTimeout(() => {
        (function repeatDetColision() {
            if (i < 10 && !atkTrue) {
                setTimeout(() => {
                    atkTrue = detectColision(atk, pokemonAtked, atkUlti);
                    i++;
                    repeatDetColision();
                }, 80);
            } else if (atkTrue) {
                choosePkAtked.life -= choosePk.atk * atkUlti;
                lifePk.style.setProperty(`--life${playerAtked}`, ((choosePkAtked.life / choosePkAtked.totalLife).toFixed(4)) * 100);

                if (choosePk.countAtk < (maxAtk - 1)) {
                    choosePk.countAtk++;
                    console.log(choosePk.countAtk);
                    atkPk.style.setProperty(`--atks${playerAtk}`, ((choosePk.countAtk / maxAtk).toFixed(4)) * 100);

                    if (choosePk.countAtk >= (maxAtk - 1)) {
                        choosePk.showUlti = true;
                        console.log(choosePk.name + 'has 20 atks');

                        ulti.style.display = 'block';
                        choosePk.countAtk = 0;
                    }
                }
                setTimeout(() => {
                    if (choosePkAtked.life <= 0) {
                        winner();
                    }
                }, 100);
            }
        })();

        if (direction == 'right') {
            atk.style.transform = `translate(${atkX - 250}px, ${atkY}px)`;
            if (atkUlti == 10) {
                atk.style.transform = `translate(${gameViewport.getBoundingClientRect().left}px, ${atkY}px)`;
            }
        }

        if ((gameViewport.getBoundingClientRect().right - pokemon.getBoundingClientRect().right) < 260) {
            if (direction == 'left') {
                atk.style.transform = `translate(${gameViewport.getBoundingClientRect().right - 100}px, ${atkY}px)`;
            }

        } else {
            if (direction == 'left') {
                atk.style.transform = `translate(${atkX + 250}px, ${atkY}px)`;
                if (atkUlti == 10) {
                    atk.style.transform = `translate(${gameViewport.getBoundingClientRect().right - 450}px, ${atkY}px)`;
                }
            }
        }

        setTimeout(() => {
            doc.body.removeChild(atk);
        }, 700);
    }, 25);

}

function detectColision(atk, pokemonAtked, atkUlti) {
    if (atkUlti == 10) {
        if (atk.getBoundingClientRect().right > pokemonAtked.getBoundingClientRect().left &&
            atk.getBoundingClientRect().left < pokemonAtked.getBoundingClientRect().right) {
            return true;
        } else {
            return false;
        }
    }
    else {
        if (atk.getBoundingClientRect().left < pokemonAtked.getBoundingClientRect().left ||
            atk.getBoundingClientRect().right > pokemonAtked.getBoundingClientRect().right ||
            atk.getBoundingClientRect().bottom < pokemonAtked.getBoundingClientRect().top + 50 ||
            atk.getBoundingClientRect().top > pokemonAtked.getBoundingClientRect().bottom - 50) {
            return false;
        } else {
            return true;
        }
    }
}

// Update time
function updateTime() {
    if (actTime && time >= 0) {
        timer.innerHTML = time;
        setTimeout(() => {
            time--;
            updateTime();
        }, 1000);
    } else if (time < 1) {
        winner(true);
    }
}