bulletid = 0

function checkkey(event) {
	var evt=event;
	var evtCode = evt.keyCode;
	if (evtCode == 37) 
	{
		left()
	}
	if (evtCode == 38) 
	{
		up()
	}
	if (evtCode == 39) 
	{
		right()
	}
	if (evtCode == 40) 
	{
		down()
	}
	if (evtCode == 70)
	{
		gntbullet()
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

function left()
{
	var pos = document.getElementById("tank");
	var l = pos.style.left;
	l = parseInt(l.substr(0,l.length-2));
	pos.style.left = (l-20)+"px";
	
}

function right()
{
	var pos = document.getElementById("tank");
	var l = pos.style.left;
	l = parseInt(l.substr(0,l.length-2));
	pos.style.left = (l+20)+"px";
	
}

function gntbullet()
{
	bulletid = bulletid + 1 ;
	var pos = document.getElementById("tank");
	var x = pos.style.left;
	var y = pos.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	x = x+37;
	y = y-28;
	var bulletp = document.getElementById("bulletpaper");
	var insertImg = document.createElement("img");
	insertImg.src = "bullet.png";
	insertImg.className = "bullet";
	insertImg.style.position = "absolute";
	insertImg.style.left = x + "px";
	insertImg.style.top = y + "px";
	insertImg.id = "b" + bulletid;
	bulletp.appendChild(insertImg);
	bulletmv(y,bulletid);
}

function bulletmv(y,bulletid)
{
	if (y <= 0) 
	{
		clearTimeout("a"+bulletid);
		var bulletp = document.getElementById("bulletpaper");
		bulletp.removeChild(document.getElementById("b"+bulletid))
	}
	else
	{
		var bpos = document.getElementById("b"+bulletid);
	    y = y-28;
	    bpos.style.top = y + "px";
        window["a"+bulletid] = setTimeout(bulletmv,500,y,bulletid);
	}
}