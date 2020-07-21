class Paper{
    constructor(x,y,radius){
        
        var options = {
            isStatic : false
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("White");
        fill(104,255,0);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}