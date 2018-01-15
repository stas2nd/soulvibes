var playbtn = document.querySelector('.player__button_play');

var listbtn = document.querySelector('.player__button_qu');
var playlist = document.querySelector('.player__playlist');

var eventone = document.querySelector('.schedule__item_one');
if (eventone) {
    var popupone = document.querySelector('.schedule__popup_one');
}


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

if (popupone) {
    eventone.addEventListener('click', function (evt) {
        evt.preventDefault();
        popupone.classList.toggle('display-flex');
    });
}
