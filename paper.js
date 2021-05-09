class Paper{
    constructor(x,y,r){
        var paper_features = {
            isStatic : false,
            restitution:0,
            friction:200,
            density:0.2}
          this.paper = Bodies.circle(x,y,r/2,paper_features)
          World.add(world,this.paper)
          this.r=r;
        this.pI=loadImage("paper.png");
    }
    display(){
        push ()
        translate (this.paper.position.x,this.paper.position.y)
        rotate (this.paper.angle)
        imageMode(CENTER)
        image(this.pI,0,0,50,50)
        pop ()
        
    }
}