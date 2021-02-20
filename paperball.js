class Paper{
    constructor(x,y,w,h,img){
        var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.img = loadImage(img);
 		World.add(world, this.body);
         
    }
   display() {
    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img,0,0,this.w,this.h);
    pop();
    }
    
};