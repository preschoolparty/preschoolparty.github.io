window.onload = function(){
	var taglines = [ 
		"Chuego approved!",
		"Bring your own bistro!",
		"Wear a mask!",
		"Good girls just don't get caught!",
		"Debatably not a cult!",
		"Got any grapes?",
		"*airhorn sounds*",
		"Works on some refrigerators!",
		"Effervescent!",
		"Texas shaped waffle iron not included!",
		"Contains swag!",
		"Please don't eat the Ashley bread!",
		"\"Tired, checked in.\""
	];
	var randomItem = taglines[Math.floor(Math.random()*taglines.length)];

    document.getElementById('tagline').innerHTML = randomItem;
};