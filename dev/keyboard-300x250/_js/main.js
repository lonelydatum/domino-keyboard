import {size, frame, setEndFrame, tttab} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power2.easeOut
	const {h} = size
	const tl = new TimelineMax()
	const speed=.5
	const ease = Power4.easeOut
	const bgHeight = 140
	
	tl.set('.frame2', {y:h})
	setEndFrame(bgHeight)
	
	
	frame(".frame1")	
	frame(".frame2")
	
	
	tl.add("slot", "+=1.3")
	tl.to(".slot_ball", .4, {x:213, y:136, ease:Elastic.easeOut}, "slot")
	tl.to(".slot_handle", .4, {x:212, y:40, scaleY:-.4,  ease:Elastic.easeOut}, "slot")

	
	tl.to(['.frame1', '.frame2'], speed, {y:`-=${h}`, ease}, "+=.1")

	
	tl.add(tttab())
	
	frame(".frameEnd_a")
	frame(".frameEnd_b")
	tl.from(".frameEnd_a", speed, {y:h, ease}, "+=2")
	
	tl.set(".logo", {opacity:1})
	tl.to([".frameEnd_a", ".frameEnd_b"], 1.2, {y:`-=${h+bgHeight}`, ease}, "+=3.6")
	
	
}


start()

module.exports = {};

