// Get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build functions

function togglePlay() {
    // Ternary operator method:
    const method = video.paused ? 'play' : 'pause';
    video[method]();

//    if(video.paused) {
//        video.play();
//    } else {
//        video.pause();
//    }
}

function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
    
    //alternative:
    //const icon = this.paused ? '►' : '❚ ❚';
    //toggle.textContent = icon;
}

function skip() {
    
}

// Connect event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
