const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext("2d");

class Circle{
	ctx; coor;
	
	constructor(ctx, coor){
		this.ctx = ctx;
		this.coor = coor;
		console.log(coor);
	}
	
	drawCir(){
		this.coor.forEach((item, index, arr) => {
			//console.log(item);
			this.ctx.beginPath();
			this.ctx.strokeStyle = "rgba(255, 0, 0, 0.3)";
			this.ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
			this.ctx.arc(item.X, item.Y, 60, 0, 2*Math.PI, false);
			this.ctx.stroke();
			this.ctx.fill();
		});
	}
}

class Coordinate {
	X; Y;
	constructor(x, y){
		this.X = x;
		this.Y = y;
	}
	
	getCoordinates(){
		let coordinates = new Array();
		let data;
		
		let increment = -120;
		let is_x = false;
		
		for (let i = 0; i < 2; i++){
			for (let j = 0; j < 5; j++){
				if (is_x){
					data = {X : this.X + increment, Y : this.Y};
				}else{
					data = {X : this.X, Y : this.Y + increment};
				}
				coordinates.push(data);
				increment += 60;
			}
			is_x = true;
			increment = -120;
		}
		
		increment = -90;
		is_x = -60;
		for (let i = 0; i < 2; i++){
			for (let j = 0; j < 2; j++){
				data = {X : this.X + is_x, Y : this.Y + increment};
				coordinates.push(data);
				increment = 90;
			}
			increment = -90;
			is_x = 60;
		}
		
		increment = -60;
		is_x = -90;
		for (let i = 0; i < 2; i++){
			for (let j = 0; j < 2; j++){
				data = {X : this.X + is_x, Y : this.Y + increment};
				coordinates.push(data);
				increment = 60;
			}
			increment = -60;
			is_x = 90;
		}
		
		return coordinates;
	}
}

let coor = new Coordinate(innerWidth/2, innerHeight/2);
let ci = new Circle(ctx, coor.getCoordinates());
ci.drawCir();
let is_first = false;

function clickMe(event){
	ctx.clearRect(0,0,innerWidth,innerHeight);
	if (is_first){
		let coor = new Coordinate(innerWidth/2, innerHeight/2);
		let ci = new Circle(ctx, coor.getCoordinates());
		ci.drawCir();
		is_first = false;
	}else{
		let circle;
		let ratio = [
			{X : innerWidth/2, Y : innerHeight/2},
			{X : innerWidth/4, Y : innerHeight/4},
			{X : innerWidth/1.3, Y : innerHeight/4},
			{X : innerWidth/4, Y : innerHeight/1.3},
			{X : innerWidth/2, Y : innerHeight/1},
			{X : innerWidth/1.3, Y : innerHeight/1.3},
			{X : innerWidth, Y : innerHeight/2},
			{X : 0, Y : innerHeight/2},
			{X : innerWidth/2, Y : 0},
			{X : innerWidth, Y : innerHeight},
			{X : 0, Y : 0},
			{X : innerWidth, Y : 0},
			{X : 0, Y : innerHeight},
		];
		ratio.forEach((item, index, arr) => {
  		  coor = new Coordinate(item.X, item.Y);
  		  //console.log();
 		   circle = new Circle(ctx, coor.getCoordinates());
  		  circle.drawCir();
		});
		
		is_first = true;
	}
}

document.addEventListener("click", clickMe);

