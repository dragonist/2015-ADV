Go.ui.LayerManager = function (elBase) {
	this.elBase = elBase;
	this.elButton = this.elBase.querySelector(".controller");
	this.elContent = this.elBase.querySelector(".content");
	this.sContentMsg = null;
	this.bAnimation = false;
}

Go.ui.LayerManager.prototype.toggleLayer = function(sContentMsg) {
	var
	console.log("when you click layer");
};

Go.ui.LayerManager.prototype._execLayer = function(sFalg, bAnimation) {
	if(sFalg === "block"){
		this.elContent.style.display = "none";
		this.elButton.innerText = MSG.open;
	}else if(sFalg === "none" || !sFalg){
		this.elContent.style.display = "block";
		this.elButton.innerText = MSG.close;
		if (bAnimation) this._runAnimation();

	}
};


Go.ui.LayerManager.MSG = {
	open : "박스열기",
	close : "박스닫기",
	maxSize : 400
}