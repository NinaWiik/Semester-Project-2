// WINNER PAGE

// Get character from local storage
var character = localStorage.getItem("character");

// Display the winner name 
var winnerDisplay = document.getElementById("character");
winnerDisplay.innerHTML = "The winner is " + character;

var winnerDisplay = document.getElementById("winnerDisplay");

var characterClass = character.toLowerCase().replace(" ", "-");
// gets the winner character picture, and adds the character class
winnerDisplay.classList.add(characterClass);

console.log(winnerDisplay);



// SNOW canvas
var canvas = document.getElementById("snow");
var ctx = canvas.getContext("2d");

var maxFlakes = 300;
var flakesArray = [];
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;


// will generate a random number later
function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

// reset values of canvas if screen changes, and resize flakes
function clientResize(ev){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
};
window.addEventListener("resize", clientResize);

// function which will add flakes to the array, and the speed and opacity will be randomly generated. 
// radius will make it in random circles
function createFlakes() {
    for(var i = 0; i < maxFlakes; i++){
        flakesArray.push({
            x: Math.random() * W,  
            y: Math.random() * H,  
            opacity: Math.random(),  
            speedX: random(-10, 10),  
            speedY: random(4, 12),    
            radius:random(0.5, 7.2),
        })
    }
};

// function that will draw the flakes, and add the dradient to it so it seems real
function drawFlakes(){
    for(var i = 0; i < flakesArray.length; i++){    
        var gradient = ctx.createRadialGradient( 
            flakesArray[i].x, 
            flakesArray[i].y,  
            0,                   
            flakesArray[i].x, 
            flakesArray[i].y,  
            flakesArray[i].radius);


            gradient.addColorStop(0, "rgba(255, 255, 255," + flakesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + flakesArray[i].opacity + ")");  
            gradient.addColorStop(1, "rgba(237, 247, 249," + flakesArray[i].opacity + ")");  
        
            // start to make the flakes and draws the circles
            ctx.beginPath(); 

            ctx.arc(
            flakesArray[i].x, 
            flakesArray[i].y, 
            flakesArray[i].radius, 0, Math.PI*2, false);

        // Fill the flakes with the gradient
        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

// Moves the flakes on the screen, and resets it and starts from the top, when the reaches the bottom. 
// The flakes moves around because of negative value in speedX. 
function moveFlakes(){
    for (var i = 0; i < flakesArray.length; i++) {
        flakesArray[i].x += flakesArray[i].speedX;     
        flakesArray[i].y += flakesArray[i].speedY;     

        if (flakesArray[i].y > H) {                                                                               
            flakesArray[i].x = Math.random() * W * 1.5;
            flakesArray[i].y = -40;
        }
    }
};


// Calls all the flakes functions
function updateSnow  () {
    ctx.clearRect(0, 0, W, H);
    drawFlakes();
    moveFlakes();
};
setInterval(updateSnow,50);
createFlakes();
