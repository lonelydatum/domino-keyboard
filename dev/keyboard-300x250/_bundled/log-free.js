(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function bgExitHandler(e) {
	Enabler.exit('Background Exit');
}

function frame(index) {
	TweenLite.set(index, { opacity: 1 });
}

function setEndFrameLandscape(padding) {

	var tl = new TimelineMax();
	var w = size.w;

	tl.set(".logo", { opacity: 0 });
	tl.set(['.frame_b', '.bg-main'], { width: w + padding });
	tl.set('.bg-top', { width: padding, height: "100%" });
	tl.set('.bg-round', { x: padding - 1 });
	tl.set('.bg-main', { height: "100%" });
	tl.set([".frameEnd_a", ".frameEnd_b"], { x: w });
}

function setEndFrame(bgHeight) {

	var tl = new TimelineMax();
	var h = size.h;

	tl.set(".logo", { opacity: 0 });
	tl.set(['.frame_b', '.bg-main'], { height: h + bgHeight });
	tl.set('.bg-top', { height: bgHeight });
	tl.set('.bg-round', { y: bgHeight - 1 });
	tl.set([".frameEnd_a", ".frameEnd_b"], { y: h });
}

function tttab() {
	var time = .2;
	var tl = new TimelineMax();
	tl.add(werd("time", 4));
	tl.add(werd("to", 2), "+=.2");
	tl.add(werd("take", 4), "+=.2");
	tl.add(werd("a", 1), "+=.2");
	tl.add(werd("break", 6), "+=.2");

	return tl;
}

function werd(word, total) {
	var tl = new TimelineMax();
	for (var i = 1; i < total + 1; i++) {
		var id = '#' + word + i;
		void 0;
		tl.set(id, { opacity: 0 }, "+=.1");
	}
	return tl;
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

exports.size = size;
exports.frame = frame;
exports.setEndFrame = setEndFrame;
exports.tttab = tttab;
exports.setEndFrameLandscape = setEndFrameLandscape;
exports.werd = werd;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var h = _commonJsCommonJs.size.h;

	var tl = new TimelineMax();
	var speed = .5;
	var ease = Power4.easeOut;
	var bgHeight = 140;

	tl.set('.frame2', { y: h });
	(0, _commonJsCommonJs.setEndFrame)(bgHeight);

	(0, _commonJsCommonJs.frame)(".frame1");
	(0, _commonJsCommonJs.frame)(".frame2");

	tl.add("slot", "+=1.3");
	tl.to(".slot_ball", .4, { x: 213, y: 136, ease: Elastic.easeOut }, "slot");
	tl.to(".slot_handle", .4, { x: 212, y: 40, scaleY: -.4, ease: Elastic.easeOut }, "slot");

	tl.to(['.frame1', '.frame2'], speed, { y: '-=' + h, ease: ease }, "+=.1");

	tl.add((0, _commonJsCommonJs.tttab)());

	(0, _commonJsCommonJs.frame)(".frameEnd_a");
	(0, _commonJsCommonJs.frame)(".frameEnd_b");
	tl.from(".frameEnd_a", speed, { y: h, ease: ease }, "+=2");

	tl.set(".logo", { opacity: 1 });
	tl.to([".frameEnd_a", ".frameEnd_b"], 1.2, { y: '-=' + (h + bgHeight), ease: ease }, "+=3.6");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
