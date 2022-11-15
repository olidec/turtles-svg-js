{ //block scoping
  // Initial Values
let pen = true;
let d = "M 0 0 ";
let dir = {
  x: 1,
  y: 0
};
let currentAngle = 0;
var position = {
  x: 0,
  y: 0
};

// Turning angle in degrees and measured counter-clockwise from horizontal
function turn(angle) {
  currentAngle += angle;
  currentAngle = currentAngle%360;
  let degrees = -currentAngle/180*Math.PI;
  dir.x = Math.cos(degrees);
  dir.y = Math.sin(degrees);
};

// Drawing vs. non-drawing Movement
function penUp(){
  pen = false;
};
function penDown(){
  pen = true;
};

// Relative moves
function moveForward(distance) {
  d += pen ? "l " : "m ";
  d += (distance * dir.x) + " " + (distance * dir.y) + " ";
  position.x += distance*dir.x;
  position.y += distance*dir.y;
  
//   moveCount++;
}

// Absolute moves
function moveTo(x, y) {
  d += pen ? "L " : "M ";
  d += x + " " + y + " ";
  position.x = x;
  position.y = y;
//   moveCount++;
}

function hideTurtle() {
  document.getElementById("turtle").setAttribute("fill","transparent");
}

function showTurtle() {
  document.getElementById("turtle").setAttribute("fill","green");
}

// Call this function to draw the path
function draw() {
    turtlepath = document.getElementById("turtlepath");
    turtlepath.setAttribute('d',d);
    turtleanimation = document.getElementById("turtleanimation");
    turtleanimation.setAttribute('path',d)

    let path = document.querySelector('.path');
    let length = path.getTotalLength();
    let time = length/400;
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      `stroke-dashoffset ${time}s linear`;
    // Go!
    path.style.strokeDashoffset = '0';
    turtleanimation.setAttribute("dur", `${time}s`)
    turtleanimation.beginElement()
}
} // end block scoping