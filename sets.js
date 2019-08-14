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
        let firstSet = this.value();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    // this method returns the difference of two set
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.value();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method checks if the set is a subset of a different set 
    this.subset = function(otherSet){
        let firstSet = this.value();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}

let setVar = new mySet();  
let setVar1 = new mySet();  
setVar.add("a");  
setVar1.add("b");  
setVar1.add("c");  
setVar1.add("a");  
setVar1.add("d");  
console.log(setVar.subset(setVar1));
console.log(setVar.intersection(setVar1).value());
console.log(setVar1.difference(setVar).value());

