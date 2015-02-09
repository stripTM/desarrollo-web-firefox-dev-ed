LOGIN = {
	init : function() {
		// Añadir control para desenmascarar la contraseña
		var $password = $("#password");
		var showPassword = document.createElement("a");
		showPassword.setAttribute("id", "showPassword");
		$password.after(showPassword);

	}
}

$(document).ready(LOGIN.init);