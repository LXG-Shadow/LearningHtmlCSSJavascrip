var bulletid = 0;
var barriersid = new Array();
var barriersidcount = 9;
for (var i=0;i<10;i++) 
{
	barriersid[i] = 1;
}

function checkkey(event) {
	var evt=event;
	var evtCode = evt.keyCode;
	if (evtCode == 37) 
	{
		left();
	}
	if (evtCode == 38) 
	{
		up();
	}
	if (evtCode == 39) 
	{
		right();
	}
	if (evtCode == 40) 
	{
		down();
	}
	if (evtCode == 70)
	{
		gntbullet();
	}
	if (evtCode == 82)
	{
		gntbarriers();
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
		bulletp.removeChild(document.getElementById("b"+bulletid));
	}
	else
	{
		detecthit(bulletid);
		var bpos = document.getElementById("b"+bulletid);
		var y = bpos.style.top;
		//y = parseInt(y.substr(0,y.length-2))-28;
		y = parseInt(y.substr(0,y.length-2))-1;
	    //y = y-28;
	    bpos.style.top = y + "px";
        //window["a"+bulletid] = setTimeout(bulletmv,370,y,bulletid);
        window["a"+bulletid] = setTimeout(bulletmv,10,y,bulletid);
	}
}

function detecthit(bulletid)
{
	var bpos = document.getElementById("b"+bulletid);
	var x = bpos.style.left;
	var y = bpos.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	for (var i = 0;i<barriersid.length;i++)
	{
		if (barriersid[i] == 1)
		{
			var bapos = document.getElementById("ba"+i);
			var bax = bapos.style.left;
	        var bay = bapos.style.top;
	        bax = parseInt(bax.substr(0,bax.length-2));
	        bay = parseInt(bay.substr(0,bay.length-2));
	        if (y<bay+40 && x>bax && x<bax+40 && y>bay) 
	        {
	        	clearTimeout("a"+bulletid);
	        	var bpos = document.getElementById("b"+bulletid);
	        	bpos.style.top = -40+"px";
	        	document.getElementById("ba"+i).src = "barrierhit.png";
	        	setTimeout(barrierhit,600,i);
	        }
		}
	}
}

function gntbarriers()
{
	barriersidcount = barriersidcount + 1;
	barriersid[barriersidcount] = 1
	x = Math.floor((Math.random()*1001));
	y = Math.floor((Math.random()*401));
	var barriersp = document.getElementById("barrierspaper");
	var insertImg = document.createElement("img");
	insertImg.src = "barriers.png";
	insertImg.className = "barriers";
	insertImg.style.position = "absolute";
	insertImg.style.left = x + "px";
	insertImg.style.top = y + "px";
	insertImg.id = "ba" + barriersidcount;
	barriersp.appendChild(insertImg);
}

function barrierhit(i)
{
	var barriersp = document.getElementById("barrierspaper");
	barriersp.removeChild(document.getElementById("ba"+i));
    barriersid[i] = 0;
}