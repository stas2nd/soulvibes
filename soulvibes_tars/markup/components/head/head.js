var playbtn = document.querySelector('.player__button_play');
var listbtn = document.querySelector('.player__button_qu');
var playlist = document.querySelector('.player__playlist');

if (playbtn) {
    playbtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (playbtn.classList.contains('player__button_pause')) {
            playbtn.classList.remove('player__button_pause');
        } else {
            playbtn.classList.add('player__button_pause');
        }
    });
}

if (listbtn && playlist) {
    listbtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        playlist.classList.toggle('display_block');
    });
}
