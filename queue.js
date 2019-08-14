function Queue(){
    // this will be our collection.
    let collection = [];

    // this prints the entire queue.
    this.print = function(){
        console.log(collection);
    }
    
    // this method pushes an element into the queue.
    this.enqueue = function(element){
        collection.push(element);
    }

    // this will delete an element from queue
    this.dequeue = function(){
        return collection.shift();
    }
    
    // this will return the element at the front 
    this.front = function(element){
        return collection[0];
    };

    // returns the size of queue
    this.size = function(){
        return collection.length;
    }
}
 let queueOne = new Queue();
 queueOne.enqueue('hello');
 queueOne.enqueue('world');
 queueOne.dequeue();
 queueOne.print()

//  priority queue.
function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length; 
    };
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var pq = new PriorityQueue(); 
pq.enqueue(['prashant', 2]); 
pq.enqueue(['Raj', 3]);
pq.enqueue(['Ram', 1])
pq.enqueue(['jhon', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();