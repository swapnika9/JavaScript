function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
    
}


function runSpeechRecognition() {
    var output = document.getElementById("output");
    var action = document.getElementById("action");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function() {
        action.innerHTML = "<br><medium>listening, please speak...</medium>";
        
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "<br><medium>stopped listening, hope you are done...</medium>";
        recognition.stop();
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        output.innerHTML = "<b>Text:</b> " + transcript ;
        output.classList.remove("hide");
    };
     recognition.start();
}

