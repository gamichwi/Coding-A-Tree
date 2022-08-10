function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)
	
	noLoop()
}

function draw() {
	background(1000)
	
	translate(width / 2, height / 2 + 200)
	
	branch(100)
}

function branch(branchLength) {
	push()
	if(branchLength > 10) {
		strokeWeight(map(branchLength, 10, 100, 1, 15))
		stroke(70, 40, 20)
		line(0, 0, 0, -branchLength)
		translate(0, -branchLength)
		rotate(random(-20, -30))
		branch(branchLength * random(0.7, 0.9))
		rotate(random(50, 60))
		branch(branchLength * random(0.7, 0.9))
	} else {
		var red = random(1, 255) //+ random(-20, 20)
		var green = random(1, 255) //+ random(-20, 20)
		var blue = random(1, 255) //+ random(-20, 20)
		fill(red, green, blue, 150)
		noStroke()
		//ellipse(0, 0, 10)
		
		beginShape()
		for (var i = 45; i < 135; i++ ) {
			var radius = 15
			var x = radius * cos(i)
			var y = radius * sin(i)
			vertex(x, y)
		}
		for (var i = 135; i > 40; i-- ) {
			var radius = 15
			var x = radius * cos(i)
			var y = radius * sin(-i) + 20
			vertex(x, y)
		}
		endShape(CLOSE)
	}
	pop()
}