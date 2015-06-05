var Event = function (argument) {
	this.elBase = elBase;
	this.elButton = this.elBase.querySelector(".controller");
	this.elContent = this.elBase.querySelector(".content");
}

Event.prototype.SellerFormController = function(first_argument) {
    this.elButton.addEventListener("click", (function() {
        $(this.elContent).slideToggle("slow");
    }).bind(this));
};

