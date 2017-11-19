var keycondition = new Array();
var food = new Array();
food[0] = 1;
var snakedirection = 39;
var snakelive = Boolean();
snakeid = 1;

window.onload = function()
{
	alert("Press Enter To Start");
	snakelive = !snakelive;
	move();
}

//同时检测
function checkkeydown(event)
{
	var evt = event;
	var evtCode = evt.keyCode;
	keycondition[evtCode] = 1;

}

function checkkeyup(event)
{
	var evt = event;
	var evtCode = evt.keyCode;
	keycondition[evtCode] = 0;
}

//检测键盘输入
function checkkey(event) 
{
	var evt = event;
	var evtCode = evt.keyCode;
	if (evtCode == 37) 
	{
		snakedirection = 37;
	}
	if (evtCode == 38) 
	{
		snakedirection = 38;
	}
	if (evtCode == 39) 
	{
		snakedirection = 39;
	}
	if (evtCode == 40) 
	{
		snakedirection = 40;
	}
	if (evtCode == 81)
	{
		quit();
	}
}

function quit()
{
	keycondition[81] = 0;
	//var wholebodyhtml = document.body.innerHTML;
	//var wholebody = document.body;
	//wholebody.innerHTML= quitpage;
	//quitpage = wholebodyhtml;
}

function move()
{
	detectdie();
	if (snakelive)
	{
		if (snakedirection == 37) 
	    {
		    left();
	    }
	    if (snakedirection == 38) 
	    {
		    up();
	    }
	    if (snakedirection == 39) 
	    {
		    right();
	    }
	    if (snakedirection == 40) 
	    {
		    down();
	    }
	    detectfood();
	    moving = setTimeout(move,1000);
	}
	else
	{
		//var snklayer = document.getElementById("snakelayer");
		//snklayer.innerHTML = "";
		alert("GAME OVER");
	}
}

function right()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	snk.style.left = (x+40) +"px";
	follow(1,x,y);
}

function left()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	snk.style.left = (x-40) +"px";
	follow(1,x,y);
}

function up()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	snk.style.top = (y-40) +"px";
	follow(1,x,y);
}

function down()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	snk.style.top = (y+40) +"px";
	follow(1,x,y);
}


function follow(i,l,t)
{
	if (i <= snakeid)
	{
		var snk = document.getElementById("snk"+i);
		var x = snk.style.left;
	    var y = snk.style.top;
	    x = parseInt(x.substr(0,x.length-2));
	    y = parseInt(y.substr(0,y.length-2));
		snk.style.left = l +"px";
		snk.style.top = t + "px";
		follow(i+1,x,y);
	}
}

function detectdie()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	if (x >= 1200 || x <0 || y >=520 || y <0)
	{
		clearTimeout(moving);
		snakelive = !snakelive;
	}
	else
	{
		for (var i = 1; i <=snakeid ; i++)
		{
			var nextbody = document.getElementById("snk" + i);
			var x1 = nextbody.style.left;
	        var y1 = nextbody.style.top;
	        x1 = parseInt(x1.substr(0,x1.length-2));
	        y1 = parseInt(y1.substr(0,y1.length-2));
	        if (x == x1 && y == y1)
	        {
	            clearTimeout(moving);
		        snakelive = !snakelive;
		        break;
	        }
		}
	}
}

function detectfood()
{
	var snk = document.getElementById("snk0");
	var x = snk.style.left;
	var y = snk.style.top;
	x = parseInt(x.substr(0,x.length-2));
	y = parseInt(y.substr(0,y.length-2));
	for (var i = 0;i<food.length;i++)
	{
		if (food[i] == 1)
		{
			var fod = document.getElementById("fd" + i);
			var fx = fod.style.left;
	        var fy = fod.style.top;
	        fx = parseInt(fx.substr(0,fx.length-2));
	        fy = parseInt(fy.substr(0,fy.length-2));
	        if (fx == x && fy == y) 
	        {
	        	var snklayer = document.getElementById("snakelayer");
	            var insertImg = document.createElement("img");
	            var lastbody = document.getElementById("snk" + snakeid);
	            var x1 = lastbody.style.left;
	            var y1 = lastbody.style.top;
	            x1 = parseInt(x1.substr(0,x1.length-2));
	            y1 = parseInt(y1.substr(0,y1.length-2)); 
	            insertImg.src = "snakebody.png";
	            insertImg.className = "snakebody";
	            insertImg.style.position = "absolute";
	            insertImg.style.left = x1 + "px";
	            insertImg.style.top = y1 + "px";
	            snakeid = snakeid + 1;
	            insertImg.id = "snk" + snakeid;
	            snklayer.appendChild(insertImg);
			    food[i] = 0;
			    delfood(i);
			    break;
	        }
		}
	}
}

function delfood(i)
{
	var fdlayer = document.getElementById("foodlayer");
	fdlayer.removeChild(document.getElementById("fd"+i));
	gntfood();
}

function gntfood()
{
	food[food.length] = 1;
	x = (Math.floor((Math.random()*30)))*40;
	y = (Math.floor((Math.random()*13)))*40;
	var fdlayer = document.getElementById("foodlayer");
	var insertImg = document.createElement("img");
	insertImg.src = "food.jpg";
	insertImg.className = "food";
	insertImg.style.position = "absolute";
	insertImg.style.left = x + "px";
	insertImg.style.top = y + "px";
	insertImg.id = "fd" + (food.length-1);
	fdlayer.appendChild(insertImg);
}