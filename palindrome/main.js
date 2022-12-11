const word = prompt ("Enter any word: ");

var input = word;
var length = word.length;
var reverseWord = [];


for (var i = length; i >=0; i--) {

    reverseWord[i] = word[length-1-i];
    
    if (word[i] !== input[length - 1 -i]) {

        const h1 = document.getElementById ("palindrome");
        h1.innerHTML = "No, " + word + " is not a palindrome"
        
    } else 
    {
        
        const h1 = document.getElementById ("palindrome");
        h1.innerHTML = "Yes, " + word + " is a palindrome"
    }
}


alert ("reversed version: " + reverseWord);

