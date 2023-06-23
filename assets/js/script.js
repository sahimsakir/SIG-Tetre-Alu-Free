function myFunction(x) {
    var heroTxt = document.querySelector('.hero-text');
    if (x.matches) { // If media query matches
        heroTxt.classList.add("order-first");
    } else {
        heroTxt.classList.remove("order-first")
    }
}

var x = window.matchMedia("(max-width: 414px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);