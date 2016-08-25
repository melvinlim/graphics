var NROWS=240;
var NCOLS=320;

var WHITE="#FFFFFF"
var BLACK="#000000"
var RED="#FF0000"
var BLUE="#0000FF"
var LIME="#00FF00"

var graphicCanvas=document.getElementById("myCanvas");
var gcv=graphicCanvas.getContext("2d");
var imgG=gcv.createImageData(NCOLS,NROWS);
setInterval(updateG,10);

var i;
var j;
var t=0;
var TS=  0.05;

var Y0= -NROWS/100.0;
var Y1= +NROWS/100.0;
var YS=  0.05;

var X0= -NCOLS/100.0;
var X1= +NCOLS/100.0;
var XS=  0.05;

var x;
var y=Y0;

function updateG(){
	t+=0.05;
	y=Y0;
	for(i=0;i<NROWS*NCOLS*4*4;i+=NCOLS*4){
		y+=YS;
		x=X0;
		for(j=0;j<NCOLS*4;j+=4){
			x+=XS;
			imgG.data[i+j+0]=Math.abs(255*Math.sin(x-y));
			imgG.data[i+j+1]=Math.abs(255*Math.sin(x+y));
			imgG.data[i+j+2]=255*Math.abs(Math.sin(t));
			imgG.data[i+j+3]=255;
		}
	}
	gcv.putImageData(imgG,0,0);
}
