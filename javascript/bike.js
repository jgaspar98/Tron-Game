class Bike {
    constructor( x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = color 
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
    
    crashB1 = (trail) => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const tempTrail = [...trail];
        tempTrail.pop(); // removes the last coordinates just in the verification
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if(foundColision === true){
            alert("Crash Blue Wins")
        }

        return foundColision;
    }

    crashB2 = (trail) => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const tempTrail = [...trail];
        tempTrail.pop(); // removes the last coordinates just in the verification
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if(foundColision === true){
            alert("Crash Red Wins")
        }
    }

    crashWithBorderB1 = () => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const bounds = {x: 500, y: 500}
        if (currentPos.x === bounds.x || currentPos.y === bounds.y ||
             currentPos.x < 0 ||currentPos.y < 0){
            alert('Out of bounds Blue Wins');
        }
    }

    crashWithBorderB2 = () => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const bounds = {x: 500, y: 500}
        if (currentPos.x === bounds.x || currentPos.y === bounds.y ||
             currentPos.x < 0 ||currentPos.y < 0){
            alert('Out of bounds Red Wins');
        }
    }

    crashB1WithTrail2 = (trail) => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const tempTrail = [...trail];
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if (foundColision === true){
            alert('Blue Wins')
        }
    }

    crashB2WithTrail = (trail) => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const tempTrail = [...trail];
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if (foundColision === true){
            alert('Red Wins')
        }
    }
}

