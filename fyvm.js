let mit_image = undefined;
let w = 0;
let h = 0;
let x = 0;
let y = 0;
let pts = [];

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

function draw() {
  background(255);
  translate(x,y);
  image(mit_image,0,0,w,h,w/1200,h/280);
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
