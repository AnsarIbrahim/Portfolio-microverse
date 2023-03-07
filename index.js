var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');
var mobileMenuLinks = sideNav.querySelectorAll('a');

mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sideNav.style.left = "-900px";
    });
});

sideNav.style.left = "-900px";

menuBtn.onclick = function () {
    if (sideNav.style.left == "-900px") {
        sideNav.style.left = "0";
    }
    else {
        sideNav.style.left = "-900px";
    }
}

closeBtn.onclick = function () {
    if (sideNav.style.left == "-900px") {
        sideNav.style.left = "0";
    }
    else {
        sideNav.style.left = "-900px";
    }
}