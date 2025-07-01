/*const outputDiv = document.getElementById("output");
let recognition;

function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support speech recognition. Please try Chrome.");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-IN';

  recognition.onstart = function() {
    outputDiv.textContent = "Listening...";
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    outputDiv.textContent = transcript;

    // Example: send to backend (Flask) if needed
    // fetch('/save', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: transcript })
    // });
  };

  recognition.onerror = function(event) {
    outputDiv.textContent = "Error occurred: " + event.error;
  };

  recognition.onend = function() {
    console.log("Speech recognition service disconnected");
  };

  recognition.start();
}*/
/*
const outputDiv = document.getElementById("output");
let recognition;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true; // Now it keeps listening until stopped manually
  recognition.interimResults = false;
  recognition.lang = 'en-IN';

  recognition.onstart = function() {
    outputDiv.textContent = "Listening...";
  };

  recognition.onresult = function(event) {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript + ' ';
    }
    outputDiv.textContent = transcript.trim();
  };

  recognition.onerror = function(event) {
    outputDiv.textContent = "Error occurred: " + event.error;
  };

  recognition.onend = function() {
    console.log("Speech recognition service disconnected");
  };
} else {
  alert("Your browser doesn't support speech recognition. Please try Chrome.");
}

function startListening() {
  if (recognition) {
    recognition.start();
  }
}

function stopListening() {
  if (recognition) {
    recognition.stop();
  }
}*/
const outputDiv = document.getElementById("output");
let recognition;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = 'en-IN';

  recognition.onstart = function() {
    outputDiv.textContent = "Listening...\n";
  };

  recognition.onresult = function(event) {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript + ' ';
    }
    outputDiv.textContent += transcript.trim() + ' ';
  };

  recognition.onerror = function(event) {
    outputDiv.textContent += "\nError occurred: " + event.error;
  };

  recognition.onend = function() {
    console.log("Speech recognition service disconnected");
  };
} else {
  alert("Your browser doesn't support speech recognition. Please try Chrome.");
}

function startListening() {
  if (recognition) {
    recognition.start();
  }
}

function stopListening() {
  if (recognition) {
    recognition.stop();
  }
}


