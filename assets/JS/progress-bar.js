const player = document.querySelector('.video-container');
const video = player.querySelector('.video-player');
const progress_top = player.querySelector('.progress_top');
const progressBartop = player.querySelector('.progress_filled');
const toggle = player.querySelector('.play-button');
const skipButtons = player.querySelectorAll('[data-skip]');
const bigButton = player.querySelector('.bigplay-button')
const currentVideoTime = player.querySelector('.current');
const videoDuration = player.querySelector('.duration');
const soundBtn = player.querySelector('.sound-button');
const volumeVideo = player.querySelector('.progress-sound');
const videoProgress = player.querySelector('.progress');
const fullscreenBtn = player.querySelector('.fullscreen-button')

let speedrate = 1;

function videoReset() {
    video.load();
    video.pause();
    toggle.className = "play-button";
    bigButton.style.visibility = 'visible';
}

//hotkeys 
document.onkeydown = function(e) {
    if (e.code === 'KeyM') {
        if (video.muted = !video.muted) {
            soundBtn.className = 'muted';
        } else {
            soundBtn.className = 'sound-button';
        }
    }

    if (e.code === 'KeyF') {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    //Increase/Decrease volume 5%.
    if (e.code === 'ArrowUp') {
        let a = 0;
        let t = a + 5;
        video.volume = t / 100;
        var color = 'linear-gradient(to right, var(--dark-grad) 0%, var(--dark-grad)' + a + '%, var(--light-grad)' + a + '%, var(--light-grad) 100%)';
        volumeVideo.style.background = color;
    }

    //Seek forward 10 seconds in player.
    if (e.code === 'KeyL') {
        video.currentTime += 10;
    }

    //Seek backward 10 seconds in player.
    if (e.code === 'KeyJ') {
        video.currentTime -= 10;
    }

    //Seek backward/forward 5 seconds.
    if (e.code === 'ArrowLeft') {
        video.currentTime -= 5;
    } else if (e.code === 'ArrowRight') {
        video.currentTime += 5;
    }

    //space pause
    if (e.code === 'Space') {
        togglePlayPaused();
    }

    //Speed up the video playback rate.
    if (e.code === 'Period') {
        speedrate = speedrate + 0.25;
        if (speedrate > 2.0) {
            speedrate = 1;
        }
        video.playbackRate = speedrate;
    }

    //Slow down the video playback rate.
    if (e.code === 'Comma') {
        speedrate = -0.25 + speedrate;
        if (speedrate === 0) {
            speedrate = 1;
        }
        video.playbackRate = speedrate;
    }
};


//video speedrate 
skipButtons[1].addEventListener('click', () => {
    speedrate = speedrate + 0.25;
    if (speedrate > 2.0) {
        speedrate = 1;
    }
    video.playbackRate = speedrate;
})

skipButtons[0].addEventListener('click', () => {
    speedrate = -0.25 + speedrate;
    if (speedrate === 0) {
        speedrate = 1;
    }
    video.playbackRate = speedrate;
})






// regular video progress function 
videoProgress.addEventListener('click', (e) => {
    const timeProgress = (e.offsetX / videoProgress.offsetWidth) * video.duration;
    video.value = timeProgress;
});

function videoRegprog() {
    const videoPosbottom = (video.currentTime / video.duration) * 100;
    videoProgress.style.background = 'linear-gradient(to right, var(--dark-grad) 0%, var(--dark-grad)' + videoPosbottom + '%, var(--light-grad)' + videoPosbottom + '%, var(--light-grad) 100%)';
    videoProgress.value = videoPosbottom;
}

videoProgress.addEventListener('change', function(e) {
    let a = e.currentTarget.value;
    video.currentTime = video.duration * (a / 100);
    var color = 'linear-gradient(to right, var(--dark-grad) 0%, var(--dark-grad)' + a + '%, var(--light-grad)' + a + '%, var(--light-grad) 100%)';
    videoProgress.style.background = color;

})


video.addEventListener('timeupdate', videoRegprog);

//play-pause function 
function togglePlayPaused() {
    if (video.paused) {
        toggle.className = "pause";
        bigButton.style.visibility = 'hidden';
        video.play();

    } else {
        toggle.className = "play-button";
        bigButton.style.visibility = 'visible';
        video.pause();
    }
}


//volume
volumeVideo.addEventListener('change', function(e) {
    let a = e.currentTarget.value;
    video.volume = a / 100;
    var color = 'linear-gradient(to right, var(--dark-grad) 0%, var(--dark-grad)' + a + '%, var(--light-grad)' + a + '%, var(--light-grad) 100%)';
    volumeVideo.style.background = color;
})


//mute btn
soundBtn.addEventListener('click', () => {
    if (video.muted = !video.muted) {
        soundBtn.className = 'muted';
    } else {
        soundBtn.className = 'sound-button';
    }
})

//fullscreen
fullscreenBtn.addEventListener('click', () => {
    video.requestFullscreen();
})



//current video time and  video duration
const videoTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

    currentVideoTime.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`;
    videoDuration.innerHTML = `${durationMinutes}:${durationSeconds}`;
}


bigButton.onclick = function() {
    togglePlayPaused();
}

toggle.onclick = function() {
    togglePlayPaused();
}

video.addEventListener('timeupdate', handleProgress);
video.addEventListener('timeupdate', videoTime);
video.addEventListener('click', togglePlayPaused);