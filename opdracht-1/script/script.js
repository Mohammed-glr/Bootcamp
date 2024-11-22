let characterX = 0;
let houseX;
let characterY;
let falling = false;
let fallSpeed = 0;
let isBroken = false;
let resetTimer = 0;
let trees = [];
let birds = []; 

function setup() {
    createCanvas(2100, 900);
    fill(80,119,40)
    houseX = width / 2 + 300;
    characterY = height / 2;

    for (let i = 0; i < width; i += random(200, 600)) {
        trees.push(i);
    }

    // Initialize birds with random positions and speeds
    for (let i = 0; i < 5; i++) {
        birds.push({
            x: random(width),
            y: random(100, 300), // Birds are between 100 and 300 pixels high
            speed: random(1, 3) // Random speed for each bird
        });
    }
}

function draw() {
    // Draw the sky and road first
    drawSky();
    drawRoad();

    // Draw the house and trees
    drawHouse(houseX, height / 2);
    for (let i = 0; i < trees.length; i++) {
        drawTree(trees[i], height / 2 + 100);
    }

    
    for (let bird of birds) {
        drawBird(bird.x, bird.y);
        bird.x += bird.speed; 

        if (bird.x > width) {
            bird.x = -50;
            bird.y = random(100, 300); 
        }
    }

    if (!falling && !isBroken) {
        characterX += 0.5; 
        if (characterX > houseX - 50) { 
            characterX = houseX - 50; 
            moveToTopOfHouse(); 
        }
    }

    if (falling) {
        characterY += fallSpeed; 
        fallSpeed += 0.2; 

        if (characterY >= height / 2 + 150) {
            characterY = height / 2 + 150;
            isBroken = true;
            resetTimer = frameCount + 120;
        }
    }

    if (isBroken) {
        drawBrokenCharacter(characterX, characterY); 
    } else {
        drawCharacter(characterX, characterY);
    }

 
    if (isBroken && frameCount > resetTimer) {
        resetCharacter(); 
    }
}


function drawSky() {

    for (let i = 0; i < height / 2; i++) {
        let inter = map(i, 0, height / 2, 0, 1);
        let c = lerpColor(color(135, 206, 250), color(255, 223, 186), inter); // Light blue to orange gradient
        stroke(c);
        line(0, i, width, i);
    }
}

function drawRoad() {
    fill(175, 136, 44); 
    noStroke();
    rect(0, height - 300, width, 200); 
}

function moveToTopOfHouse() {
    characterY = height / 2 - 100; 
    falling = true; 
}


function resetCharacter() {
    characterX = 0; 
    characterY = height / 2;
    fallSpeed = 0; 
    isBroken = false;
    falling = false;
}

function drawCharacter(x, y) {
    fill(255, 240, 180);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(x, y - 10, 150, 250); // Body

    fill(255, 255, 255);
    ellipse(x, y + 50, 50, 20); // Mouth

    fill(255, 255, 255);
    ellipse(x - 50, y + 150, 20, 80); // Arms
    ellipse(x + 50, y + 150, 20, 80);

    // Hands
    push();
    translate(x - 110, y - 20);
    rotate(PI / 4);
    ellipse(0, 0, 20, 80); // Left hand
    pop();

    push();
    translate(x + 110, y - 20);
    rotate(-PI / 4);
    ellipse(0, 0, 20, 80); // Right hand
    pop();

    // Eyes
    fill(255, 255, 255);
    ellipse(x - 30, y - 50, 20, 20); // Eyes
    ellipse(x + 30, y - 50, 20, 20);

    // Hat
    fill(0, 0, 0);
    rect(x - 50, y - 135, 100, 20); // Hat
    rect(x - 30, y - 150, 60, 20);
}


function drawBrokenCharacter(x, y) {
    fill(255, 240, 180);
    stroke(255, 255, 255);
    ellipse(x, y - 50, 80, 100); 
    ellipse(x, y - 150, 100, 100); 

    fill(255, 240, 180);
    ellipse(x - 70, y + 60, 20, 50);
    ellipse(x + 70, y + 60, 20, 50); 

    push();
    translate(x - 90, y + 40);
    rotate(PI / 4);
    ellipse(0, 0, 20, 50); 
    pop();

    push();
    translate(x + 90, y + 40);
    rotate(-PI / 4);
    ellipse(0, 0, 20, 50); 
    pop();
}


function drawHouse(x, y) {
    fill(150, 75, 0); 
    rect(x, y - 50, 20, 250); 
}


function drawTree(x, y) {
    fill(139, 69, 19); 
    rect(x - 10, y, 20, 50); 
    fill(34, 139, 34);
    triangle(x - 40, y, x + 40, y, x, y - 50); 
    triangle(x - 35, y - 20, x + 35, y - 20, x, y - 70);
}

function drawBird(x, y) {
    fill(0);
    noStroke();
    ellipse(x, y, 20, 10); 
    ellipse(x + 10, y - 5, 10, 5); 
}

