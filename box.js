class box
{
    constructor(x,y,width1,height1)
    {
     
     var options = { 'restitution':0.8,
                    'friction':0.3,
                    'density':1.0}

     this.body = Bodies.rectangle(x,y,width1,height1,options)
     World.add(world,this.body)
     this.width = width1; 
     this.height = height1; 
     
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
            fill("red");
            rectMode(CENTER);
            translate(pos.x,pos.y);
            rotate(angle);           
            rect(0,0,this.width,this.height);
        pop();
    }
}