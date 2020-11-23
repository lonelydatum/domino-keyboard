import {size, frame, setEndFrame, tttab, werd} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const {h} = size
	const tl = new TimelineMax()
	
	const ease = Power4.easeOut
	
	
	
	
	
	frame(".frame1")
	// return
	
	
	tl.add(werd("time", 4), "+=1")
	tl.add(werd("to", 2), "+=.2")
	tl.to(".frame1", .4, {y:-35}, "+=.6")
	tl.add(werd("take", 4), "+=.2")
	tl.add(werd("a", 1), "+=.2")
	tl.to(".frame1", .4, {y:-70}, "+=.6")
	tl.add(werd("break", 6), "+=.2")
	tl.to(".t1a", .3, {y:0}, "+=1")
	tl.set(".logo",  {opacity:1})
	tl.to([".t1a", ".txt_end"], .7, {x:"-=300"}, "+=3.6")
	
	
}


start()

module.exports = {};

