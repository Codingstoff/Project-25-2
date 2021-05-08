class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density: 1,
          friction: 0.5,
          restitution: 0.0
          
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x,pos.y,this.radius,this.radius)
      
      
      
    }
  }