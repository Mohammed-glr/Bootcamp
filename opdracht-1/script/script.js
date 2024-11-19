function setup() {
    createCanvas(2050, 1000);
    background(200); 
}
let x = 0;
let x2 = 0;

function draw() {
    fill(0, 0, 0);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(width / 2, height / 2, 150, 250);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(width / 2, height / 2 + 50, 50, 20);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(width / 2 - 50, height / 2 + 150, 20, 80);
    ellipse(width / 2 + 50, height / 2 + 150, 20, 80);
    push();
    translate(width / 2 - 110, height / 2 - 20);
    rotate(PI / 4);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(0, 0, 20, 80);
    pop();
    push();
    translate(width / 2 + 110, height / 2 - 20);
    rotate(-PI / 4);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(0, 0, 20, 80);
    pop();


    fill(255,255, 255);
    stroke(255, 255, 255);
    strokeWeight(4);
    ellipse(width / 2 - 30, height / 2 - 50, 20, 20);
    ellipse(width / 2 + 30, height / 2 - 50, 20, 20);
}


