chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		let myHash = window.location.hash

		if(myHash === "#igautomatebot"){

			let counter = 0

			let myItems = document.querySelectorAll('.SCxLW a')
			myItems[0].click()

			const bot = setInterval(()=>{
				    counter++
					document.querySelector('.ltpMr .wpO6b').click()		
					document.querySelector('.coreSpriteRightPaginationArrow ').click()
					console.log(`Post Liked : ${counter}`)
				},3000)

				document.querySelector('body > div._2dDPU.CkGkG > div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG > button').onclick = () => {
					clearInterval(bot)
				}


		}
		// ----------------------------------------------------------

	}
	}, 10);
});