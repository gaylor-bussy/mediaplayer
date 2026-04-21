let play = document.getElementById("play");
let audio = document.getElementById("audio");
let duration = document.getElementById("duration");
audio.addEventListener("loadedmetadata", temps);
function temps() {
    duration.max = audio.duration
}
audio.addEventListener("timeupdate", duree);
function duree() {
    duration.value =  audio.currentTime;
}
//    cheminplay/pause
let lecture = false
play.addEventListener("click", changeIconePlay);
function changeIconePlay() {

    if (lecture == true) {

        play.innerHTML = '<i class="fa-solid fa-play"></i>'
        lecture = false;
        audio.pause()
    }
    else {

        play.innerHTML = '<i class="fa-solid fa-pause"></i>'
        lecture = true;
        audio.play()
    }
}
duration.addEventListener("change" ,function(){
     audio.currentTime=duration.value;

})

function moveSlider(){
    duration.value = audio.currentTime;
}

setInterval(moveSlider,10000);



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




// }
/*let defaultVal = x.defaultValue;
let currentVal = x.value;

if (slider <= 100)*/
