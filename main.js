// tady je místo pro náš program

// písmo v odstavci po najetí myši ztuční

let odstavec = document.querySelector(".odstavec");

function zmenaPisma() {
    odstavec.classList.toggle("odstavecPismoTucnost");
}

// přidává / odebírá třídu, která barvu písma v odstavci mění na červenou

function zmenaBarvyPisma() {
    odstavec.classList.toggle("odstavecPismoBarva");
}

// zvětší písmo o 1px oproti jeho aktuální velikosti

function zvetseniPisma() {
    let staraVelikost = parseInt(odstavec.style.fontSize);
    let novaVelikost = staraVelikost + 1;
    odstavec.style.fontSize = novaVelikost + "px";
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
    prehravac.currentTime = 0;
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



