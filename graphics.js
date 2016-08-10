var NROWS=240;
var NCOLS=320;

var WHITE="#FFFFFF"
var BLACK="#000000"
var RED="#FF0000"
var BLUE="#0000FF"
var LIME="#00FF00"
var canvas=document.getElementById("myCanvas");
var cv=canvas.getContext("2d");
var img=cv.createImageData(NCOLS,NROWS);
//alert("asdf");
setInterval(update,10);

var i;
var j;
var t=0;

function update(){
	t+=1;
	for(i=0;i<NROWS*NCOLS*4;i+=NCOLS){
		for(j=0;j<NCOLS*4;j+=4){
			img.data[i+j+0]=0;
			img.data[i+j+1]=(255+t)%255;
			img.data[i+j+2]=0;
			img.data[i+j+3]=255;
		}
	}
	cv.putImageData(img,0,0);
}
/*
	setColor(RED);
	cv.fillRect(0,0,NCOLS,(NROWS));
	setColor(BLUE);
	cv.fillRect(0,0,NCOLS,(NROWS));
function setColor(color){
	cv.fillStyle=color;
}
*/
