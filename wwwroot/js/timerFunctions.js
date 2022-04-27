var url = "http://10.208.61.74:5050/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/";
var lightSelect = localStorage.getItem("lightSelect");
var putUrl = url + lightSelect + "/state";

function timerCreateAndSave() {

    //creates variables for timer, local storage and ajax put request
    var timeToStudyString = localStorage.getItem("timeSession"); //gets from local storage the timer
    var timeToStudyFloat = parseFloat(timeToStudyString); //converts minitues to seconds then milliseconds
    var convertedTime = timeToStudyFloat * 60 * 1000; //converts minitues to seconds then milliseconds
    var seconds = timeToStudyFloat * 60; //just the seconds
    var colourselect = localStorage.getItem("colour");
    var saturation = 255;

    if (colourselect == 0) {
        saturation = 0;
    }
    
    var putDetails = { "on": true, "bri": 16, "hue": colourselect }; //this was RECENTLY ADDED to play around with (the variable)

    var data = '{ "on": true, "bri": 100, "hue": ' + colourselect + ', "sat": ' + saturation + ' }; ';
    var dataString = String(data);
    var data2 = '{ "on": true, "bri": 100, "hue": 25515, "sat": 255 }';//dev hardcode should be deleted when done



    //starts timer
    timeout = setTimeout(timerDone, convertedTime);

    //put request code from reqbin 

    var url = putUrl;

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    

    xhr.send(data2);


    

}

//timer reaches the end and relocates to next screen
function timerDone() {
    var url = putUrl;

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{ "on": false}';

    xhr.send(data);


    $('#page-content-wrapper').load('completed.html');
}

//cancel timer function
function cancelTimer() {
    clearTimeout(timeout);

    var url = putUrl;
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = '{ "on": false}';

    xhr.send(data);


    $('#page-content-wrapper').load('startstudy.html');
}
