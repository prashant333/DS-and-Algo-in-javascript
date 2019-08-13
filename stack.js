// function for stack opeerations such as push, pop, length.

let stackLetter = []  //this is our stack, declared as an array.

let word = 'madam' //this is our word to check if it is palindrome.
let word1 = 'checkforpalindrome'

let rword = []  //store the reverse word.

// pushing each letter of word into the stack.
for (let i = 0; i < word1.length; i++) {
    stackLetter.push(word1[i])
}

// pop of each letter from stack one after the another.
for (let i = 0; i < word1.length; i++) {
    rword +=   stackLetter.pop();
}
// check if the word and reverse of the word matches.
if(word == rword){
    console.log(`${word1} is palindrome`)
}
else{
    console.log(`${word1} is not a palindrome`)
}
