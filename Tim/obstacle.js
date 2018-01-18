function newO (){
    this.x = random(50,width-50);
    this.y = 100;
    
    this.show = function(){
        fill(255);
        rect(this.x,this.y,50,50);
    }
    
}
                
