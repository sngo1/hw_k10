/*
Alessandro Cartegni, Samantha Ngo
Team Gnocchi
SoftDev2 pd07
K10 -- Objectification
2018-03-08
*/

var container = document.getElementById("vimage");
var clearButton = document.getElementById("clear");

var circleClicked = function(e){
    console.log("THIS: ", this);
    if(this.fill = "lightpink"){
	this.fill = "blue";
	this.setAttribute("fill", this.fill);
	console.log("Color changed.");
    } else {
	container.removeChild(this);
	red = true;
	var obj = drawDot(Math.round(Math.random()*501), Math.round(Math.random()*501));
	obj.display();
	console.log("New circle drawn.");
    }
}

/*
var drawDot = function(x, y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("fill", "red");
    dot.setAttribute("r", "25");
    dot.addEventListener("click", circleClicked);
    container.appendChild(dot);
    console.log("---- Dot: ", dot);
    return dot;
}
*/

var drawDot = function(x, y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.xCor = x;
    dot.yCor = y;
    dot.fill = "lightpink";
    dot.radius = "20";
    dot.display = function(){
	dot.setAttribute("cx", dot.xCor);
	dot.setAttribute("cy", dot.yCor);
	dot.setAttribute("fill", dot.fill);
	dot.setAttribute("r", dot.radius);
	dot.addEventListener("click", circleClicked);
	container.appendChild(dot);
    }
    console.log("---- Dot: ", dot);
    return dot;
}
	
var canvasClicked = function(e){
    /*
      console.log("clicked");
      console.log("e:");
      console.log(e);*/
    if(e.target == this){
	var obj = drawDot(e.offsetX, e.offsetY);
	obj.display();
	console.log("drawn");
    }
};

//Remove all the inner nodes of the SVG area
var clear = function(e){
    console.log("Clear");
    var firstChild = container.firstChild;
    while(firstChild){
	console.log("Clearing: ");
	console.log(firstChild);
	container.removeChild(firstChild);
	firstChild = container.firstChild;
    }
    first = true;
}

	
container.addEventListener("click", canvasClicked);
clearButton.addEventListener("click", clear);
