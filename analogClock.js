var ctx;
var date;
var radius = 200;

function start() {
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	showTime();
	setInterval(showTime,1000);
}

function showTime() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
	date = new Date();
	drawClock();//用于显示表盘及其刻度
	showSeconds();
	showMinutes();
	showHours();

}

function drawClock() {
	//先画整个圆盘
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,radius+10,0,Math.PI*2);
	ctx.fillStyle = "#fff";
	ctx.fill();
	ctx.strokeStyle = "#3b3b3b";
	ctx.lineWidth = 10;
	ctx.stroke();
    //画时钟刻度
    for(var i = 0; i < 12; i++){
    	var angle = (i-3)*Math.PI*2/12;
    	ctx.lineWidth = 2;
    	ctx.beginPath();
    	var x1 = canvas.width/2+Math.cos(angle)*radius;
    	var y1 = canvas.height/2+Math.sin(angle)*radius;
    	var x2 = canvas.width/2+Math.cos(angle)*(radius-radius/7);
    	var y2 = canvas.height/2+Math.sin(angle)*(radius-radius/7);
    	ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.strokeStyle = "#000";
        ctx.stroke();
    }
    //画分钟刻度
    for(var j = 0; j < 60; j++){
    	angle = (j-3)*Math.PI*2/60;
    	ctx.lineWidth = 1;
    	ctx.beginPath();
    	x1 = canvas.width/2+Math.cos(angle)*radius;
    	y1 = canvas.height/2+Math.sin(angle)*radius;
    	x2 = canvas.width/2+Math.cos(angle)*(radius-radius/20);
    	y2 = canvas.height/2+Math.sin(angle)*(radius-radius/20);
    	ctx.moveTo(x1,y1);
    	ctx.lineTo(x2,y2);
    	ctx.strokeStyle = "#000";
    	ctx.stroke();
    }
}

function showSeconds() {
	var sec = date.getSeconds();
	angle = (Math.PI * 2) * (sec/60)-(Math.PI * 2)/4;
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2,canvas.height / 2);
	ctx.lineTo((canvas.width / 2 + Math.cos(angle)*radius),canvas.height / 2 + Math.sin(angle)*radius);
	ctx.moveTo(canvas.width / 2,canvas.height / 2);
	ctx.lineTo((canvas.width / 2 - Math.cos(angle)*30),canvas.height / 2 - Math.sin(angle)*30);
	ctx.strokeStyle = "#e10600";
	ctx.stroke();
}

function showMinutes() {
	var min = date.getMinutes();
    angle = (Math.PI * 2)*(min/60)-(Math.PI * 2)/4;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2,canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + Math.cos(angle)*radius/1.1,canvas.height / 2 + Math.sin(angle)*radius/1.1);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

function showHours() {
	var hour = date.getHours();
	var min = date.getMinutes();
	angle = (Math.PI*2)*(hour+min/60)/12 - (Math.PI *2 /4);
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2,canvas.height / 2);
	ctx.lineTo(canvas.width / 2 +Math.cos(angle)*radius/1.3,canvas.height / 2 + Math.sin(angle)*radius/1.3);
	ctx.strokeStyle = "#000";
	ctx.stroke();
}