var NROWS=240;
var NCOLS=320;

var WHITE="#FFFFFF"
var BLACK="#000000"
var RED="#FF0000"
var BLUE="#0000FF"
var LIME="#00FF00"

//var ripplesCanvas=document.getElementById("ripples");
//var rcv=ripplesCanvas.getContext("2d");
var rcv=document.getElementById("ripples").getContext("2d");
var imgR=rcv.createImageData(NCOLS,NROWS);
setInterval(updateR,10);

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

function updateR(){
	t=t+TS;
	y=Y1;
	for(i=0;i<NROWS*NCOLS*4;i+=NCOLS*4){
		y=y-YS;
		x=X1;
		for(j=0;j<NCOLS*4;j+=4){
			x=x-XS;
			imgR.data[i+j+0]=(255*(Math.sin(Math.sqrt(x*x+y*y)-t)+1)/2);
			imgR.data[i+j+1]=0;
			imgR.data[i+j+2]=0;
			imgR.data[i+j+3]=255;
		}
	}
	rcv.putImageData(imgR,0,0);
}
