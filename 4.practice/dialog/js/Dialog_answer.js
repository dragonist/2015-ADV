

var DialogManager = (function(){
    var MSG = {
      open : "박스열기",
      close : "박스닫기",
      maxSize : 400
    };

    function DialogManager(elBase) {
    	 this.elBase = elBase;
       this.elButton = this.elBase.querySelector(".controller");
       this.elContent = this.elBase.querySelector(".content");
       this.sContentMsg = null;
       this.bAnimation = false;
    }

    DialogManager.prototype.toggleLayer = function(sContentMsg) {
       this.sContentMsg = this.sContentMsg || sContentMsg;
        
        this.elButton.addEventListener("click", function(e){
          if(this.sContentMsg)  this.elContent.innerText = this.sContentMsg;
          var _sDisplayValue = this.elContent.style.display;
          this._execLayer(_sDisplayValue, this.bAnimation);
      }.bind(this),false);
    };


    DialogManager.prototype._execLayer = function(sFlag, bAnimation) {
        if(sFlag === "block") {
            this.elContent.style.display ="none";
            this.elButton.innerText = MSG.open; 
        } else if(sFlag === "none" || !sFlag) {
            this.elContent.style.display ="block";
            this.elButton.innerText = MSG.close;
            if(bAnimation) this._runAnimation();
        }
    };

    DialogManager.prototype._runAnimation = function() {

        if(this.intervalID) clearInterval(this.intervalID);
        this.elContent.style.height = 0+"px";

        this.intervalID = setInterval(function(){
          var _nCurrentHeight = parseInt(this.elContent.style.height);
          if(_nCurrentHeight > MSG.maxSize) {clearInterval(this.intervalID);}
          this.elContent.style.height = (_nCurrentHeight + 20)+ "px";
        }.bind(this), 16);
    };

    DialogManager.prototype.changeContentMsg = function(sMSG) {
     	this.sContentMsg = sMSG;
    };

    DialogManager.prototype.setAnimation = function() {
     	this.bAnimation = true;
    };

    return DialogManager;
})();


//service code
(function(){
    var elTarget = document.querySelector(".container");
    var oDM = new DialogManager(elTarget);

    $("button:first-child").on("click", function(e){
        oDM.toggleLayer("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    });
    $("button:nth-child(2)").on("click", function(e){
        oDM.changeContentMsg("message is none...");
    });
    $("button:last-child").on("click", function(e){
        oDM.setAnimation();
    });
 
})();