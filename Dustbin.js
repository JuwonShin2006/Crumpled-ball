class Dustbin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        
        this.x=x,
        this.y=y,
        this.dustbinWidth = 200,
        this.dustbinHeight = 100,
        this.thickness = 20,
        this.angle = 0

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.thickness,options)
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y,this.dustbinHeight/2,this.thickness,this.dustbinHeight,options)
        Matter.Body.setAngle(this.rightBody, -1 * this.angle)
        this.leftBody = Bodies.rectangle(this.x-this.dusbinWidth/2,this.y-this.dustbinHeight/2,this.thickness,this.dustbinHeight,options)
        Matter.Body.setAngle(this.leftBody, this.angle)
        World.add(world,this.bottomBody)
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)
        
    }

    display(){
        var posBottom = this.bottomBody.position
        var posLeft = this.leftBody.position
        var posRight = this.rightBody.position
        push()
        translate(posLeft.x,posLeft.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.thickness,this.dustbinHeight)
        pop()

        push()
        translate(posRight.x,posRight.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(-1 * this.angle)
        rect(0,0,this.thickness,this.dustbinHeight)
        pop()

        push()
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.thickness,this.dustbinHeight)
        pop()
    }
}