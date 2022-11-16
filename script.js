/* var val = 67;
var order = "adobo";

if (val >= 500) {
    order = "Adobo at lechon paksiw!";
} else if ( val < 100 && val >= 40 ) {
    order = "tuyo at noodles lang"
}
else if ( val < 350 && val >= 50) {
        order = "wala ka nang pag-asa"
}
else {
    order = "Money is not enough!"
}



alert(order);


var val = 8;
var order = "adobo";

if ( val >= 10) {
    order = "Gold Plated Fishball";
    if ( val < 15 ) {
    order = "kwekkwek";
    }
}
else {
    order = "Regular Fishball";
}
alert (order);


// For Loop
// needs initialization --> var i = 1; 
// condition --> i <= 10;
// iteration --> i++

for (var i = 1; i <= 10; i++) {
    console.log(i);


for (var i = 5; i > 0; i--) {
    console.log(i);
}
}

for (var i = 0; i < 10; i+=2) {
    console.log(i);
}


for (var i = 1; i <= 10; i++) {
    for (var j = 0; j < 10; j++)
    
    console.log(i , j);

}



for (var i = 0; i < 10; i++) {
    console.log(i);
    

var answer = prompt ("What is the password?");

while (answer != "1234") {
    answer = prompt ("What is the password?");
} 
alert ("May tama ka! Welcome!");


var i = 0; j = 0; 

while ( i < 10 ) {
    while ( j < 10 ) {
        console.log (j);
        j++;
    }
    i++;

var sum = 0;

for (var i = 0; i < 101; i++) {
    sum = sum + i;
    console.log(sum);
}

alert ("welcome!");

if ( confirm (" kumain ka na?")) {
    alert ("very good!");
}else {
    alert ("ano pang hinihintay mo!");
}

*/


var answer = prompt ("What is the password?");

while (answer != "1234") {
    answer = prompt ("What is the password?", "Wrong Password!");
}
alert ("May tama ka! Welcome!");

 