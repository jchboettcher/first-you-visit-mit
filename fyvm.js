let mit_image = undefined;
let w = 0;
let h = 0;
let x = 0;
let y = 0;
const pts = [];

function preload() {
  mit_image = loadImage("mit.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  if (window.innerWidth/window.innerHeight > mit_image.width/mit_image.height) {
    h = window.innerHeight;
    w = mit_image.width/mit_image.height*h;
    x = (window.innerWidth-w)/2;
  } else {
    w = window.innerWidth;
    h = mit_image.height/mit_image.width*w;
    y = (window.innerHeight-h)/2;
  }
  strokeWeight(8);
  stroke(0,0,255);
}

const coord = (n,e) => {
  pts.push({n,e});
}

function draw() {
  translate(x,y);
  image(mit_image,0,0,w,h,w/1200,h/280);
  translate(w/2,h/2);
  for (let pt of pts) {
    point(pt.e/360*w,-pt.n/120*h);
  }
}
