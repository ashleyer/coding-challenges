// Algorithm Challenge - Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
//   pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//   pigIt('Hello world !');     // elloHay orldway !
  
// Extra Challenge
// N/A
// Constraints
// N/A
// Codewars - 5kyu
// _________________________________NOTES__________
// - begins w consonant, count how many until first vowel, move that consonant block to end of word / add '-ay' to beginning.
// -begins w vowel, only add '-way' to end.

// function toPigLatin(string) {
//     //error if empty field
//     if (string == " ") {
//       return "Cannot Pig-ify blank entry."
//     }
    
//     //create arrays for tracking true vowels and punctuation
//     
//     
    
    // //split the sentence into an array of words
    // var toPig = string.split(/(?=[!?.,])|[_-\s]/).filter(x => x);
    // var endPhrase = [];

// function pigifyIt() {
  

// if (readyToPigify[i].length < 1) {
  
// }
let sentenceWithMarks = "I found my soulmate (/I'm in love!).";
function pig(sentenceWithMarks) {
  // let marks = [".", "?", "!", ",", ";", "-", ":", "(", ")", ' " ', " ' ", "/", "#", "$", "%", "&", "@", "*", "^"];
  let sentence = sentenceWithMarks.replace(/[^a-zA-Z ]/g, "");
  console.log(sentence);
  sentence = sentence.toLowerCase();
  let readyToPigify = sentence.split(" ");
  console.log(readyToPigify);
  let vowels = ["a", "e", "i", "o", "u"];
  let wayWayWay = 'way'
  let ayAyAy = 'ay';
  if (readyToPigify[i].includes(vowels)) {
    return readyToPigify[i].join("") + wayWayWay;
  } {
    for (let i = 0; i < readyToPigify.length; i++) {
      let word = readyToPigify[i];
      let pigified = word.join;
      let totallyPigified = [];
  
      // readyToPigify[i] = word.substring(1) + word.substring(0, 1) + ayAyAy;
      totallyPigified.push(pigified);
      return totallyPigified
      // } else {

      // if (i == vowels[i]) {
      //   readyToPigify[i].substring(substring.length - 1)
    }
  }
}
  
  

  

  


  //     //split the current word by first vowel
  //     var arr = sentence[i].split(/([aeiouAEIOUyY])/).filter(x => x);
  //     var firstLetter = "";
      
  //     //set switch case based on first letters
  //     if (/[^a-zA-Z]/.test(arr[0])) {
  //       firstLetter = "punc";
  //     } else if (/[yY]/.test(arr)) {
  //       firstLetter = "y";
  //     } else if (vowels.indexOf(arr[0]) != -1) {
  //       firstLetter = "vowel";
  //     }
      
  //     //switch statement for handling different word starts
  //     switch (firstLetter) {
  //       case 'punc':
  //         //do nothing to avoid appending suffix to special characters
  //         break;
  //       case 'y':
  //        if (/[aeiouAEIOU]/.test(arr)) {
  //           while (vowels.indexOf(arr[0].charAt(0)) == -1) {
  //             arr.push(arr.shift().toLowerCase());
  //           }
  //           arr.push('ay');
  //         } else {
  //           arr.push(arr.shift().toLowerCase());
  //           arr.push('ay');
  //         }
  //         break;
  //       case 'vowel':
  //         if (/[yY]/.test(arr[arr.length-1])) {
  //           arr.push("ay");
  //         } else {
  //           arr.push("yay"); 
  //         }
  //         break;
  //       default:
  //         arr.push(arr.shift().toLowerCase());
  //         arr.push('ay');
  //         break;
  //     }
      
  //     //capitalize the first letter of the sentence or any word capitalized in the entry
  //     if (i == 0 || sentence[i].charAt(0) == sentence[i].charAt(0).toUpperCase()) {
  //       arr[0] = arr[0].charAt(0).toUpperCase();
  //     }
      
  //     //output arr of stringings
  //     result.push(arr.join(''));
  //   }
    
  //   //return final stringing with spaces before punctuation removed
  //   return result.join(" ").replace(/\s([?.!,])/gi, '$1');
  // }
  
  
  // //Button Control
  // var tButton = document.getElementById('tButton');
  // tButton.onclick = function () {
  //   var inputText = document.getElementById('inputText').value;
  //   var outputText = document.getElementById('outputText').value = to(inputText);
  // };
  
  // //Translate on enter press
  // function process(e) {
  //     var code = (e.keyCode ? e.keyCode : e.which);
  //     if (code == 13) { //Enter keycode
  //         var inputText = document.getElementById('inputText').value;
  //         var outputText = document.getElementById('outputText').value = to(inputText);
  //     }
  // }
  
  