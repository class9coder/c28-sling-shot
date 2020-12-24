class Slingshot{
    constructor(body1, point1){
        var options = {
            bodyA: body1,
            pointB: point1,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = point1;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
}