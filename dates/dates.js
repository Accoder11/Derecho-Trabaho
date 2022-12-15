var todaysdate = new Date();

// var h1 = document.getElementById("currentdateDisplay");
// h1.innerHTML = todaysdate;

var yearDisplay = document.getElementById("yearDisplay");
yearDisplay.innerHTML = todaysdate.getFullYear();

// two ways to set month

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "December"];

var monthDisplay = document.getElementById("monthDisplay");
monthDisplay.innerHTML = months[todaysdate.getMonth()];

// Or this way

// monthDisplay.innerHTML = todaysdate.getMonth();
// monthDisplay.innerHTML = todaysdate.toLocaleString("default", {month: "short"});



var dateDisplay = document.getElementById("dateDisplay");
dateDisplay.innerHTML = todaysdate.getDate();

// previous month


// var h1 = document.getElementById("currentdateDisplay");
// h1.innerHTML = todaysdate;

var todaysdate = new Date();
// todaysdate.setMonth(todaysdate.getMonth());
// todaysdate.setFullYear(todaysdate.getFullYear());
// todaysdate.setDate(todaysdate.getDate()-2
// );
todaysdate.setHours(todaysdate.getHours()-8
);


var h1 = document.getElementById("currentdateDisplay");
h1.innerHTML = todaysdate;

setTimeout (function(){
    var popup = document.getElementById("popup");
    popup.innerHTML = "Atubao! It's already 5 seconds!"
    popup.style = "background: red; font-size: 50px"
},5000);