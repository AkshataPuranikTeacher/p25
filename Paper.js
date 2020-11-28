class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false , 
            resititution : 0.1 ,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x, this.y, this.radius/3, options);
        this.image = loadImage("../images/paper.png");
       
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("purple");
        image(this.image , 0 , 0 , this.radius , this.radius);
        pop();
    }




}