const canv = document.getElementById("canv");
canv.width = innerWidth;
canv.height = innerHeight;
canv.style.background = "#7800FF";
const ctx = canv.getContext("2d");

function triangle() {
	ctx.beginPath();
	ctx.moveTo(innerWidth/8, innerHeight/4);
	ctx.lineTo(innerWidth/2, innerHeight/(4/2.5));
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(innerWidth/(8/7), innerHeight/4);
	ctx.lineTo(innerWidth/2, innerHeight/(4/2.5));
	ctx.stroke();
}

function circle() {
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.strokeStyle = "rgba(0, 0, 0, 1)";
	//this.ctx.arc(item.X, item.Y, item.RAD, item.S, item.E, item.CW);
	ctx.arc(innerWidth/3, innerHeight/4, 74.8, -0.62, 1*Math.PI, true);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(innerWidth/1.5, innerHeight/4, 74.8, 0, 1.2*Math.PI, true);
	ctx.stroke();
}

function animate() {
	
}

circle();
triangle();

console.log(ctx);