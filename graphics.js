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
//var img=cv.createImageData(NROWS,NROWS);
setInterval(update,10);

var i;
var j;
var t=0;

/*
var Y0= -1.2;
var Y1= +1.2;
var YS=  0.01;

var X0= -1.6;
var X1= +1.6;
var XS=  0.01;
*/

var Y0= -NROWS/100.0;
var Y1= +NROWS/100.0;
var YS=  0.05;

var X0= -NCOLS/100.0;
var X1= +NCOLS/100.0;
var XS=  0.05;

var x;
var y=Y0;

function update(){
	t+=0.01;
	y=Y0;
	for(i=0;i<NROWS*NCOLS*4*4;i+=NCOLS*4){
		y+=YS;
		x=X0;
		for(j=0;j<NCOLS*4;j+=4){
			x+=XS;
//			img.data[i+j+1]=(255+t)%255;
//			img.data[i+j+1]=255*Math.sin(t);
//			if((Math.sin(x)+Math.cos(y))>0){
			img.data[i+j+0]=255*Math.sin(x-y+t);
			img.data[i+j+1]=255*Math.sin(x+y+t);
/*
			if((Math.sin(x))>0){
				img.data[i+j+0]=0;
				img.data[i+j+1]=255*Math.sin(t+x);
			}else{
				img.data[i+j+0]=255*Math.sin(t+x);
				img.data[i+j+1]=0;
			}
*/
			img.data[i+j+2]=0;
			img.data[i+j+3]=255;
		}
	}
	cv.putImageData(img,0,0);
}
