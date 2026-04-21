let play = document.getElementById("play");
let audio = document.getElementById("audio");
let duration = document.getElementById("duration");
audio.addEventListener("loadedmetadata", temps);
function temps() {
    duration.max = audio.duration
}
audio.addEventListener("timeupdate", duree);
function duree() {
    duration.value = audio.currentTime;
}
//    cheminplay/pause

play.addEventListener("click", changeIconePlay);
function changeIconePlay() {

    if (audio.paused) {
        play.innerHTML = '<i class="fa-solid fa-pause"></i>'


        audio.play()
    }
    else {

        play.innerHTML = '<i class="fa-solid fa-play"></i>'

        audio.pause()
    }
}
duration.addEventListener("input", function () {
    audio.currentTime = Number(duration.value);

})

function moveSlider() {
    duration.value = audio.currentTime;
}





// java volume

let slider = document.getElementById("vrange");

const plus = document.getElementById("plus")
const moins = document.getElementById("moins")




plus.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.min(100, valeur + 10);
    console.log(slider.value);


    slider.value = valeur;

});
moins.addEventListener("click", () => {
    let valeur = parseInt(slider.value, 10);
    valeur = Math.max(0, valeur - 10);
    console.log(slider.value);


    slider.value = valeur;

});





// audio.play() : lance la lecture (action)
// audio.pause() : met en pause (action)
// audio.paused : dit si c’est en pause (true/false) (état)

// audio.duration : durée totale du son (info, ne pas modifier)
// audio.currentTime : position actuelle (tu peux lire et modifier)

// duration.value (ton slider) : valeur de l’UI
// duration.max : limite haute du slider

// Événements utiles:
// loadedmetadata : quand la durée est dispo
// timeupdate : pendant la lecture (mettre à jour le slider)
// input (sur slider) : quand l’utilisateur déplace la barre (mettre à jour audio.currentTime)