// Countdown Counter

let daysItem = document.getElementById("days");
let hourItem = document.getElementById("hour");
let minItem = document.getElementById("min");
let secItem = document.getElementById("sec");

let countDown = () => {
    let futureDate = new Date("20 nov 2023");
    let currenDate = new Date();
    let myDate = futureDate - currenDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hour = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 24;
    let sec = Math.floor(myDate / 1000) % 24;


    daysItem.innerText = days;
    hourItem.innerText = hour;
    minItem.innerText = min;
    secItem.innerText = sec;
}

countDown();

setInterval(() => {
    countDown();
}, 1000);


// SCROLL BACK TO TOP/ 

function scrollTopback() {
    let scrollTopbutton = document.querySelector("#scrollUp");

    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll >= 50) {
            scrollTopbutton.classList.add('scrollActive');
        } else {
            scrollTopbutton.classList.remove('scrollActive');
        }
    }
}
scrollTopback();



// NAV HIDE 

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.collapse.navbar-collapse');

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})