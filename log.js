class Log{
    constructor(x,y,width,height){

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(9);
        stroke("White");
        fill(255,0,92);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}