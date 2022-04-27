
document.getElementById("goButton").addEventListener("click", formToLocalStorage);

function formToLocalStorage(event) {

    var userName = document.getElementById("userNameres"); //creates variable put of the HTML form using the id
    localStorage.setItem("userName", userNameres.value); //sets the key value pair in my browser local storage

    var colour = document.getElementById("colorres");
    localStorage.setItem("colour", colorres.value);

    var timeSession = document.getElementById("timeSessionres");
    localStorage.setItem("timeSession", timeSessionres.value);

    var lightSelect = document.getElementById("light");
    localStorage.setItem("lightSelect", lightSelect.value);

    //If there is no previous study time, creates one
    if (!localStorage.getItem('totalTimeStudied')) {

        var totalTimeStudied = localStorage.setItem("totalTimeStudied", 0);
    }
    //if in error, it is NaN, makes it zero
    if (localStorage.getItem('totalTimeStudied') == "NaN") {

        var totalTimeStudied = localStorage.setItem("totalTimeStudied", 0);
    }

    $('#page-content-wrapper').load('timerprogression.html');

}


