// Turtle graphics drawing to SVG (?)
var TAU = 2 * Math.PI;

// var moveCount = 0;
var pen = true;
var d = "";
var vector = {
  x: 1,
  y: 0
};
var currentAngle = 0;

// Relative turns, angles are 0.0 to 1.0
var turn = function(){
  vector.x = Math.sin(TAU*currentAngle);
  vector.y = Math.cos(TAU*currentAngle);
};
var turnRight = function(angle){
  currentAngle += angle;
  currentAngle = currentAngle%1;
  turn();
};
var turnLeft = function(angle){
  turnRight(-angle);
};

// Absolute turn
var turnTo = function(angle){
  currentAngle = angle;
  turn();
};

// Drawing
var penUp = function(){
  pen = false;
};
var penDown = function(){
  pen = true;
};

// Relative moves
var moveForward = function (distance) {
  d += pen ? "l " : "m ";
  d += (distance * vector.x) + " " + (distance * vector.y) + " ";
//   moveCount++;
}

// Absolute moves
var moveTo = function (x, y) {
  d += pen ? "L " : "M ";
  d += x + " " + y + " ";
//   moveCount++;
}

// Swiss Cross (recursive space-filling curve algorithm)
// var segmentLength = 10;
// function unit(iteration) {
//   if (iteration > 0) {
//     unit(iteration - 1);
//     turnRight(0.25);
//     unit(iteration - 1);
//     moveForward(segmentLength);
//     unit(iteration - 1);
//     turnRight(0.25);
//     unit(iteration - 1);
//   }
// }

// // Draw it
// penUp();
// moveTo(20, 30);
// turnTo(7/8);
// penDown();
// // Top half
// unit(6);
// // Bottom half
// moveForward(segmentLength);
// unit(6);

// var doc = document.getElementById("doc");
// var path = doc.getElementById("turtle");
// path.setAttributeNS(null, "d", d);

// function show() {
//     var info = document.getElementById("intro");
//     info.innerHTML = "Hello"
// }

function draw() {
    // var svgString = '<svg id="doc" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-500 -500 1000 1000"><path id="turtle" d="';
    // svgString += d;
    // svgString += '" stroke="black" fill="none" vector-effect="non-scaling-stroke" /></svg>';
    turtle = document.getElementById("turtle");
    turtle.setAttribute('d',d);
}

// // Make SVG Blob
// window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL || null;
// var svgString = '<svg id="doc" xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500"><path id="turtle" d="';
// svgString += d;
// svgString += '" stroke="black" fill="none" vector-effect="non-scaling-stroke" /></svg>';
// var svgBlob = new Blob([svgString], { "type" : "image/svg+xml" });
// var svgBlobURL = URL.createObjectURL(svgBlob);

// if (svgBlobURL) {
//   // Make and add SVG element as img
//   var svgImage = new Image();
//   svgImage.src = svgBlobURL;
//   document.body.appendChild(svgImage);

//   // Make and add SVG download link
//   var downloadLink = document.createElement("a");
//   downloadLink.innerHTML = "download";
//   downloadLink.setAttribute("target", "_blank");
//   downloadLink.setAttribute("href", svgBlobURL);
//   downloadLink.setAttribute("download", "turtle");
//   info.appendChild(downloadLink);
// } else {
//   // Safari
//   document.body.innerHTML += svgString;
// }