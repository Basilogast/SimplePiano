const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keyCheckBox = document.querySelector(".key-checkbox input");
const volumehandle = document.querySelector(".volume-slider input");
let keyList=[];
let audio =  new Audio('tunes/a.wav');
const playtune = (key) => {
console.log(key);
audio.src = `tunes/${key}.wav`; //?? ``
console.log(audio.src);
audio.play();
}

pianoKeys.forEach(key => {
keyList.push(key.dataset.key);
key.addEventListener("click", () => playtune(key.dataset.key));
});

const showHideKeys = () => {
    pianoKeys.forEach(key => {
    key.classList.toggle("hide");
    });
    }
const volumeupdown = (event) => {
audio.volume = event.target.value; //event.target la cai button; .value la cai value cua no
}

const pressedkey = (event) => {
playtune(event.key);
}

volumehandle.addEventListener("input",volumeupdown);
console.log(audio.volume);
keyCheckBox.addEventListener("click",showHideKeys);
console.log(keyList);
document.addEventListener("keydown",pressedkey);


