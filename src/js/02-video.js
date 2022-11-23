import playerForV from '@vimeo/player';
let throttleForVideo = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new playerForV(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

 player.on('timeupdate', throttleForVideo((data) => {
    const stringCurrentTimeOfVideo =JSON.stringify(data)
     localStorage.setItem('videoplayer-current-time', stringCurrentTimeOfVideo);
     
    
 },1000));

   let getCurrentTime = localStorage.getItem('videoplayer-current-time');
let secondsValueOfVideo = JSON.parse(getCurrentTime);
let seconds = secondsValueOfVideo.seconds;

player.setCurrentTime(seconds).then(function(second) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });