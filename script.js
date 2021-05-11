$('body').scrollspy({ target: '#navbar-example' });

document.addEventListener('scroll', function(e)) {
    var y = Math.round(window.scrollY);

    console.log(y);
}
function scroller() {
    var y = Math.round(window.scrollY);

    console.log(y)
}