var shape = (function() {
    function Square() {
        if (!Square.num) {
            Square.num = 0;
        }
        Square.num += 1;
        this.element = document.createElement('div');
        this.element.classList.add("square");
        this.element.textContent = Square.num + "";

        this._onMouseMove = this._onMouseMove.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);
    }

    Square.prototype.setPosition = function(x, y) {
        this.element.style.top = y + 'px';
        this.element.style.left = x + 'px';
        return this;
    };
    Square.prototype.startDragging = function(e) {
        this.element.classList.add("dragging");
        this._onDragStart(e);
        return this;
    };
    Square.prototype.setContainer = function(elArea) {
        this.container = elArea;
        return this;
    };
    Square.prototype.setParent = function(elBody) {
        this.elBody = elBody;
        this.elBody.appendChild(this.element);
        return this;
    };
    Square.prototype._onDragStart = function(event) {
        this._startX = event.pageX;
        this._startY = event.pageY;
        this._startTop = parseInt(this.element.style.top);
        this._startLeft = parseInt(this.element.style.left);

        document.addEventListener('mousemove', this._onMouseMove);
        document.addEventListener('mouseup', this._onMouseUp);
    };

    Square.prototype._onMouseMove = function(event) {
        var diffX = event.pageX - this._startX,
            diffY = event.pageY - this._startY;
        var recentX = this._startTop + diffY;
        var recentY = this._startLeft + diffX;
        this.element.style.top = recentX + 'px';
        this.element.style.left = recentY + 'px';

        if (Square.list) {
            var result = Square.list.some(function(tempSquare) {
                var elX = parseInt(tempSquare.style.top);
                var elY = parseInt(tempSquare.style.left);
                return isConflict(recentX, elX, 40, 40) && isConflict(recentY, elY, 40, 40);
            }.bind(this));
            if (result == true) {
                this.element.classList.add("conflict");
            } else {
                this.element.classList.remove("conflict");
            }
        }
    };

    Square.prototype._onMouseUp = function(event) {
        document.removeEventListener('mousemove', this._onMouseMove);
        document.removeEventListener('mouseup', this._onMouseUp);
        
        if (this.element.classList.contains("conflict")) {
            this.elBody.removeChild(this.element);
            return;
        };

        var elX = parseInt(this.element.style.left);
        var elY = parseInt(this.element.style.top);
        var elW = 40;
        var ctX = this.container.offsetLeft;
        var ctW = this.container.offsetWidth;
        var ctY = this.container.offsetTop;
        var ctH = this.container.offsetHeight;

        if (!(isConflict(elX, ctX, 40, ctW) && isConflict(elY, ctY, 40, ctH))) {
            this.elBody.removeChild(this.element);
            return;
        } 
        this.element.classList.remove("dragging")
        this._onAnimationStart();
    };
    Square.prototype._onAnimationStart = function() {
        var containerTop = this.container.offsetHeight;
        var elSquare = this.element;
        var startTop = parseInt(this.element.style.top);
        var startLeft = parseInt(this.element.style.left);
        var start;

        function tick(timestamp) {
            if (!start) start = timestamp;
            var elapsed = timestamp - start;
            var endTop = Math.min(startTop + 0.2 * elapsed, containerTop - 32)
            var endLeft = startLeft;
            elSquare.style.top = endTop + 'px';
            
            if (Square.list) {
                var result;
	            var conflict = Square.list.some(function(tempSquare, index, array) {
	                var elLeft = parseInt(tempSquare.style.left);
	                var elTop = parseInt(tempSquare.style.top);
                    if(isConflict(endLeft, elLeft, 40, 40) && isConflict(endTop, elTop, 40, 40)){
                        result = endTop;
                        return true;
                    }
	                return false;
	            });
	            if (conflict == true) {
	            	Square.list.push(elSquare);
	               	return;
	            }
	        }

            if (endTop < containerTop - 32) {
                window.requestAnimationFrame(tick);
                return;
            } 
            if (!Square.list) {
                Square.list = [];
            }
            Square.list.push(elSquare);
            
        };
        window.requestAnimationFrame(tick);
    };

    function isConflict(p1, p2, w1, w2) {
        if (p1 < (p2 + w2) && p2 < (p1 + w1)) {
            return true;
        };
        return false;
    }

    return {
        Square: Square
    };
})();