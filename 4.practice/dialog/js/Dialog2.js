function DialogManager(elBase) {
    this.elBase = elBase
    this.elController = this.elBase.querySelector(".controller");
    this.elContent = this.elBase.querySelector(".content");
    this.sContentMsg = ""
    this.mutax = false;
}

DialogManager.prototype.toggleLayer = function(sContentMsg) {
    this.sContentMsg = sContentMsg;
    this.elController.addEventListener("click", (function(sContentMsg) {
        if (this.mutax) return;
        if (this.elContent.style.display == "none") {
            this.elContent.style.display = "block";
            this.elController.innerHTML = "박스닫기";
            if (this.sContentMsg !== "") {
                this.elContent.innerHTML = this.sContentMsg;
            }
        } else {
            this.elContent.style.display = "none";
            this.elController.innerHTML = "박스열기";
        }
    }).bind(this));
};

DialogManager.prototype.changeContentMsg = function(sContentMsg) {
    this.sContentMsg = sContentMsg;
};

DialogManager.prototype.setAnimation = function() {
    // this.elController.removeEventListener('click', setDisplay);
    this.elController.addEventListener("click", (function() {
        this.mutax = true;
        $(this.elContent).slideToggle("slow");
    }).bind(this));
};


// console.log(this.elContent);
// console.log($(this.elContent));
// function box () {
//   this.targetEle = 
//   this.css("displaysli")
//   $("section").slideToggle("slow");
//   $("section").text(sContentMsg);
// }


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