// Play sound
function playSound(e) {
    if (e.keyCode) { // if keyboard button, get keycode
        dataKey = e.keyCode; 
    } else { // else get dataset key from mouse press
        dataKey = e.srcElement.dataset.key;
    }
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    
    if (!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
}

// Add event listeners & remove transition effects after transition end
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('mousedown', playSound);
});
window.addEventListener('keydown', playSound);


// Remove transition function
function removeTransition() {
    this.classList.remove('playing');
}


 
