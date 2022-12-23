var maxCol = 5;
var maxRow = 5;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 100);
  noStroke();
  var xSpacing = (width/maxCol);
  var ySpacing = (height/maxRow);
  translate(30, 25);
  
  // each column and row are summed
  for (var x = 0; x < maxCol; x++) {
  for (var y = 0; y < maxRow; y++) {
    
  push();
  translate(x*xSpacing, y*ySpacing);
    
  //  determines if column or row is even or odd, fills with green color. if column and row are even, then display green square or if column and row are odd, then display green
  if (x % 2 == 0 && y % 2 == 0 || x % 2 == 1 && y % 2 == 1) {
        fill(139, 64, 56);
        textAlign(CENTER);
        text("1", 30, 30);
      }
    
    // else fill with red color
    else {
        fill(360, 360, 100);
      }
        
    if (x == 3 && y == 4) {
        textAlign(CENTER);
        text("Christmas Eve", 30, 30);
      }
    else if (x == 4 && y == 4) {
        textAlign(CENTER);
        text("Christmas Day", 30, 30);
    }
    else {
      beginShape();
      rect(x,y,60,60);
      }
      endShape();
      pop();
  }
  }
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;