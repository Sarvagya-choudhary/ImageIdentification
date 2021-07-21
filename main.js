Webcam.set({
    width: 350,height:300, image_format: 'png', png_quality:100
});
camera= document.getElementById("camera");
Webcam.attach(camera);
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='Result'  src='"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cYjKy8UxO/model.json",model);
function model(){
    console.log("Model loaded successfully");
}
function Check(){
    img= document.getElementById("Result");
    classifier.classify(img,results);
}
function results(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("objectName").innerHTML=result[0].label;
        document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}