noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/g2Gxv0vr/new-moos.png')
}

function setup() {
canvas = createCanvas(450, 450);
canvas.center();
video = createCapture(VIDEO);
video.size(450, 450);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
     if(results.length > 0)
     {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
     }
}

function modelLoaded() {
   console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 450, 450,);
       //fill(0, 255, 255);
    //stroke(255, 0, 255);
    //circle(noseX, noseY, 20);
    image(mustache, noseX - 75, noseY - 75, 150, 150); 
}

function take_snapshot(){
    save('Mustacheio.png');
}