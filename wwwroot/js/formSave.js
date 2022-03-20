
document.getElementById("goButton").addEventListener("click", formToLocalStorage);

function formToLocalStorage(event) {

    


    var userName = document.getElementById("userNameres"); //creates variable put of the HTML form using the id
    localStorage.setItem("userName", userNameres.value); //sets the key value pair in my browser local storage

    var colour = document.getElementById("colorres");
    localStorage.setItem("colour", colorres.value);

    var timeSession = document.getElementById("timeSessionres");
    localStorage.setItem("timeSession", timeSessionres.value);


    if (!localStorage.getItem('totalTimeStudied')) {

        var totalTimeStudied = localStorage.setItem("totalTimeStudied", 0);
    }

   

    $('#page-content-wrapper').load('homescreen.html');

}


