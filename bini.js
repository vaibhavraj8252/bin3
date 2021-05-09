class Bini{
    constructor(x,y,w,h){
        var bini_features = {
            isStatic : true,
            restitution:1,
            friction:2,
            density:0.1
            }
          this.bini = Bodies.rectangle(x,y,w,h,bini_features)
          World.add(world,this.bini)
          this.w=w;
          this.h=h;
          this.binI=loadImage("dustbingreen.png")
    }
    display(){
        push ()
        fill("red")
        translate (this.bini.position.x,this.bini.position.y)
        imageMode(CENTER)
        image(this.binI,0,0,170,100)
        pop ()
    }
        }