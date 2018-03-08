/*
Anish Shenoy, Alessandro Cartegni
SoftDev2 pd07
K09 -- Ask Circles
2018-03-06
*/

var container = document.getElementById("vimage");
var clearButton = document.getElementById("clear");

var circleClicked = function(e){
    if(this.getAttribute("fill") == "red"){
	this.setAttribute("fill", "blue");
    }
    else{
	container.removeChild(this);
	red = true;
	drawDot(Math.random()*500, Math.random()*500);
    }
}
    
var drawDot = function(x, y){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("fill", "red");
    c1.setAttribute("r", "25");
    c1.addEventListener("click", circleClicked);
    container.appendChild(c1);   
}
	
var canvasClicked = function(e){
    /*
      console.log("clicked");
      console.log("e:");
      console.log(e);*/
    if(e.target == this){
	drawDot(e.offsetX, e.offsetY);
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
