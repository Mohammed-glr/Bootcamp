let w = 1080;  // Canvas width
let h = 1920;  // Canvas height

const studentName = "MDH";
const studentTitle = "GLR";

let x = 0;
let movingRect = [];
const word = "GLR";
let fontSize = 100;

let lastColorChangeTime = 0;
let currentColor = [0, 0, 0];

function setup() {
    createCanvas(w, h);  // Set canvas size explicitly
    background(143, 229, 8);

    for (let i = 0; i < 300; i++) {
        movingRect.push({
            x: random(width),
            y: random(100, 300),
            speedX: random(1, 15),
            speedY: random(1, 15),
        });
    }
}

function draw() {
    if (run) {
        background(143, 229, 8);

        for (let i = 0; i < movingRect.length; i++) {
            let rectData = movingRect[i];
            changeRectangleColor();
            fill(currentColor);
            rect(rectData.x, rectData.y, 50, 50);
            rectData.x += rectData.speedX;
            rectData.y += rectData.speedY;

            if (rectData.x > width || rectData.x < 0) {
                rectData.speedX *= -1;
            }
            if (rectData.y > height || rectData.y < 0) {
                rectData.speedY *= -1;
            }

            if (isNearWord(rectData.x, rectData.y)) {
                rectData.speedX *= -1;
                rectData.speedY *= -1;
            }
        }

        textAlign(CENTER, CENTER);
        textSize(fontSize);
        fill(0);
        text(word, width / 2, height / 2);
    }
}

function isNearWord(x, y) {
    const wordWidth = textWidth(word);
    const wordHeight = fontSize;
    const wordX = width / 2 - wordWidth / 2;
    const wordY = height / 2 - wordHeight / 2;
    const buffer = 100;

    return x > wordX - buffer && x < wordX + wordWidth + buffer &&
           y > wordY - buffer && y < wordY + wordHeight + buffer;
}

function changeRectangleColor() {
    if (millis() - lastColorChangeTime > 3000) {
        lastColorChangeTime = millis();
        currentColor = [random(255), random(255), random(255)];
    }
}
