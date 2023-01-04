const menu_toggle = document.getElementById("btn");
const drawer_menu = document.getElementById("main_drawer");
const close_menu = document.getElementById("close-btn");

class Listener {
	opnDrawer(){
		 drawer_menu.style = "animation-name: open;" +
		 										 "animation-duration: 2s;" +
												 "-webkit-animation-fill-mode: forwards;";
		 close_menu.addEventListener("click", ()=>{
			 					drawer_menu.style = "animation-name: close;" +
																		"animation-duration: 1s;" +
																		"-webkit-animation-fill-mode: forwards;";
							});
	}
}

const listener = new Listener();

function init(){
	menu_toggle.addEventListener("click", listener.opnDrawer);
}

init();
