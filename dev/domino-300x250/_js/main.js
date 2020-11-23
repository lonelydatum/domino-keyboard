import {size, frame, setEndFrame} from '../../_common/js/common.js'
import {domInit, video} from '../../_common/js/dom.js'

function start(){
	TweenLite.defaultEase = Power2.easeOut
	const {h} = size
	const tl = new TimelineMax()
	const speed = .5
	const ease = Power4.easeOut
	const bgHeight = 140
	
	setEndFrame(bgHeight)

	
	// domInit(105, -1)
	
	
	frame(".frame1")	

	tl.add(video(17, .05), "+=1.5")

	
	
	tl.to(['.frame1', '.frameEnd_a'], speed, {y:`-=${h}`, ease}, "+=3")

	
	frame(".frameEnd_a")
	frame(".frameEnd_b")
	
	tl.set(".logo", {opacity:1})
	tl.to([".frameEnd_a", ".frameEnd_b"], 1.2, {y:`-=${h+bgHeight}`, ease}, "+=4")
	
	
}


start()


module.exports = {};

