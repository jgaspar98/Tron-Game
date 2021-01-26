let animationId;


const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d')

let trail=[];
let trail2=[];


const bike1 = new Bike(100, 250, 10, 10, 'red');
const bike2 = new Bike(380, 250, 10, 10, 'cyan');



const gameArea={
    start: function(){
        this.interval = setInterval(updateGameArea,120);
    },

    clear: function(){
        clearInterval(this.interval);
        context.clearRect(0, 0, 500, 500);
    }
}



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



document.querySelector('#start').addEventListener('click', () =>{
    playMusic();
    setTimeout(() => {
        bike1.right() ;
        bike2.left();
    }, 2000);
}); 

const reloadButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}

function playMusic(){
    var music = new Audio('C:/Users/João Gaspar/Desktop/Game Project/audios/02 - Start.mp3');
    music.play();
}

gameArea.start();
