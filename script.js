$('body').scrollspy({ target: '#navbar-example' });

// SVG
var braceAni = document.querySelector('#braceAni');
var gradient = document.querySelector('#test');
var gradientB = document.querySelector('#test2');

// Element to observe
var abt = document.querySelector('#aboutTab');
    var abtHead = document.querySelector('#aboutHeading');
    var abtBio = document.querySelector('#aboutBio');
    var abtPor = document.querySelector('#bio-pic');
var edu = document.querySelector('#educationTab');
    var eduHead = document.querySelector('#eduHeading');
    var w3c = document.querySelector('#w3c');
    var rutgers = document.querySelector('#rutgers');
    var degree = document.querySelector('#degree');
    var cert = document.querySelector('#cert');
var proj = document.querySelector('#projectTab');
    var projHead = document.querySelector("#projectHeading");
    var tabman = document.querySelector("#tabman");
    var tabmanDesc = document.querySelector('#tabman-desc');
    var pogflix = document.querySelector('#pogflix');
    var pogflixDesc = document.querySelector('#pogflix-desc');
var skill = document.querySelector('#skillsTab');
    var skillsHead = document.querySelector('#skillsHead');
var cont = document.querySelector('#contactTab');
    var contHead = document.querySelector('#contHead');

const config = {
    threshold:0.5
};



//Create observer
var observerA = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation classes and visibility
        if (isIntersecting == true) {
            abt.classList.remove('visible');
            abtHead.classList.add('fadeClass');
            // after heading animation
            abtHead.addEventListener('animationend', function(){
                gradient.beginElement();
            }, false);
            // after brace animation
            gradient.addEventListener('endEvent', function(){
                abtBio.classList.remove('visible');
                abtBio.classList.add('fadeClass');
                abtPor.classList.remove('visible');
                abtPor.classList.add('scaleClass');

            },false);

         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
}, config);

//Create observer
var observerB = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            edu.classList.remove('visible');
            eduHead.classList.add('fadeClass');
            // after heading animation
            eduHead.addEventListener('animationend', function(){
                gradientB.beginElement();
            }, false);
            // after brace animation
            gradientB.addEventListener('endEvent', function(){
                w3c.classList.remove('visible');
                rutgers.classList.remove('visible');
                cert.classList.remove('visible');
                degree.classList.remove('visible');

                w3c.classList.add('fadeClass');
                rutgers.classList.add('fadeClass');
                cert.classList.add('fadeClass');
                degree.classList.add('fadeClass');

            },false);


         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
});

var observerC = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            proj.classList.remove('visible');
            projHead.classList.add('fadeClass');


         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
});

var observerD = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            skill.classList.remove('visible');
            skillsHead.classList.add('fadeClass');


         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
});

var observerE = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            cont.classList.remove('visible');
            contHead.classList.add('fadeClass');


         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
});
// Attach to observer
observerA.observe(abt);
observerB.observe(edu);
observerC.observe(proj);
observerD.observe(skill);
observerE.observe(cont);