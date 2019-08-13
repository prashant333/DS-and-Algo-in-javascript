// function for stack opeerations such as push, pop, length.

// stack opereration using javascript

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


// basic stack functioning using javascript

let stack = function(){
    this.count = 0;
    this.store ={};

    // add the value in stack

    this.push = function(value){
        this.store[this.count] = value;
        this.count++;
    }
    // get the value from the top of stack and reduces the stack.
    this.pop = function(){
        // if there is no value return undefined.
        if(this.count === 0){
            return undefined;
        }
        else{ 
            this.count--; // first decrement the counter.
            let result = this.store[this.count];
            delete this.store[this.count];
            return result;
        }
    }
    // retunr the size os stack.

    this.size = function(){
        return this.count;
    }
    // return the value at the top of stack but doesent reduces the stack.

    this.peek = function(){
        return this.store[this.count-1]
    }
}
// create a variable for stack operations.
let myStack = new stack();

// perform the stack operations.
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());