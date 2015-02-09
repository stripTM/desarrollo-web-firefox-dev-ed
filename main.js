var LOGIN = {
	$password : null,
	init : function() {
		// Añadir control para desenmascarar la contraseña
		LOGIN.$password = $("#password");
		var showPassword = document.createElement("a");
		showPassword.setAttribute("id", "showPassword");
		LOGIN.$password.after(showPassword);
		$(showPassword).on("click", LOGIN.togglePasswordMask);
	},
	togglePasswordMask : function() {
		var newType = (LOGIN.$password.attr("type") === "password") ? "text" : "password";
		LOGIN.$password.attr("type", newType);
	}
}

$(document).ready(LOGIN.init);