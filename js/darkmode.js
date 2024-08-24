const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");

darkButton.addEventListener("click", function() {
    document.body.classList.add("dark-mode"); 
    document.body.classList.remove("light-mode"); 
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; 
    const allTextElements = document.querySelectorAll("input,li, p, h1, h2, h3, span");
    allTextElements.forEach(element => {
        element.style.color = "white";
    });
    const calendar = document.getElementById("calendar");
    if (calendar) {
        calendar.style.border = "1px solid white"; 
        
    }
    const calendarHeader = document.querySelector("#calendar-header button:first-child");
    const calendarHeader2 = document.querySelector("#calendar-header button:last-child");
    if (calendarHeader) {
        calendarHeader.style.color = "white";
    }
    if (calendarHeader2) {
        calendarHeader2.style.color = "white";
    }
    const dark = document.querySelector("#mode button:first-child");
    const light = document.querySelector("#mode button:last-child");
    if (dark) {
        dark.style.backgroundColor = "white";
    }
    if (light) {
        light.style.backgroundColor = "white";
    }

});

lightButton.addEventListener("click", function() {
    document.body.classList.add("light-mode"); 
    document.body.classList.remove("dark-mode"); 
    document.body.style.backgroundImage = images[Math.floor(Math.random() * images.length)];
    document.body.classList.add('background-image');
    document.body.style.backgroundImage = `url('img/${chosenImage}')`;
    document.body.style.backgroundColor = ""; 
    document.body.style.color = ""; 

    const allTextElements = document.querySelectorAll("input,li, p, h1, h2, h3, span");
    allTextElements.forEach(element => {
        element.style.color = ""; 
    });
    const calendar = document.getElementById("calendar");
    if (calendar) {
        calendar.style.border = ""; 
        
    }
    const calendarHeader = document.querySelector("#calendar-header button:first-child");
    const calendarHeader2 = document.querySelector("#calendar-header button:last-child");
    if (calendarHeader) {
        calendarHeader.style.color = "";
    }
    if (calendarHeader2) {
        calendarHeader2.style.color = "";
    }
    const dark = document.querySelector("#mode button:first-child");
    const light = document.querySelector("#mode button:last-child");
    if (dark) {
        dark.style.backgroundColor = "";
    }
    if (light) {
        light.style.backgroundColor = "";
    }
});