class Connection{
    constructor(b,s){
    var options={
     bodyA:b,
     pointB:s,
     stiffness:0.004,
     length:5
    }
    this.connection=Constraint.create(options)
    World.add(world,this.connection)
    console.log(this.connection.pointB.x)
    }
    display(){
    if(this.connection.bodyA!=null){
        var a=this.connection.bodyA.position;
        var b=this.connection.pointB;
     line(a.x,a.y,b.x,b.y)}
    }

    breakTheConnection(){
        this.connection.bodyA=null
    }
}
