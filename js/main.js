// Create the Audio objects once
var bmwAudio = new Audio('./audio/bmw-shift.mp3');
var ducatiAudio = new Audio('./audio/ducati-start.mp3');
var hondaAudio = new Audio('./audio/honda.mp3');

function bmwEvent() {
  if (bmwAudio.paused) {
    bmwAudio.play();
  }
}

function ducatiEvent() {
  if (ducatiAudio.paused) {
    ducatiAudio.play();
  }
}

function hondaEvent() {
  if (hondaAudio.paused) {
    hondaAudio.play();
  }
}

document.getElementById('BMW').addEventListener('click', bmwEvent);
document.getElementById('ducati').addEventListener('click', ducatiEvent);
document.getElementById('honda').addEventListener('click', hondaEvent);
