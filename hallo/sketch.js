var h = window.innerHeight;
var b = window.innerWidth;

var a = b;

var speed = 100;
var event = new CustomEvent("stop", { "detail": "Example of an event" });;
var p;
function setup(){

    createCanvas(b,h);
    document.addEventListener("stop", function(e) {
        speed=-10;
        console.log(e.detail); // Prints "Example of an event"
    });
    p = new Player(100,100)

    frameRate(60);


}

function draw(){
    ellipse(a,30,50,50);

    if(a<0){
        document.dispatchEvent(event);

        a=0;
    } else{
        a-=speed;
    }
    p.draw();
}

function Player(a, b){
    this.x = a;
    this.y = b;
    this.draw= function(){
        ellipse(this.x,this.y,50,50);
    }
}

function cell(){
    this.spawn = function(x, y, size){

    }
}