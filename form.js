class Form{
    constructor(){
        this.input = createInput("Name");
       this.button = createButton("play");
       this.greeting = createElement('h3');
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        
        this.button.position(displayWidth/2+30,displayHeight/2);

        
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            Player.name = this.input.value();
            playerCount += 1;
            Player.index = playerCount;
            Player.update();
            Player.updateCount(playerCount);
            this.greeting.html("Hello"+Player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
    static hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
