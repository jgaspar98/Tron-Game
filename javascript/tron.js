const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d')

let trail=[];
let trail2=[];

const bike1 = new Bike(100, 250, 10, 10, 'red');
const bike2 = new Bike(380, 250, 10, 10, 'cyan')


document.addEventListener('keydown', (e) => {           
    switch (e.keyCode) {
        case 38:
            bike1.top();
            trail.push({x:bike1.x, y:bike1.y});
        break;
        case 37:
            bike1.left();
            trail.push({x:bike1.x, y:bike1.y});
        break;
        case 39:
            bike1.right();
            trail.push({x:bike1.x, y:bike1.y});
        break;
        case 40:
            bike1.bottom();
            trail.push({x:bike1.x, y:bike1.y});
        break;
        //! Bike 2 movement
        case 87:
            bike2.top();
            trail2.push({x:bike2.x, y:bike2.y});
        break;
        case 65:
            bike2.left();
            trail2.push({x:bike2.x, y:bike2.y});
        break;
        case 68:
            bike2.right();
            trail2.push({x:bike2.x, y:bike2.y});
        break;
        case 83:
            bike2.bottom();
            trail2.push({x:bike2.x, y:bike2.y});
        break;            
    } 
    bike1.draw();
    bike2.draw();
    bike2.crashB2(trail2);
    bike2.crashWithBorderB2(trail2);
    bike1.crashB1(trail);
    bike1.crashWithBorderB1(trail);
    bike1.crashB1WithTrail2(trail2);
    bike2.crashB2WithTrail(trail);
});


bike1.draw();
bike2.draw();

// TODO make a colision function between the two bikes

