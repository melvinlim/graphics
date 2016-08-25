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
/*
var Y0= -NROWS/100.0;
var Y1= +NROWS/100.0;
var YS=  0.05;
*/
var Y0= -NROWS/2;
var Y1= +NROWS/2;
var YS=  1;
/*
var X0= -NCOLS/100.0;
var X1= +NCOLS/100.0;
var XS=  0.05;
*/
var X0= -NCOLS/2;
var X1= +NCOLS/2;
var XS=  1;

var x;
var y=Y0;

var points=[];
initPoints(points);
var len=points.length;
//printPoints(points);

function initPoints(points){
	var i,j;
	var x0 = -50;
	var x1 = +50;
	var y0 = -50;
	var y1 = +50;
/*
	for(i=y0;i<y1;i++){
		for(j=x0;j<x1;j++){
			points.push({x:j,y:i});
		}
	}
*/
	points.push({x:0,y:1};
}

function printPoints(points){
	for(var i=0;i<len;i++){
		alert(points[i].x+' '+points[i].y);
	}
}

setInterval(dotrotationUpdate,10);
function dotrotationUpdate(){
	var i,j;
	t+=0.05;
	y=Y0;
	for(i=0;i<len;i++){
		map(points[i]);
		rotate(points[i]);
	}
	dotrotationCanvas.putImageData(dotrotationImg,0,0);
/*			
	for(i=0;i<NROWS*NCOLS*4;i+=NCOLS*4){
		x=X0;
		for(j=0;j<NCOLS*4;j+=4){
			dotrotationImg.data[i+j+0]=Math.abs(255*Math.sin(x-y));
			dotrotationImg.data[i+j+1]=Math.abs(255*Math.sin(x+y));
			dotrotationImg.data[i+j+2]=255*Math.abs(Math.sin(t));
			dotrotationImg.data[i+j+3]=255;
			x+=XS;
		}
		y+=YS;
	}
*/
}

function map(point){
//	alert(point.x+' '+point.y);
	var j=(point.x+(X1))*4;
	var i=(point.y+(Y1))*NCOLS*4;
	dotrotationImg.data[i+j+0]=255;
	dotrotationImg.data[i+j+1]=255;
	dotrotationImg.data[i+j+2]=255;
	dotrotationImg.data[i+j+3]=255;
}

var STEPSIZE=0.05;

function rotate(point){
	alert(point.x+' 'point.y);
	point.x += STEPSIZE*(point.y*(-1));
	point.y += STEPSIZE*(point.x*(+1));
}
