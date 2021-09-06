window.onload = function() {
	init();

	function init() {
		document.addEventListener("keydown", onKeydown, false);
		document.addEventListener("keyup", onKeyup, false);
	}

	function onKeydown(e) {
		if (e["code"] == "KeyZ") activateButton(1);
		
		if (e["code"] == "KeyX") activateButton(2);
		
		if (e["code"] == "KeyC") activateButton(3);
		
		if (e["code"] == "Comma") activateButton(4);
		
		if (e["code"] == "Period") activateButton(5);

		if (e["code"] == "Slash") activateButton(6);
	}

	function onKeyup(e) {
		if (e["code"] == "KeyZ") deactivateButton(1);
		
		if (e["code"] == "KeyX") deactivateButton(2);
		
		if (e["code"] == "KeyC") deactivateButton(3);
		
		if (e["code"] == "Comma") deactivateButton(4);
		
		if (e["code"] == "Period") deactivateButton(5);

		if (e["code"] == "Slash") deactivateButton(6);
	}

	function activateButton(buttonNo) {
		let buttonElementId = "button" + buttonNo;
		let buttonElement = document.getElementById(buttonElementId);

		console.log(buttonElementId);

		buttonElement.style.background = "rgb(224, 0, 0)";
	}

	function deactivateButton(buttonNo) {

	}


}