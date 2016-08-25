var NROWS=240;
var NCOLS=320;

var WHITE="#FFFFFF"
var BLACK="#000000"
var RED="#FF0000"
var BLUE="#0000FF"
var LIME="#00FF00"

var rcv2=document.getElementById("2ripples").getContext("2d");
var img2R=rcv2.createImageData(NCOLS,NROWS);
setInterval(update2R,10);

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

var t0=0;
var TS0=  0.05;

var x0;
var y0=Y0;

var x1;
var y1;

var x2;
var y2;

function update2R(){
	t0=t0+TS;
	y0=Y0;
	for(i=0;i<NROWS*NCOLS*4*4;i+=NCOLS*4){
		y0=y0+YS;
		x0=X0;
		for(j=0;j<NCOLS*4;j+=4){
			x0=x0+XS;
			x1=x0-2;
			y1=y0-2;
			x2=x1-2;
			y2=y1-2;
			img2R.data[i+j+0]=(255*(Math.sin(Math.sqrt(x0*x0+y0*y0)-t0)+1)/2);
			img2R.data[i+j+2]=(255*(Math.sin(Math.sqrt(x2*x2+y2*y2)-t0)+1)/2);
			img2R.data[i+j+1]=(255*(Math.sin(Math.sqrt(x1*x1+y1*y1)-t0)+1)/2);
			img2R.data[i+j+3]=255;
		}
	}
	rcv2.putImageData(img2R,0,0);
}
