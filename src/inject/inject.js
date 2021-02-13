chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		let myHash = window.location.hash

		if(myHash === "#igautomatebot"){

			let myItems = document.querySelectorAll('.SCxLW a')
			myItems[0].click()
				setInterval(()=>{
					document.querySelector('.ltpMr .wpO6b').click()		
					document.querySelector('.coreSpriteRightPaginationArrow ').click()
				},3000)

		}
		// ----------------------------------------------------------

	}
	}, 10);
});