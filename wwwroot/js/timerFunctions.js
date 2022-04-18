function timerCreateAndSave() {

    //creates variables for timer, local storage and ajax put request
    var timeToStudyString = localStorage.getItem("timeSession"); //gets from local storage the timer
    var timeToStudyFloat = parseFloat(timeToStudyString); //converts minitues to seconds then milliseconds
    var convertedTime = timeToStudyFloat * 60 * 1000; //converts minitues to seconds then milliseconds
    var seconds = timeToStudyFloat * 60; //just the seconds

    var colourselect = localStorage.getItem("colour");

    var putDetails = { "on": true, "bri": 16, "hue": colourselect }; //this was RECENTLY ADDED to play around with (the variable)

    //starts timer
    timeout = setTimeout(timerDone, convertedTime);

    //starts lights
    $.ajax({
        url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state",
        type: "PUT",
        data: JSON.stringify(putDetails)

    })

}

//timer reaches the end and relocates to next screen
function timerDone() {
    
    $('#page-content-wrapper').load('completed.html');
}

//cancel timer function
function cancelTimer() {
    clearTimeout(timeout);
    $('#page-content-wrapper').load('startstudy.html');
}
