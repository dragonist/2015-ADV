// style="-webkit-transform:translateY(-255px);"
var view = document.getElementById('view');

if (typeof window.ontoustart !== 'undefined') {
    view.addEventListener('touchstart', myevent.touchstart);
    view.addEventListener('touchmove', myevent.touchmove);
    view.addEventListener('touchend', myevent.touched);
};

view.addEventListener('mousedown', myevent.touchstart);
view.addEventListener('mousemove', myevent.touchmove);
view.addEventListener('mouseup', myevent.touched);

var myevent = (function() {
    var pressed = false;
    var y1, y2, distance;
    var offset = 0;
    var min = 0; 
    var max = parseInt(getComputedStyle(view)) - innerHeight;

    function touchstart(e) {
        pressed = true;
        y1 = ypos(e);
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function touchmove(e) {
       	if (pressed) {
       		y2 = ypos(e);
       		distance = y1 - y2;
       		if (distance>2 || distance<-2) {
       			y2 = distance;
       			scroll(offset + distance);
       		};
       	};
    }

    function touched(e) {
        pressed = false;
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function ypos(e) {
        //touchevent
        if (e.targetTouches && (e.targetTouches.length>=1)) {
        	return e.targetTouches[0].clientY;
        };
        //mouse event
        return e.clientY;
    }
    function scroll(y) {
    	if (y > max) {
    		offset = max;
    	}else if (y< min) {
    		offset = min;
    	}else{
    		offset = y;
    	};
    }

    return {
        touchstart: touchstart,
        touchmove: touchmove,
        touched: touched
    }
})();