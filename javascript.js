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
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");

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

let playlist = [
    {
        son: "musique/konten_kreator-vanguard-of-the-eternal-storm-464951.mp3",
        image: "img1",
        titre: "titre1"
    },
    {
        son: "musique/denys_brodovskyi-sandbreaker-379630.mp3",
        image: "img2",
        titre: "titre2"
    },


    {
        son: "musique/nra-lab-stomps-time-stomper-239522.mp3",
        image: "img3",
        titre: "titre3"
    }
];






let playIndex = 0;

audio.src = playlist[playIndex].son;


const suivant = document.getElementById("suivant")
const precedent = document.getElementById("précédent")


suivant.addEventListener("click", function () {
    if (playIndex == playlist.length - 1) {
        playIndex = -1;
    }
    playIndex++;
    audio.src = playlist[playIndex].son;
}
)
precedent.addEventListener("click", function () {
    if (playIndex == 0) {
        playIndex = playlist.length;
    }
    playIndex--;
    audio.src = playlist[playIndex].son;


})
// fin piste
audio.addEventListener("ended", function () {
    if (playIndex == playlist.length - 1) {
        playIndex = -1;
    }
    playIndex++;
    audio.src = playlist[playIndex].son;
    audio.play()
}
);

// random
const random = document.getElementById("random")
random.addEventListener("click", function () {
    playIndex = Math.floor(Math.random() * 3) + 0;
    audio.src = playlist[playIndex].son;
    console.log(playIndex)
});

// image


// const image1 = document.getElementById("img1") 
// const image2 = document.getElementById("img2")
// const image3 = document.getElementById("img3")
// const titre1 = document.getElementById("titre1")
// const titre2 = document.getElementById("titre2")
// const titre3 = document.getElementById("titre3")

// image1.addEventListener("click", function() {
//    if(audio.paused){
//     audio.src = playlist[0];
//      audio.play()

//    }
//     else {  audio.pause()
//     }
// })

// image2.addEventListener("click", function() {
//    if(audio.paused){
//     audio.src = playlist[1];
//      audio.play()

//    }
//     else {  audio.pause()
//     }
// })

// image3.addEventListener("click", function() {
//    if(audio.paused){
//     audio.src = playlist[2];
//      audio.play()

//    }
//     else {  audio.pause()
//     }
// })
const image = document.getSelection("album")

image.addEventListener("click", function () {
    if (audio.paused) {

        audio.src = playlist[playIndex].son
        audio.play()

    }
    else {
        audio.pause()
    }
})

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