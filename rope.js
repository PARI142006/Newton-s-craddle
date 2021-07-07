class Rope{
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope)

    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position; 

        strokeWeight(3)
        fill("black")
        var chainX= point1.x
        var chainY = point1.y;

        var chain2X= point2.x+this.offsetX
        var chain2Y= point2.x+this.offsetY;

        line(chainX,chainY,chain2X,chain2Y);
    }
}