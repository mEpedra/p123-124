difference= 0;
function setup (){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    text("Hello",100,400);
    document.getElementById("span").innerHTML="fontsize of the text is " + difference + "px";
    
}
function modelLoaded(){
    console.log('PoseNet Is initialized!');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX);
    }
}