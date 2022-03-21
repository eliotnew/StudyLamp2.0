function accumulateAssign() {

    
    var timeToStudyString = localStorage.getItem("timeSession"); //gets from local storage the timer
    var timeToStudyFloat = parseFloat(timeToStudyString); //converts minitues to seconds then milliseconds
    var toAccumulate = localStorage.getItem("totalTimeStudied");
    var toAccumulateFloat = parseFloat(toAccumulate);

    var accumulated = toAccumulateFloat += timeToStudyFloat;
    localStorage.setItem("totalTimeStudied", accumulated);
    
}