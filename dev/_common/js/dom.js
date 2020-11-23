function domInit(h, scaleX){
	const tl = new TimelineMax()
	tl.set(".frame1 .bg", {height:h})
	tl.set(".video", {y:h, scaleX})
}



function video(frames=5, speed=.06){
	
	const tl = new TimelineMax()
	for(let i=1;i<frames+1;i++){
		console.log(i);
		tl.set(`#video_${i}`, {opacity:1}, `+=${speed}`)
	}

	tl.to(".t1a", .1, {opacity:0})
	tl.from(".t1b", .3, {opacity:0}, "+=.2")	

	
	return tl
}

export {domInit, video}