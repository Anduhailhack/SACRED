const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Rectangle {
	coor; ctx;
	constructor(ctx, coor){
		this.coor = coor;
		this.ctx = ctx;
	}
	
	drawRect(){
		this.ctx.beginPath();
		this.ctx.fillStyle = "#33437B";
		this.ctx.fillRect(this.coor.X, this.coor.Y, this.coor.W, this.coor.H);
		
	}
}

class Cross {
	ctx; coor;
	constructor(ctx, coor){
		this.ctx = ctx;
		this.coor = coor;
	}
	
	drawCross(){
		/*
		this.ctx.beginPath();
		console.log(this.coor.X, this.coor.Y);
		this.ctx.moveTo(this.coor.X, this.coor.Y);
		this.ctx.lineTo(this.coor.X - (this.coor.W/6), this.coor.Y + (this.coor.H/6));
		this.ctx.stroke();
		
		this.ctx.beginPath();
		console.log(this.coor.X, this.coor.Y);
		this.ctx.moveTo(this.coor.X - (this.coor.W/6), this.coor.Y + (this.coor.H/6));
		this.ctx.lineTo(this.coor.X + ((this.coor.W) - (this.coor.W/6)), this.coor.Y + (this.coor.H - (this.coor.H/6)));
		this.ctx.stroke();*/
		
		this.ctx.beginPath();
		this.ctx.rotate(0.9);
		this.ctx.fillRect(this.coor.X, this.coor.Y, this.coor.W, this.coor.H);
		
		
	}
}

let coor = {
			X : innerWidth/3,
			Y : innerHeight/4,
			W : innerWidth/2 - innerWidth/3,
			H : innerHeight/1.4 - innerHeight/5
		};
		
let rect = new Rectangle(ctx, coor);
rect.drawRect();

coor = {
	X : innerWidth/3,
	Y : innerHeight/4 - ((innerWidth/2 - innerWidth/3)),
	W : (innerWidth/2 - innerWidth/3),
	H : (innerWidth/2 - innerWidth/3)
};

let cross = new Cross(ctx, coor);
cross.drawCross();
