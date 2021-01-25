const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d')

let trail=[];

const bike1 = new Bike(100, 100, 10, 10, 'red');


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
    } 
    bike1.draw();
    bike1.crash(trail);
});


bike1.draw();






 






//TODO: MAKE A  FUNCTION OF COLLISION
