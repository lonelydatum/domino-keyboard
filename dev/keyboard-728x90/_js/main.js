import {size, frame, setEndFrame, tttab, werd} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power2.easeOut
	const {h} = size
	const tl = new TimelineMax()
	
	const ease = Power4.easeOut
	
	
	
	
	
	frame(".frame1")
	
	
	tl.add(werd("time", 4))
	tl.add(werd("to", 2), "+=.2")
	tl.add(werd("take", 4), "+=.2")
	tl.add(werd("a", 1), "+=.2")
	tl.to(".frame1", .6, {y:-47}, "+=.5")
	tl.add(werd("break", 6), "+=.2")
	tl.to(".round", .6, {x:-728}, "+=3")


	
	
}


start()

module.exports = {};

