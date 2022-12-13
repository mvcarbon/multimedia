var diam1=0;

function setup() {
    createCanvas (600,800);
    background("#ea0000");
}

function draw() {
   fill ("#ea9c00");
    stroke ("#ffd37c");
    strokeWeight (5);
    ellipse (50,100,diam1,diam1);
    diam1=diam1+5;
    fill ("#ffffff");
    ellipse (mouseX,mouseY,75,75);
    textSize (20);
    textFont ("Georgia");
    textStyle (ITALIC);
    textAlign (CENTER);
    text ("Welcome",40,40);
}