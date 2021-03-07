class Bird extends BaseClass { //class is properties for an object-here bird
    constructor(x, y) {
  super(x,y,50,50);
  this.image=loadImage("sprites/bird.png")
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      super.display();
      
    }

  }
