import {size, frame, setEndFrameLandscape} from '../../_common/js/common.js'
import {domInit, video} from '../../_common/js/dom.js'



function start(){
	TweenLite.defaultEase = Power2.easeOut
	const {h, w} = size
	const tl = new TimelineMax()
	const speed = .4
	const ease = Power4.easeOut
	const bgHeight = 70
	
	
	setEndFrameLandscape(bgHeight)

	
	// domInit(105, -1)
	
	
	frame(".frame1")	

	tl.add(video(17), "+=1.5")

	
	
	tl.to(['.frame1', '.frameEnd_a'], speed, {x:`-=${w}`, ease}, "+=3")

	
	frame(".frameEnd_a")
	frame(".frameEnd_b")
	
	tl.set(".logo", {opacity:1})

	tl.to([".frameEnd_a", ".frameEnd_b"], 1.2, {x:`-=${w+bgHeight}`, ease}, "+=4")
	
	
}


start()


module.exports = {};

