const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d')
// Trails left by the Bikes are stored in this array
let trail=[];
let trail2=[];

// Bikes are added here
const bike1 = new Bike(100, 250, 10, 10, 'red');
const bike2 = new Bike(380, 250, 10, 10, 'cyan');


// The start and the clear of the game
const gameArea={
    start: function(){
        this.interval = setInterval(updateGameArea,120);
    },

    clear: function(){
        clearInterval(this.interval);
        context.clearRect(0, 0, 500, 500);
    }
}


// Automation of the game, by keepping the functions running
function updateGameArea(){
    bike1.draw();
    bike2.draw();
    bike1.newPos();
    bike2.newPos();
    bike2.crashB2(trail2);
    bike2.crashWithBorderB2(trail2);
    bike1.crashB1(trail);
    bike1.crashWithBorderB1(trail);
    bike1.crashB1WithTrail2(trail2);
    bike2.crashB2WithTrail(trail);
    bike1.inCaseOfDraw();
    bike2.inCaseOfDraw();
    CheckIfOver();
    if(!(bike1.x === 100 && bike1.y===250 && bike2.x === 380 && bike2.y === 250)){
            trail.push({x:bike1.x, y:bike1.y});
            trail2.push({x:bike2.x, y:bike2.y});
        }
}

// Movement Keys
document.addEventListener('keydown', (e) => {           
    switch (e.keyCode) {
        case 87:
            bike1.top();
        break;
        case 65:
            bike1.left();
        break;
        case 68:
            bike1.right();
        break;
        case 83:
            bike1.bottom();
        break;
        //! Bike 2 movement
        case 38:
            bike2.top();
        break;
        case 37:
            bike2.left();
        break;
        case 39:
            bike2.right();
        break;
        case 40:
            bike2.bottom();
        break;            
    } 
});

// Checks if any crash happened and ends the game
function CheckIfOver() {
   if((bike2.crashB2(trail2)===true) ||
        (bike2.crashWithBorderB2(trail2)===true)||
        (bike1.crashB1(trail)===true)||
        (bike1.crashWithBorderB1(trail)===true)||
        (bike1.crashB1WithTrail2(trail2)===true)||
        (bike2.crashB2WithTrail(trail) ===true)||
        (bike1.inCaseOfDraw()===true)||
        (bike2.inCaseOfDraw()===true)){
            setTimeout(() => {
                gameArea.clear();
            }, 0);
        }      
}

// Makes the bikes move at the same time when start is hit and play beginnig music
document.querySelector('#start').addEventListener('click', () =>{
    startMusic();
    setTimeout(() => {
        bike1.right() ;
        bike2.left();
    }, 2000);
}); 

// Reloads the page in order to start a new game
const reloadButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}

// Grabs the music to play it
function startMusic(){
    var music = new Audio('C:/Users/João Gaspar/Desktop/Game Project/audios/02 - Start.mp3');
    music.play();
}

gameArea.start();
document.getElementById('player').play();

