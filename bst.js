// create a node class 
class Node{ 
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
// class to add data to BST
class BST{
    constructor(){
        this.root = null; //setting the root value to null
    }
    add(data){ //value to be added is passed into add function
        const node = this.root;
        // if BST is empty, add the value at the root
        if(node == null){
            this.root = new Node(data);
            return;
        } else{
            const searchTree = function(node){ // recursive function to compare the value and add to BST.

                 //checking the left node.
                if(data< node.data){  
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    } else if (node.left!==null){
                        return searchTree(node.left);
                    }

                    //  checking the right node.
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if(node.right!==null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };

            //  Initiating the search function.
            return searchTree(node);
        }
    }

    // finding the minimum value in BST
    findMin(){
        let current = this.root;
        while (current.left !==null) {
            current = current.left;
        }
        return current.data;
    }

    // finding the maximum value in BST

    findMax(){
        let current = this.root;
        while (current.right) {
            curretn = current.right;
        }
        return current.data;
    }

    // finding a value in BST

    find(data){
        let current = this.root;
        while (current.data !==data) {
            if (data< current.data) {
                current = curretn.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
}