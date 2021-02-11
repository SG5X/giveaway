var countdown = document.querySelector(".timer");
var d_container = document.querySelector(".days__number");
var h_container = document.querySelector(".hours__number");
var m_container = document.querySelector(".minutes__number");
var s_container = document.querySelector(".sec__number");
var finalDate = new Date("Feb 31, 2021").getTime();
var d, h, m, s;


setInterval(function () {

    var today = new Date().getTime();
    var timeLeft = (finalDate - today) / 1000;

    d = parseInt( timeLeft / 86400 );
    timeLeft = timeLeft % 86400;

    h = parseInt( timeLeft / 3600 ).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    timeLeft = timeLeft % 3600;

    m = parseInt( timeLeft / 60 );
    s = parseInt( timeLeft % 60 );

    d_container.innerHTML = d + '<span class="divider">:</span>';
    h_container.innerHTML = h + '<span class="divider">:</span>';
    m_container.innerHTML = m + '<span class="divider">:</span>';
    s_container.innerHTML = s;

}, 1000);
