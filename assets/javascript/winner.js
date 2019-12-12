var character = localStorage.getItem("character");

var winnerDisplay = document.getElementById("character");
winnerDisplay.innerHTML = "The winner is " + character;

var winnerDisplay = document.getElementById("winnerDisplay");

var characterClass = character.toLowerCase().replace(" ", "-");

winnerDisplay.classList.add(characterClass);

console.log(winnerDisplay);


// FIREWORKS
/*
var maxFirework = 6,
maxSpark = 40;

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
var fireworks = [];

for (var i = 0; i < maxFirework; i++) {
    var firework = {
        sparks: []
    };

    for (var n = 0; n < maxSpark; n++) {
        var spark = {
            vx: Math.random() * 5 + 0.5,
            vy: Math.random() * 4 + 0.5,
            weight: Math.random() * 0.3 + 0.01,
            red: Math.floor(Math.random() * 3),
            green: Math.floor(Math.random() * 1),
            blue: Math.floor(Math.random() * 4)
        };

        if (Math.random() > 0.5) spark.vx = -spark.vx;
        if (Math.random() > 0.5) spark.vy = -spark.vy;
        firework.sparks.push(spark);
    }
    fireworks.push(firework);
    resetFirework(firework);
}

window.requestAnimationFrame(explosion);

function resetFirework(firework) {
    firework.x = Math.floor(Math.random() * canvas.width);
    firework.y = canvas.height;
    firework.age = 0;
    firework.phase = 'fly';
}

function explosion() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework,index) => {
        if (firework.phase == 'kaboom') {
            firework.sparks.forEach((spark) => {
                for (var i = 0; i < 10; i++) {
                    var trailAge = firework.age + i;
                    var x = firework.x + spark.vx * trailAge;
                    var y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
                    var fade = i * 20 - firework.age * 2;
                    var r = Math.floor(spark.red * fade);
                    var g = Math.floor(spark.green * fade);
                    var b = Math.floor(spark.blue * fade);
                    context.beginPath();
                    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                    context.rect(x, y, 4, 4);
                    context.fill();
                }
            });
            firework.age++;
            if (firework.age > 100 && Math.random() < 0.05) {
                resetFirework(firework);
            }
        } else {
            firework.y = firework.y - 5;
            for (var spark = 0; spark < 15; spark++) {
                context.beginPath();
                context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1';
                context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
                context.fill();
            }
            if (Math.random() < 0.001 || firework.y < 200) firework.phase = 'kaboom';
        }
    });
    window.requestAnimationFrame(explosion);
}*/

/*window.onload = function() {
    //
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    //
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //
    var mf = 100; // max flakes
    var flakes = [];

    //
    for(var i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5+2,
            d: Math.random()+1
        })
    }

    function drawFlakes() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();
        for(var i = 0; i < mf; i++) {
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }
    ctx.fill();
    moveFlakes();
    }

    var angle = 0;
    
    function moveFlakes() {
        angle += 0.01;
        for(var i = 0; i < mf; i++) {

            var f = flakes[i];

            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            if(f.y > H) {
                flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
            }
        }
    }
    setInterval(drawFlakes, 25);
}
*/

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
        
            ctx.beginPath(); 

            ctx.arc(
            flakesArray[i].x, 
            flakesArray[i].y, 
            flakesArray[i].radius, 0, Math.PI*2, false);

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
