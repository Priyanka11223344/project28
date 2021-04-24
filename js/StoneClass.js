class StoneClass{
constructor(x,y,r){
    var options ={
     'isStatic':false,
     'dencity': 1.2,
     'friction': 1,
     'restitution': 0
    }
    this.r = r;
    this.image = loadImage("images/stone.png");
    this.body=Bodies.circle(x,y,r, options);
      World.add(world, this.body);
};
 display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.r*2,this.r*2);
   pop();
 }
};