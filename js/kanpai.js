$(document).ready(function () {
    $('.kanpai').lettering();
});
$('.play').click(function () {
    let play = new TimelineMax();
    play.staggerFromTo('.kanpai span', 0.5,
        {
            ease: Back.easeOut.config(1.7),
            opacity: 0,
            bottom: -80
        },
        {
            ease: Back.easeOut.config(1.7),
            opacity: 1,
            bottom: 0
        }, 0.05);
})