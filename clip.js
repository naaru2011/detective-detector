function preload(){
    loadImage("clipboard.jpg");
}

function setup() {
    createCanvas(600, 500, 0, 0);
    document.getElementById("nil").innerHTML = "Status: Detecting Objects";
    objectDetector = ml5.objectDetector('crossed', modelLoaded);

}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);

    
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
}

function draw(){
if (status != "") {
    for (i=0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "There are 2 big objects and Cocossd has only identified one"
        text(objects[i].label + " " + "%", objects[i].x, objects[i].y);
    }
        
}
}


