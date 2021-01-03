class Plinko  {
    constructor(x, y,r){
        
      var options = {
        'restitution':0.4,
        'isStatic':true
    }
   this.r=r;
  
   this.body = Bodies.circle(x,y, this.r,options);
   this.color=color("grey");
   World.add(world, this.body);
  }
  
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
  
    push();
  
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
  }
  
    
  
  
   }  