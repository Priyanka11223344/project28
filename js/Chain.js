class Chain{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB=pointB
       
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
       // var pointB = this.Sling.bodyB.position
       var pointB=this.pointB
			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
       }
    }