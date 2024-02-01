function shareLink() {
	navigator.share({
		title: 'ArX Link',
		text: 'ArX Link',
		url: location.href
	})
}