
function $Dojo(id) {

    this.myId = document.getElementById(id);

    this.click = function (callback) {
        this.myId.addEventListener("click", callback);

        return this;
    };

    this.hover = function (hoverin, hoverout) {
        this.myId.addEventListener("mouseover", hoverin);
        this.myId.addEventListener("mouseout", hoverout);

        return this;
    };

}


// Instantiate new dojoquery library object
var myElem = new $Dojo("btn");


// Access the click method of the DojoQuery library
var click = function() {
    alert("You clicked the button!");
};

myElem.click(click);

var hoverin = function() {
    myElem.myId.style.color = "red";
};

var hoverout = function() {
    myElem.myId.style.color = "blue";
};

// Change colors on hoverin & hoverout
myElem.hover(hoverin, hoverout);