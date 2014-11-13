$('.sticky a.hamburger').click(function (e) {
	e.preventDefault();
	$('.sticky nav').toggleClass('active');
});

$('.sticky nav > a').click(function (e) {
	$('.sticky nav').removeClass('active');
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 539) {
        $('.sticky').addClass('active');
    } else {
        $('.sticky').removeClass('active');
        $('.sticky nav').removeClass('active');
    }
});

$('nav').onePageNav({
    currentClass: 'selected',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
    }
});

var target_date = new Date('November, 27, 2014 19:00').getTime();
setInterval(function () {
    updateCounter();
}, 1000);

updateCounter();

function updateCounter() {
     // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    $('.counter .days strong').html(days);
    $('.counter .hours strong').html(hours);
    $('.counter .minutes strong').html(minutes);
    $('.counter .seconds strong').html(seconds);
}
