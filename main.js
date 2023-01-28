// tady je místo pro náš program

let odstavec = document.querySelector(".odstavec");

function zmenaPisma() {
    odstavec.classList.toggle("odstavecPismoTucnost");
}

function zmenaBarvyPisma() {
    odstavec.classList.toggle("odstavecPismoBarva");
}

/*
function zvetseniPisma() {
    let staraVelikost = parseInt(odstavec.style.fontSize);
    let novaVelikost = staraVelikost + 1;
    odstavec.style.fontSize = novaVelikost + "px";
    console.log(novaVelikost);
}
*/

function zvetseniPisma() {
    let staraVelikost = parseInt(odstavec.style.fontSize);
    if (staraVelikost < 25) {
        let novaVelikost = staraVelikost + 1;
        odstavec.style.fontSize = novaVelikost + "px";
        console.log(novaVelikost);
    }
    else {
        odstavec.style.fontSize = staraVelikost;
    }
}

// přehrávač
let prehravac = document.querySelector(".mujPrehravac");

function spustAudio() {
    prehravac.play();
}

function zastavAudio() {
    prehravac.pause();
}

function resetAudio() {
    prehravac.currentTime = 10;
}

function nastavZvuk_0() {
    prehravac.volume = 0;
}

function nastavZvuk_50() {
    prehravac.volume = 0.5;
}

function nastavZvuk_100() {
    prehravac.volume = 1;
}

let tlacitko2 = document.querySelector(".tlacitko-2");
function zacatekAudio() {
    if (prehravac.loop == false) {
        prehravac.loop = true;
        prehravac.load();
        console.log(prehravac.loop);
        tlacitko2.textContent = "START ON";
    }
    else {
        prehravac.loop = false;
        console.log(prehravac.loop);
        tlacitko2.textContent = "START OFF";
    }
}


