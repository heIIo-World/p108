function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rZB-WERtI/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 254) + 1;
    random_number_g = Math.floor(Math.random() * 254) + 1;
    random_number_b = Math.floor(Math.random() * 254) + 1;
        
    document.getElementById("animal_audio").innerHTML = 'Detected Animals: '+results[0].label+" - "+(results[0].confidence*100).toFixed(2)+"%, " +
     results[1].label+" - "+(results[1].confidence*100).toFixed(2)+"%, " +
        results[2].label+" - "+(results[2].confidence*100).toFixed(2)+"%, "
         +results[3].label+" - "+(results[3].confidence*100).toFixed(2) +"%, "
        +results[4].label+" - "+(results[4].confidence*100).toFixed(2);
        document.getElementById("audio_name").innerHTML = 'Results: '+results[0].label;
     document.getElementById("result_confidence").innerHTML = 'Accuracy '+ (results[0].confidence*100).toFixed(2)+"%";
    }
      
    if (results[0].label == "moo") {
        document.getElementById("emoji").innerHTML = "🐮";
    } else if (results[0].label == "bark") {
        document.getElementById("emoji").innerHTML = "🐶";
    } else if (results[0].label == "croak") {
        document.getElementById("emoji").innerHTML = "🐸";
    } else if (results[0].label == "cluck") {
      document.getElementById("emoji").innerHTML = "🐔";
    } else if (results[0].label == "Background Noise") {
        document.getElementById("emoji").innerHTML = "💨";
    }
}