//https://teachablemachine.withgoogle.com/models/uzveQOiud/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uzveQOiud/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('wolf');
        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');


        if (results[0].label =="barking") {
            img.src = 'Dog.gif';
            img1.src = 'Cute.jpg';
            img2.src = 'wolf.jpg';
        } else if (results[0].label =="Meow") {
            img.src = 'dog.jpg';
            img1.src = 'Kitty.gif';
            img2.src = 'wolf.jpg';
        } else if (results[0].label =="howl") {
            img.src = 'Cute.jpg';
            img1.src = 'dog.jpg';
            img2.src = 'Wolf.gif';
        } else  {
            img.src = 'Dog.gif';
            img1.src = 'Wolf.gif';
            img2.src = 'Kitty.gif';
        }
    }
}