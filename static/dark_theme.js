function goDark(){
	window.activeTheme = "dark";
	document.body.style.backgroundColor = "#111";
	document.body.style.color = "white";
	document.getElementsByTagName("header")[0].style.backgroundColor = "#111";
	document.getElementsByTagName("header")[0].style.boxShadow = "0px 0px 3px 3px #222";
	document.getElementsByTagName("header")[0].style.borderBottom = "1px solid #222";
	for(var e of document.getElementsByTagName("a")){
		e.style.color = "#009cae";
	}
	document.querySelector("header h1 a").style.color = "white";
}
function goLight(){
	window.activeTheme = "light";
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
	document.getElementsByTagName("header")[0].style.backgroundColor = "white";
	document.getElementsByTagName("header")[0].style.boxShadow = "0px 0px 3px 3px lightgrey";
	document.getElementsByTagName("header")[0].style.borderBottom = "1px solid lightgrey";
	for(var e of document.getElementsByTagName("a")){
		e.style.color = "blue";
	}
	document.querySelector("header h1 a").style.color = "black";
}

window.activeTheme = "light";

document.addEventListener("turbolinks:load", function(){
	document.getElementById("toggle-theme").oncontextmenu = function(){
		if(typeof(Storage) !== "undefined"){
			if(window.activeTheme == "light"){
				goDark();
				localStorage.blogTheme = "dark";
			}else{
				goLight();
				localStorage.blogTheme = "light";
			}
		}
		
		return false;
	};
	
	if(document.location.search && (document.location.search == "?theme=dark")){
		goDark();
		return;
	}else if(document.location.search && (document.location.search == "?theme=light")){
		return;
	}else if(document.location.search && (document.location.search == "?resettheme")){
		localStorage.removeItem("blogTheme");
		goLight();
		return;
	}
	
	if(typeof(Storage) !== "undefined"){
		if(localStorage.blogTheme){
			if(localStorage.blogTheme == "dark") goDark();
		}
	}
});