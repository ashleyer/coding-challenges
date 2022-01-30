
// let str = "I found my soulmate (I'm in love!).";
// let strArray = str.split(' ');
// let inPigLatin = [];
// console.log(strArray);


// function translatePigLatin(str) {
//     var firstVowel = str.match(/[aeiou]/)
//     console.log(firstVowel)
//     var firstVowelPosition = str.indexOf(firstVowel)

//     if (firstVowelPosition > 0) {
//         return str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + "ay";
//     }
//     else if (firstVowel === null) {
//         return str + "ay"
//     } else {
//         return str + "way"
//     }
// }
// console.log(translatePigLatin("algorithm"));



// function pigLatinify(word) {
//     // Handle single-letter case and empty strings
//     if (word.length < 2) {
//       return word;
//     }
//     return word.slice(1) + '-' + word[0].toLowerCase() + 'ay';
//   }
  
// console.log(pigLatinify("YES"))
  

function translate(msg) {
   msg = "I found my soulmate (/I'm in love!)."
    return msg.split(' ').map(translateWord).join(' ');
}
let vowels = ["a", "e", "i", "o", "u"];
function translateWord(word) {
    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) break;
        if (word.slice(i, i + 2) === 'qu') i += 1;
    };
    return word.slice(i) + word.slice(0, i) + 'ay';
}
translate(msg)