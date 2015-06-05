Go = {}
Go.ui = {

}
Go.utility = {

}



window.addEventListener ("load", function () {
	var elTarget = document.querySelector(".MainContainer");
	var elCalendar = document.querySelector("#Calendar");

	var oDM = new Go.ui.LayerManager(elTarget);
	var oCalendar = new Go.ui.MyCalendar();

	oDM.toggleLayer("hello ");
	oCalendar.start();
})