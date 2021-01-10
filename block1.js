class Block{
    constructor(x,y,width,height){
        var option = {
            isStatic:false,
            //friction:0.05,
            density:0.75
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width 
        this.height = height
        this.trans = 255
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed<3){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()

        }
        else{
            World.remove(world,this.body)
            push()
            this.trans=this.trans-5;
            //tint(255,this.trans);
            
            pop()
        }
        
        
        
        
        
     }
}