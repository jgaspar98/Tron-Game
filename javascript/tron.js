const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d')


const bike1 = new Bike(100, 100, 10, 10, 'red');
//

document.addEventListener('keydown', (e) => {           //! There's something missing to move the box 
    switch (e.keyCode) {
        case 38:
             bike1.top();
        break;
        case 37:
            bike1.left();
        break;
        case 40:
            bike1.right();
        break;
        case 39:
            bike1.bottom();
        break;            
    } 
    bike1.draw();
});

//TODO: ITS ALREADY PRINTING WHEN IT AN ARROW KEY, BUT IT'S NOT MOVING 

