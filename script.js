// var h1 = document.getElementById("greet");

// // h1.innerHTML = "Good bye!"

// var firstname = prompt("What's your name?")
// // h1.innerHTML = firstname;

// h1.innerHTML = h1.innerHTML + " " + firstname;

// var p = document.getElementById("sentence");
// p.style = "background-color: red; font-family: sans-serif";


// var inputText = document.getElementById("username");
// inputText.value = "Rolly";

// console.log(inputText.value);

// var num = "45";
// console.log(Number(num) + 10);

// var num = "45.20";
// console.log(Number(num) + 10);

// var day = 28;
// var month = 11;
// var year = 2022;

// console.log(day.toString() + month.toString() + year.toString());

// var firstname = "Juan dela Cruz";
// console.log(firstname.length);
// console.log(firstname[firstname.length-1]);

// p.innerHTML = p.innerHTML.toUpperCase();
// console.log(p.innerHTML);
// console.log("Juan".toLowerCase() == "juan".toLowerCase)

// var softDrinks = ["Coke", "Royal", "Pepsi", "Sprite"];

// // softDrinks[0];
// // softDrinks[1];
// // softDrinks[2];
// // softDrinks[3];

// for (var i = 0; i < softDrinks.length; i++) {
// //     console.log(softDrinks[i]);
// }

// // for (var k in softDrinks) {
// //     console.log(softDrinks[k]);
//     softDrinks[k] = softDrinks[k].toUpperCase();
//     // softDrinks[2] = "Atubao";
// }
// softDrinks.push("Kape na lang", "dog", "cat", "monkey");
// console.log(softDrinks);
// console.log(softDrinks.length);
// var middle = (softDrinks.length)/2;
// console.log(middle);
// var popped = softDrinks.pop();
// console.log(popped);
// var deleted = softDrinks.splice(Number(middle),1);
// console.log(deleted);
// console.log(softDrinks);

var animals = ["aso","pusa", "kabayo", "unggoy", "lamok", "ibon", "kalabaw", "paru-paru", "buwaya"];

for (var a in animals) {
    console.log(animals[a]);
}
animals.push("Lion",
"Tiger",
"Goat",
"Horse",
"Donkey",
"Dog",
"Cat",
"Pig",
"dolphin","lizard","frog")
console.log(animals.length);
console.log(animals);

var deleted = animals.splice(animals.length/4,1);
console.log(animals.length/4);

console.log(deleted);
console.log(animals);















































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


// var answer = prompt ("What is the password?");

// while (answer != "1234") {
//     answer = prompt ("What is the password?", "Wrong Password!");
// }
// alert ("May tama ka! Welcome!");
