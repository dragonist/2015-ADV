function DialogManager(elBase) {
    this.elBase = elBase
    this.elController = this.elBase.querySelector(".controller");
    this.elContent = this.elBase.querySelector(".content");
    this.sContentMsg = ""
}

DialogManager.prototype.toggleLayer = function(sContentMsg) {
    this.elContent.innerHTML = sContentMsg;
    this.elController.addEventListener("click", (function(sContentMsg) {
        if (this.elContent.style.display == "none") {
            this.elContent.style.display = "block";
            this.elController.innerHTML = "박스 닫기";
            if(this.sContentMsg !== ""){
              this.elContent.innerHTML = this.sContentMsg;
            }
        } else {
            this.elContent.style.display = "none";
            this.elController.innerHTML = "박스 열기";
        }
    }).bind(this));
};

DialogManager.prototype.changeContentMsg = function(sContentMsg) {
    this.sContentMsg = sContentMsg;
};

DialogManager.prototype.setAnimation = function() {

    this.elController.addEventListener("click", (function() {
        if (this.elContent.style.display == "block") {
            this.elContent.style.height = 0;
            if (this.contentDown) clearInterval(this.contentDown);
            this.contentDown = setInterval(function() {
                var height = parseFloat(this.elContent.style.height);
                if (height >= 400) clearInterval(this.contentDown);
                height = height + 20;
                this.elContent.style.height = height + "px";
            }.bind(this), 10);
        } else {
            this.elContent.style.display = "block";

            this.elContent.style.height = 400;
            if (this.contentDown) clearInterval(this.contentDown);
            this.contentDown = setInterval(function() {
                var height = parseFloat(this.elContent.style.height);
                if (height <= 0) {
                    this.elContent.style.display = "none";
                    clearInterval(this.contentDown);
                }
                height = height - 20;
                this.elContent.style.height = height + "px";
            }.bind(this), 10);
        }

    }).bind(this));
};



//service code
(function() {
    var elTarget = document.querySelector(".container");
    var oDM = new DialogManager(elTarget);

    $("button:first-child").on("click", function(e) {
        oDM.toggleLayer("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
    });
    $("button:nth-child(2)").on("click", function(e) {
        oDM.changeContentMsg("message is none...");
    });
    $("button:last-child").on("click", function(e) {
        oDM.setAnimation();
    });
})();