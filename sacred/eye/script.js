const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Circle{
	ctx; coor;
	
	constructor(ctx, coor){
		this.ctx = ctx;
		this.coor = coor; //this should be array of json
		//console.log("{ X : " + coor[0].X + ", Y : " + coor[0].Y + ", RAD : " + coor[0].RAD + ", S : " + coor[0].S + ", E : " + coor[0].E + ", CW : " + coor[0].CW + " },");
	}
	
	drawCir(){
		
		this.coor.forEach((item, index, arr) => {
			this.ctx.beginPath();
			this.ctx.lineWidth = 7;
			this.ctx.strokeStyle = "rgba(255, 255, 255, 1)";
			this.ctx.arc(item.X, item.Y, item.RAD, item.S, item.E, item.CW);
			this.ctx.stroke();
			if (!item.CW){
				this.ctx.fillStyle = "rgba(255, 0, 255, 0.3)";
				this.ctx.fill();
			}
		});
	}
}

class Triangle{
	ctx; coor;
	
	constructor(ctx, coor){
		this.ctx = ctx;
		this.coor = coor; //this should be array of json
		//console.log("{ X : " + coor[0].X + ", Y : " + coor[0].Y + ", RAD : " + coor[0].RAD + ", S : " + coor[0].S + ", E : " + coor[0].E + ", CW : " + coor[0].CW + " },");
	}
	
	drawTri(){
		
		this.coor.forEach((item, index, arr) => {
			this.ctx.beginPath();
			this.ctx.lineWidth = 7;
			this.ctx.moveTo(item.SX, item.SY);
			this.ctx.lineTo(item.D1X, item.D1Y);
			this.ctx.stroke();
			this.ctx.beginPath();
			this.ctx.lineWidth = 7;
			this.ctx.moveTo(item.SX, item.SY);
			this.ctx.lineTo(item.D2X, item.D2Y);
			this.ctx.stroke();
		});
	}
}

let coor = [
	{X : innerWidth/2, Y : innerHeight/2, RAD : 150, S : 0, E : 2*Math.PI, CW : true},
	{X : innerWidth/2, Y : innerHeight/2, RAD : 30, S : 0, E : 2*Math.PI, CW : true},
	{X : innerWidth/2, Y : innerHeight/2-30, RAD : 60, S : 0, E : 2*Math.PI, CW : true},
	{X : innerWidth/2, Y : innerHeight/2+30, RAD : 60, S : 0, E : 2*Math.PI, CW : true},
	{X : innerWidth/2, Y : innerHeight/2-50, RAD : 100, S : 0, E : 2*Math.PI, CW : true},
	{X : innerWidth/2, Y : innerHeight/2+50, RAD : 100, S : 0, E : 2*Math.PI, CW : true}
];

let tri_coor = [
	{SX : innerWidth/2, SY : innerHeight/2-150, D1X : innerWidth/2-98, D1Y : innerHeight/2+25, D2X : innerWidth/2+98, D2Y : innerHeight/2+25},
	{SX : innerWidth/2, SY : innerHeight/2-150, D1X : innerWidth/2-98, D1Y : innerHeight/2+25, D2X : innerWidth/2+98, D2Y : innerHeight/2+25},
	{SX : innerWidth/2, SY : innerHeight/2+150, D1X : innerWidth/2-98, D1Y : innerHeight/2-25, D2X : innerWidth/2+98, D2Y : innerHeight/2-25}
];

let circle = new Circle(ctx, coor);
circle.drawCir();

let triangle = new Triangle(ctx, tri_coor);
triangle.drawTri();