  var inside = 'red';
  var middle = 'blue';
  var outside = 'yellow';
	var canvas;
	function setup() {
  canvas = createCanvas(710, 710);
  background(210, 110, 110);
	canvas.mouseClicked(changeColor);
  var square = 0; 
}
  function draw() {


  push(); 

  
  translate(60, 60);
  fill(inside);
  rect(0, 0, 200, 200);
  fill(outside);
  rect(80, 80, 120, 120);
  fill(middle);
  rect(120, 120, 80, 80);
 

  translate(200, 200);
  fill(inside); 
  rect(0, 0, 200, 200);
  fill(outside);
  rect(0, 0, 120, 120);
  fill(middle);
  rect(0, 0, 80, 80);
		
	
  translate(-200, 0);
  fill(inside); 
  rect(0, 0, 200, 200);
  fill(outside);
  rect(80, 0, 120, 120);
  fill(middle);
  rect(120, 0, 80, 80);
		
	translate(200, -200);
  fill(inside); 
  rect(0, 0, 200, 200);
  fill(outside);
  rect(0,80, 120, 120);
  fill(middle);
  rect(0, 120, 80, 80);
		
  pop();

}

function changeColor(){

 if (inside == 'red' && middle == 'blue' && outside == 'yellow') {
    inside = 'blue';
  	middle = 'yellow';
  	outside = 'red';
  } else {
  	inside = 'red';
  	middle = 'blue';
  	outside = 'yellow';
  }
	
	return false;
	
}