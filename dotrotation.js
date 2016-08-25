
var dotrotationCanvas=document.getElementById("dotrotation").getContext("2d");
var dotrotationImg=dotrotationCanvas.createImageData(NCOLS,NROWS);

var t=0;
var TS=  0.05;
var Y0= -NROWS/2;
var Y1= +NROWS/2;
var YS=  1;
var X0= -NCOLS/2;
var X1= +NCOLS/2;
var XS=  1;

var x;
var y=Y0;

setInterval(dotrotationUpdate,10);

function dotrotationUpdate(){
	dotrotationCanvas.clearRect(0,0,NCOLS*4,NROWS*4);
	dotrotationCanvas.fillStyle="#0095DD";
	dotrotationCanvas.fillRect(NCOLS/2-50,NROWS/2-50,100,100);
	dotrotationCanvas.translate(NCOLS/2,NROWS/2);
		dotrotationCanvas.rotate(Math.PI/180*5);
	dotrotationCanvas.translate(-NCOLS/2,-NROWS/2);
//	dotrotationCanvas.putImageData(dotrotationImg,0,0);
}
