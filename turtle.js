// Initial Values
var pen = true;
var d = "M 0 0";
var dir = {
  x: 1,
  y: 0
};
var currentAngle = 0;

// Turning angle in degrees and measured counter-clockwise from horizontal
function turn(angle) {
  currentAngle += angle;
  currentAngle = currentAngle%360;
  var degrees = -currentAngle/180*Math.PI;
  dir.x = Math.cos(degrees);
  dir.y = Math.sin(degrees);
};

// Drawing vs. non-drawing Movement
var penUp = function(){
  pen = false;
};
var penDown = function(){
  pen = true;
};

// Relative moves
var moveForward = function (distance) {
  d += pen ? "l " : "m ";
  d += (distance * dir.x) + " " + (distance * dir.y) + " ";
//   moveCount++;
}

// Absolute moves
var moveTo = function (x, y) {
  d += pen ? "L " : "M ";
  d += x + " " + y + " ";
//   moveCount++;
}

// Call this function to draw the path
function draw() {
    turtlepath = document.getElementById("turtlepath");
    turtlepath.setAttribute('d',d);
    turtleanimation = document.getElementById("turtleanimation");
    turtleanimation.setAttribute('path',d)

    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    var time = length/200;
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
      `stroke-dashoffset ${time}s ease-in-out`;
    // Go!
    path.style.strokeDashoffset = '0';
}