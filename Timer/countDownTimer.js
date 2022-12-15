
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");


// creating date objects

var startTime;
var endTime;
var intervalID;


function start() {
    startTime = new Date();
    endTime = new Date();

    // setting startTime to 0:00:00

    startTime.setHours(0,0,0);
    endTime.setHours(hours.value, minutes.value, seconds.value);
    stopBtn.style = "background-color:white;"
    if (endTime <= startTime) {
        stop();
        
    }
        intervalID = setInterval(function(){
        
        
            // timer has to stop when endTime = starTime
    
            if (endTime <= startTime) {
                stop();
                
            }else {
                //subtracting 1 second from endTime
    
            endTime.setSeconds(endTime.getSeconds() - 1);
            update();
            }
    
        }, 1000);
    }
    
    
    //update input fields by end time
    
    function update() {
        
        hours.value = endTime.getHours();
        minutes.value = endTime.getMinutes();
        seconds.value = endTime.getSeconds();
    }
    
    function stop() {
        pause();
        endTime.setHours(0,0,0);
        startBtn.innerHTML = "Start";
        disableInput(false);
        stopBtn.style = "background-color:red;"
        startBtn.style = "background-color:white;"
        update();
    }
    
    function pause() {
        clearInterval(intervalID);
    }
    
    function startOrPause() {
        if (startBtn.innerHTML == "Start" || startBtn.innerHTML == "Resume"){
            startBtn.innerHTML = "Pause";
            start();
            disableInput(true);
            startBtn.style = "background-color:green;"

        } else if (startBtn.innerHTML == "Pause"){
            startBtn.innerHTML = "Resume";
            pause();
            startBtn.style = "background-color: yellow;"
        }
    }
   


    function disableInput(canEdit){
        hours.disabled = canEdit;
        minutes.disabled = canEdit;
        seconds.disabled = canEdit;
    }

   
    
    

//buttons

startBtn.addEventListener('click', startOrPause);
stopBtn.addEventListener('click', stop);

