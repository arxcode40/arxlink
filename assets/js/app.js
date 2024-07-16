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

$(document).on('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#scrollTop').fadeIn('fast');
  } else {
    $('#scrollTop').fadeOut('fast');
  }
})
