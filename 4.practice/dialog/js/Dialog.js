
function DialogManager(elBase) {
  //do something...
}

DialogManager.prototype.toggleLayer = function(sContentMsg) {
  //do something...
};



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