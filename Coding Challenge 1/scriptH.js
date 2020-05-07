const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cellSize = 30;
const maxSize = 30;
let mousePos = vec2.fromValues(innerWidth * 0.25, innerHeight * 0.5);
let numThingsX;
let numThingsY;
let things;

function drawThing(thing) {
  const {pos, radius} = thing;
  ctx.fillStyle = '#0a0a0a';
  ctx.beginPath();
  ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
  ctx.fill();
}

function loop() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  things.forEach(thing => {
    const dist = vec2.dist(mousePos, thing.pos);
    thing.radius = clamp(dist * dist * 0.0003 - 1, 0, maxSize);
    drawThing(thing);
  });
}

function makeThing(x, y) {
  return {
    pos: vec2.fromValues(x, y),
    radius: 2,
  };
}

function makeThings() {
  things = [];
  for (let i = 0; i < numThingsY; i += 1) {
    for (let j = 0; j < numThingsX; j += 1) {
      const thing = makeThing(j * cellSize + cellSize * 0.5, i * cellSize + cellSize * 0.5);
      things.push(thing);
    }
  }
}

function sizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const canvasRect = canvas.getBoundingClientRect();
  canvas.width = canvasRect.width * dpr;
  canvas.height = canvasRect.height * dpr;
  ctx.scale(dpr, dpr);
}

function handleResize() {
  sizeCanvas();
  numThingsX = Math.ceil(innerWidth / cellSize);
  numThingsY = Math.ceil(innerHeight / cellSize);
  makeThings();
}
window.addEventListener('resize', throttled(handleResize));

function handleMouseMove(event) {
  vec2.set(mousePos, event.clientX, event.clientY);
  loop();
}
window.addEventListener('mousemove', throttled(handleMouseMove));

// Kick it off
handleResize();
loop();

// USEFUL FUNCTIONS ----------
function throttled(fn) {
  let didRequest = false;
  return param => {
    if (!didRequest) {
      window.requestAnimationFrame(() => {
        fn(param);
        didRequest = false;
      });
      didRequest = true;
    }
  };
}
function clamp (value, min = 0, max = 1) {
  return value <= min ? min : value >= max ? max : value;
}