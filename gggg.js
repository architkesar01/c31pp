class Gr{
    constructor(x,y,w,h)
	{
		var options={
			isStatic:true}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
		World.add(world, this.body);
	}
	display(){
			var pos=this.body.position;		
			
			translate(pos.x, pos.y);
			rectMode(CENTER)
		
			fill("blue")
			rect(0,0,this.w, this.h);
			}}