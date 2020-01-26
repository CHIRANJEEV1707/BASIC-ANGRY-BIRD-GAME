class pig{
    constructor(x,y,height,width){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0

        }
        this.body=Bodies.rectangle(x,y,height,width,options)
        this.height=height;
        this.width=width;
        World.add(world,this.body)

    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("green");
rect(0,0,this.width,this.height);
pop();
}
    
}