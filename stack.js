// function for stack opeerations such as push, pop, length.

let stackLetter = []  //this is our stack, declared as an array.

let word = 'racecars' //this is our word to check if it is palindrome.

let rword = []  //store the reverse word.

// pushing each letter of word into the stack.
for (let i = 0; i < word.length; i++) {
    stackLetter.push(word[i])
}

// pop of each letter from stack one after the another
for (let i = 0; i < word.length; i++) {
    rword +=   stackLetter.pop();
}

if(word == rword){
    console.log(`${word} is palindrome`)
}
else{
    console.log(`${word} is not a palindrome`)
}
