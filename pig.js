class Pig{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0,
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body)
    }
        display(){
            var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightgreen")
        rect(0,0, this.width, this.height);
        pop();
    
        }
}
