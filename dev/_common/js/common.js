const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

function frame(index){
	TweenLite.set(index, {opacity:1})
}





function setEndFrameLandscape(padding){
	
	const tl = new TimelineMax()
	const {w} = size
	tl.set(".logo", {opacity:0})
	tl.set(['.frame_b', '.bg-main'], {width:w+padding})
	tl.set('.bg-top', {width:padding, height:"100%"})
	tl.set('.bg-round', {x:padding-1})
	tl.set('.bg-main', {height: "100%"})
	tl.set([".frameEnd_a", ".frameEnd_b"], {x:w})
	
}


function setEndFrame(bgHeight){
	
	const tl = new TimelineMax()
	const {h} = size
	tl.set(".logo", {opacity:0})
	tl.set(['.frame_b', '.bg-main'], {height:h+bgHeight})
	tl.set('.bg-top', {height:bgHeight})
	tl.set('.bg-round', {y:bgHeight-1})
	tl.set([".frameEnd_a", ".frameEnd_b"], {y:h})
}

function tttab(){
	const time = .2
	const tl = new TimelineMax()
	tl.add(werd("time", 4))
	tl.add(werd("to", 2), "+=.2")
	tl.add(werd("take", 4), "+=.2")
	tl.add(werd("a", 1), "+=.2")
	tl.add(werd("break", 6), "+=.2")

	
	return tl
}

function werd(word, total){
	const tl = new TimelineMax()
	for(let i=1; i<total+1;i++){
		const id = `#${word}${i}`
		console.log(id);
		tl.set(id, {opacity:0}, "+=.1")
	}
	return tl
}



document.getElementById('banner').addEventListener('click', bgExitHandler, false);

export {size, frame, setEndFrame, tttab, setEndFrameLandscape, werd}