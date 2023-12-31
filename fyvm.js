const images = [];
let w = 0;
let h = 0;
let x = 0;
let y = 0;
let pts = [];
let imgIdx = 0;

function preload() {
  images.push(loadImage("mit.png"));
  images.push(loadImage("letters1.png"));
  images.push(loadImage("letters2.png"));
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  if (window.innerWidth/window.innerHeight > images[1].width/images[1].height) {
    h = window.innerHeight;
    w = images[1].width/images[1].height*h;
    x = (window.innerWidth-w)/2;
  } else {
    w = window.innerWidth;
    h = images[1].height/images[1].width*w;
    y = (window.innerHeight-h)/2;
  }
  stroke(0,0,255);
}

const coord = (n,e) => {
  pts.push({n,e});
}

const parseList = s => {
  const l = s.split(";");
  pts = [];
  for (let ne of l) {
    const [n,e] = ne.split(",");
    pts.push({n:parseInt(n),e:parseInt(e)});
  }
}

function mouseClicked() {
  const n = 60-(mouseY-y)/h*120;
  const e = (mouseX-x)/w*360-180;
  if (abs(n) <= 60 && abs(e) < 180) {
    console.log(n,e);
    pts.push({n,e});
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    imgIdx = (imgIdx+images.length-1)%images.length;
  } else if (keyCode == RIGHT_ARROW) {
    imgIdx = (imgIdx+1)%images.length;
  }
}

function draw() {
  background(255);
  translate(x,y);
  image(images[imgIdx],0,0,w,h,w/1200,h/280);
  translate(w/2,h/2);
  strokeWeight(8);
  for (let pt of pts) {
    point(pt.e/360*w,-pt.n/120*h);
  }
  strokeWeight(1);
  for (let i = 0; i < pts.length-1; i++) {
    const pt1 = pts[i];
    const pt2 = pts[i+1];
    line(pt1.e/360*w,-pt1.n/120*h,pt2.e/360*w,-pt2.n/120*h);
  }
}
