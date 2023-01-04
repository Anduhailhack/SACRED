const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Face {
	prop;
	ctx;
	
	constructor(ctx, prop){
		this.prop = prop;
		this.ctx = ctx;
	}
	
	drawFace(){
		this.ctx.beginPath();
		this.ctx.arc(this.prop.X-18, this.prop.Y, 100, 1.4, 1.8*Math.PI, true);
		this.ctx.stroke(); 
		this.ctx.fillStyle = "#8E6037";
		this.ctx.fill();
		this.ctx.beginPath();
		this.ctx.arc(this.prop.X+18, this.prop.Y, 100, 3.8, 0.55*Math.PI, true);
		this.ctx.stroke(); 
		this.ctx.fillStyle = "#8E6037";
		this.ctx.fill();
	}
}

let prop = {
	X : innerWidth/2,
	Y : innerHeight/2
};

let f = new Face(ctx, prop);
f.drawFace();
alert("This piece is not complete.");