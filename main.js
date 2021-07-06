

difference=0;
rightWrist_x=0;
leftWrist_x=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(100,100);

    canvas=createCanvas(550,440);
    canvas.position(700,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initiallized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        leftWrist_x=results[0].pose.leftWrist.x;
        rightWrist_x=results[0].pose.rightWrist.x;
        difference=floor(leftWrist_x-rightWrist_x);
        console.log("right wrist x= "+rightWrist_x+", left wrist x= "+leftWrist_x+", difference= "+difference);
    }
}

function draw(){
    background('#fc0303');
    fill('#5c088a');
    textSize(difference);
    text('Dnyanesha',50,400);
   

    document.getElementById("font_size").innerHTML="Font size of the text is= "+difference+"px";
}

