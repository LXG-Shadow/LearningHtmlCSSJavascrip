function checkkey(event) {
	var evt=event;
	var evtCode = evt.keyCode;
	if (evtCode == 37) 
	{
		right()
	}
	if (evtCode == 38) 
	{
		up()
	}
	if (evtCode == 39) 
	{
		left()
	}
	if (evtCode == 40) 
	{
		down()
	}
}

function getClass(obj,name)
{
	if (obj.currentStyle) 
	{
		return obj.currentStyle[name];
	}
	else 
	{
		return getComputedStyle(obj,false)[name];
	}
}

function up()
{
	var pos = document.getElementById("tank");
	var t = pos.style.top;
	t = parseInt(t.substr(0,t.length-2));
	pos.style.top = (t-20)+"px";

}

function down()
{
	var pos = document.getElementById("tank");
	var t = pos.style.top;
	t = parseInt(t.substr(0,t.length-2));
	pos.style.top = (t+20)+"px";

}

function right()
{
	var pos = document.getElementById("tank");
	var l = pos.style.left;
	l = parseInt(l.substr(0,l.length-2));
	pos.style.left = (l-20)+"px";
	
}

function left()
{
	var pos = document.getElementById("tank");
	var l = pos.style.left;
	l = parseInt(l.substr(0,l.length-2));
	pos.style.left = (l+20)+"px";
	
}