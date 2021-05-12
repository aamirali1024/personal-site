$('body').scrollspy({ target: '#navbar-example' });

// Element to observe
var abt = document.querySelector('#aboutTab');
    var abtHead = document.querySelector("#aboutHeading");
    var abtBio = document.querySelector("#aboutBio");
var edu = document.querySelector('#educationTab');
var proj = document.querySelector('#projectTab');
var skill = document.querySelector('#skillsTab');
var cont = document.querySelector('#contactTab');


//Create observer
var observer = new IntersectionObserver(function (entries, obs) {
	entries.forEach(function (entry) {
		// Log if the element and if it's in the viewport
		console.log(entry.target);
		console.log(entry.isIntersecting);
        
        let isIntersecting = entry.isIntersecting 

        // add animation class
        if (isIntersecting == true) {
            abt.classList.remove('visibile');
            abt.classList.add('display');
            abtHead.classList.add('fadeClass');
            abtBio.classList.add('fadeClass');

         // dispose observer
        obs.unobserve(entry.target);
        }  
	});
});

// Attach to observer
observer.observe(abt);
// 809 1458 2110 2760 3254