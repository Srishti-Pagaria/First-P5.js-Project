function preload(){
}

function setup(){
    canvas = createCanvas(673, 480);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
    }

function draw(){
    image(video, 250, 150, 200, 150);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 70);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(85, 40, 520, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(638, 50, 70);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 85, 20, 300);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(630, 85, 20, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(638, 400, 70);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 400, 70);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(85, 390, 520, 20);
}

function take_snapshot(){
    save('student_name.png');
}