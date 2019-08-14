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
 queueOne.print()