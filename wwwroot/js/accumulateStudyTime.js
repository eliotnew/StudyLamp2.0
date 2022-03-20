function accumulateAssign() {

    window.alert("code reached in the accumulate assign");
    var timeToStudyString = localStorage.getItem("timeSession"); //gets from local storage the timer
    var timeToStudyFloat = parseFloat(timeToStudyString); //converts minitues to seconds then milliseconds
    var toAccumulate = localStorage.getItem("totalTimeStudied");
    var toAccumulateFloat = parseFloat(toAccumulate);

    var accumulated = toAccumulateFloat += timeToStudyFloat;
    localStorage.setItem("totalTimeStudied", accumulated);
    window.alert("code reached in the accumulate assign");
}