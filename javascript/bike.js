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
        return this.x -= 10;
    }
    // Moves to the right
    right(){
        return this.x += 10;
    }
    // Moves to the top
    top(){
        return this.y -= 10;
    }
    // Moves Down
    bottom(){
        return this.y += 10;
    }
    
    crash = (trail) => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const tempTrail = [...trail];
        tempTrail.pop(); // removes the last coordinates just in the verification
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if(foundColision === true){
            alert("Crash")
        }

        return foundColision;
    }

    crashWithBorder = () => {
        const currentPos = { x: bike1.x, y: bike1.y};
        if ((currentPos.x === canvas.width || currentPos.x === 0) ||
        (currentPos.y === canvas.height || currentPos.y === 0))
        return true;
    }

}

