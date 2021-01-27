class Bike {
    constructor( x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = color 
        this.speedX = 0;
        this.speedY = 0;
        this.speedingX = false;
        this.speedingY = false;
    }

    draw(){
        context.fillStyle =this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    //? Moving the player commands (To make inputs)
    // Moves to the left 
    left(){
        this.speedX = -5;
        this.speedingX = true;
        this.speedingY = false;
    }
    // Moves to the right
    right(){
        this.speedX = 5;
        this.speedingX = true;
        this.speedingY = false;
    }
    // Moves to the top
    top(){
        this.speedY = -5;
        this.speedingX = false;
        this.speedingY = true;
       
    }
    // Moves Down
    bottom(){
        this.speedY = 5;
        this.speedingX = false;
        this.speedingY = true;
    }

    newPos() {
        if (this.speedingX) {
            this.x += this.speedX;
        } else {
            this.y += this.speedY;
        }
    }
    
    // Check it the B1 hits his own trail
    crashB1 = (trail) => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const tempTrail = [...trail];
        tempTrail.pop(); // removes the last coordinates just in the verification
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if(foundColision === true){
            alert('Blue turned back... It Crashed into his own line')
            return true 
        }
    }

    // Check it the B2 hits his own trail
    crashB2 = (trail) => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const tempTrail = [...trail];
        tempTrail.pop(); // removes the last coordinates just in the verification
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if(foundColision === true){
            alert('Blue turned back... It Crashed into his own line')
            return true
        }
    }

    // Check it the B1 hits the Borders
    crashWithBorderB1 = () => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const bounds = {x: 500, y: 500}
        if (currentPos.x === bounds.x || currentPos.y === bounds.y ||
             currentPos.x < 0 ||currentPos.y < 0){
                alert('Red out of bounds')
                return true;
        }
    }

    // Check it the B2 hits the Borders
    crashWithBorderB2 = () => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const bounds = {x: 500, y: 500}
        if (currentPos.x === bounds.x || currentPos.y === bounds.y ||
             currentPos.x < 0 ||currentPos.y < 0){
                alert('Blue out of bounds')
                return true;
        }
    }

    // Check it the B1 hits the trail of B2
    crashB1WithTrail2 = (trail) => {
        const currentPos = { x: bike1.x, y: bike1.y};
        const tempTrail = [...trail];
        tempTrail.pop();
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if (foundColision === true){
            alert('Blue Won')
            return true
        }
    }

    // Check it the B2 hits the trail of B1
    crashB2WithTrail = (trail) => {
        const currentPos = { x: bike2.x, y: bike2.y};
        const tempTrail = [...trail];
        tempTrail.pop();
        const foundColision = tempTrail.some((position) => { // verify if theres is alreay that position int he array
            return position.x === currentPos.x &&
            position.y === currentPos.y
        });

        if (foundColision === true){
            alert('Red Won')
            return true;
        }
    }

    inCaseOfDraw = () => {
        const currentPos2 = { x: bike2.x, y: bike2.y};
        const currentPos1 = { x: bike1.x, y: bike1.y};
        if(currentPos1.x === currentPos2.x && currentPos1.y === currentPos2.y){
            return true;
        }
    }
}

