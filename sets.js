// function for set operation using javascript

function mySet() {
    
    let collection = []; //this is our set
    
    // checks if the element is present in the collection.
    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    };

    // returns the entire items in the set
    this.value = function(){
        return collection;
    };

    // this method will add an element
    this.add = function(element){
        if(!this.has(element)){
            index = collection.push(element);
            return true;
        }
        return false;
    }
}

let setVar = new mySet();

setVar.add('hello');
setVar.add('how');
console.log(setVar.has('hello'))