var NROWS=240;
var NCOLS=320;

var WHITE="#FFFFFF"
var BLACK="#000000"
var RED="#FF0000"
var BLUE="#0000FF"
var LIME="#00FF00"

var dotrotationCanvas=document.getElementById("dotrotation").getContext("2d");
var dotrotationImg=dotrotationCanvas.createImageData(NCOLS,NROWS);

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

var points=[];
initPoints(points);
//printPoints(points);

function initPoints(points){
	var i,j;
	var x0 = -5;
	var x1 = +5;
	var y0 = -5;
	var y1 = +5;
	for(i=y0;i<y1;i++){
		for(j=x0;j<x1;j++){
			points.push({x:j,y:i});
		}
	}
}

function printPoints(points){
	var len=points.length;
	for(var i=0;i<len;i++){
	alert(points[i].x+' '+points[i].y);
	}
}

setInterval(dotrotationUpdate,10);

function dotrotationUpdate(){
	var i,j;
	t+=0.05;
	y=Y0;
	for(i=0;i<NROWS*NCOLS*4;i+=NCOLS*4){
		y+=YS;
		x=X0;
		for(j=0;j<NCOLS*4;j+=4){
			x+=XS;
			
			dotrotationImg.data[i+j+0]=Math.abs(255*Math.sin(x-y));
			dotrotationImg.data[i+j+1]=Math.abs(255*Math.sin(x+y));
			dotrotationImg.data[i+j+2]=255*Math.abs(Math.sin(t));
			dotrotationImg.data[i+j+3]=255;
		}
	}
	dotrotationCanvas.putImageData(dotrotationImg,0,0);
}
