class Bike {
    constructor( x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = color 
        this.speedX = 25;
        this.speedY = 25;
    }

    draw(){
        context.fillStyle =this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    //? Moving the player commands (To make inputs)
    // Moves to the left 
    left(){
        return this.x;
    }
    // Moves to the right
    right(){
        return this.x + this.width;
    }
    // Moves to the top
    top(){
        return this.y + this.height;
    }
    // Moves Down
    bottom(){
        return this.y;
    }
}
