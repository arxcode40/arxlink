"use strict";

$(document).ready(function() {
	new ClipboardJS("#clipboard");

	$("#currentYear").text(new Date().getFullYear());
});

$(document).on("scroll", function() {
  if ($(document).scrollTop() > 20) {
    $("#scrollToTop").fadeIn("fast");
  } else {
    $("#scrollToTop").fadeOut("fast");
  }
});