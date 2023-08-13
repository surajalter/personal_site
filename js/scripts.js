var hobbies = ["Coder", "Web developer", "Footballer", "Gamer", "Cinephile"];
var i = 0;
var j = 0;
var currentHobby = "";
var isDeleting = false;
var interval;

//Typing effect of hobbies
function typeEffect() {
	if (i < hobbies.length) {
		if (!isDeleting && j <= hobbies[i].length) {
			currentHobby = hobbies[i].substring(0, j);
			j++;
		}

		if (isDeleting && j >= 0) {
			currentHobby = hobbies[i].substring(0, j);
			j--;
		}

		if (j === hobbies[i].length) {
			isDeleting = true;
		}

		if (isDeleting && j === 0) {
			isDeleting = false;
			i++;
			if (i === hobbies.length) {
				i = 0;
			}
		}

		document.getElementById("type-effect").innerHTML = currentHobby;
	}
}

interval = setInterval(typeEffect, 250); // Speed of typing effect

//Navbar collapse on click
$(document).ready(function () {
	$(".navbar-nav>li>a").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});
});

//Scrolling down to cooperate with navbar
$(document).ready(function () {
	// Listen for hash changes
	window.addEventListener(
		"hashchange",
		function () {
			// Scroll window up by 70px
			window.scrollBy(0, -70);
		},
		false
	);
});
