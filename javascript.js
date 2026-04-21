let chemin = document.getElementById("play");
let audio = document.getElementById("audio");
//    cheminplay/pause
let lecture = false
chemin.addEventListener("click", changeIconePlay);
function changeIconePlay() {

    if (lecture == true) {
        let valeur = parseInt(audio.value, 0.1);
        valeur = Math.min(100, valeur + 0.1);
        audio.value = valeur;
        chemin.innerHTML = '<i class="fa-solid fa-play"></i>'
        lecture = false;
       audio.pause()
    }
    else {

        chemin.innerHTML = '<i class="fa-solid fa-pause"></i>'
        lecture = true;
       
          audio.play()
    }
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



// function playAudio() {
//     audio.play();
// }
// function pauseAudio() {
//  chemin.pause();

// }
/*let defaultVal = x.defaultValue;
let currentVal = x.value;

if (slider <= 100)*/
