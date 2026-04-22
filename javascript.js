//    play/pause

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

let volume = parseInt(slider.value);




plus.addEventListener("click", () => {


    volume = Math.min(100, volume + 10);
    audio.volume = audio.volume + 0.1
    console.log(slider.value);


    slider.value = volume;

});
moins.addEventListener("click", () => {

    volume = Math.max(0, volume - 10);
    audio.volume = audio.volume - 0.1
    console.log(slider.value);


    slider.value = volume;

});

slider.addEventListener("input", function () {
    audio.volume = (slider.value / 100);

})

function moveSlider() {
    slider.value = audio.volume;
}
// suivant /précédent

let playlist = ["musique/konten_kreator-vanguard-of-the-eternal-storm-464951.mp3", "musique/nra-lab-stomps-time-stomper-239522.mp3", "musique/denys_brodovskyi-sandbreaker-379630.mp3"];
let playIndex = 0;

audio.src = playlist[playIndex];


const suivant = document.getElementById("suivant")
const precedent = document.getElementById("précédent")


suivant.addEventListener("click", function () {
    if (playIndex == playlist.length - 1) {
        playIndex = -1;
    }
    playIndex++;
    audio.src = playlist[playIndex];
}
)
precedent.addEventListener("click", function () {
    if (playIndex == 0) {
        playIndex = playlist.length;
    }
    playIndex--;
    audio.src = playlist[playIndex];


})
// fin piste
audio.addEventListener("ended", function () {
    if (playIndex == playlist.length - 1) {
        playIndex = -1;
    }
    playIndex++;
    audio.src = playlist[playIndex];
    audio.play()
}
);

// random
const random = document.getElementById("random")
random.addEventListener("click", function () {
    playIndex= Math.floor(Math.random()*3)+0;
audio.src = playlist[playIndex];
console.log(playIndex)
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