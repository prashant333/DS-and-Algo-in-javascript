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
            return 'added successfully';
        }
        return 'Item already present';
    };

    // this method is to remove an elements from set
    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index ,1);
            return true;
        }
        return false;
    };

    // returns the size of set
    this.size = function(){
        return collection.length;
    };

    // this method returns union of two set
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.value();
        let secondSet = otherSet.value();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // this method returns intersection of two set
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
}

let setVar = new mySet();
let setVar1 = new mySet();

setVar1.add('are');
setVar1.add('you');
setVar.add('hello');
setVar.add('how');
console.log(setVar.union(setVar1))
console.log(setVar.has('hello'))
setVar.remove('hello')
console.log(setVar.has('hello'))
console.log(setVar.value());
console.log(setVar.add('how'));
