window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//Ese event se puede usar para saber la informacion del elemento que activo el evento
		//you code here
		alert(event.target.nodeName); //De esta manera
		/* if (event.target.nodeName == "IMG") {
			alert("ay papaaaaaa");
		} */
	});
};
