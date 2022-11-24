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

   

player.setCurrentTime(() => {
    let getCurrentTime = localStorage.getItem('videoplayer-current-time');

    if (getCurrentTime) {
    let secondsValueOfVideo = JSON.parse(getCurrentTime);
return secondsValueOfVideo.seconds;
    };
    return;
}
    
);
