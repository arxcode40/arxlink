"use strict";

function shareLink() {
	navigator.share({
		title: 'ArX Link',
		url: location.href
	});
}

$(document).ready(function() {
	$('#currentYear').text(new Date().getFullYear());
})
