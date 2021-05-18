$('body').scrollspy({ target: '#navbar-example' });

// SVG
var braceAni = document.querySelector('#braceAni');

// Element to observe
var abt = document.querySelector('#aboutTab');
    var abtHead = document.querySelector('#aboutHeading');
    var abtBio = document.querySelector('#aboutBio');
var edu = document.querySelector('#educationTab');
    var eduHead = document.querySelector('#eduHeading');
var proj = document.querySelector('#projectTab');
    var projHead = document.querySelector("#projectHeading")
var skill = document.querySelector('#skillsTab');
    var skillsHead = document.querySelector('#skillsHead');
var cont = document.querySelector('#contactTab');
    var contHead = document.querySelector('#contHead');


//Create observer
var observerA = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
		// Log the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            abt.classList.remove('visible');
            abt.classList.add('display');
            abtHead.classList.add('fadeClass');
            abtBio.classList.add('fadeClassB');
            braceAni.addEventListener('animationend', function() {
                braceAni.beginElement();
            }, false);

         // dispose observer
         obs.unobserve(entry.target);
        }  
	});
});

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
            edu.classList.add('display');
            eduHead.classList.add('fadeClass');


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
            proj.classList.add('display');
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
            skills.classList.remove('visible');
            skills.classList.add('display');
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
            cont.classList.add('display');
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