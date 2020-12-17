//! Node is a piece of data.
//! Node will point to the next node

//!PUSH

class node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

//! BAD WAY

let first = new node('hi')
first.next = new node('there')
first.next.next = new node('how')
first.next.next.next = new node('are')
first.next.next.next.next = new node('you')

//! BETTER WAY

class singlyLinkedList {
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        var newNode = new node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    //! Way of traversing through the Singly Linked List
    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    //! POP, Remove something from the end of the list
    pop() {
        if(!this.head) {return undefined}
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //! Shift, Remove something from the beginning of the list
    shift() {
        if(!this.head) {return undefined}
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    //! Unshift, adding something to the beginning
    unshift(val) {
        var newNode = new node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    //! Get, Gets a number and traverses the list that many times and returns the value.
    get(index) {
        if(index < 0 || index >= this.length) return null; 
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    //! Set, accepts an index and a value to replace at that index.
    set(index, val) {
        var indexOfThing = this.get(index);
        if(indexOfThing) {
            indexOfThing.val = val;
            return true;
        }
        return false;
    }

    //! Insert, Same thing as set except instead of replacing it, it makes a new one at that index.
    insert(index, val) {
        //! Edge Cases
        if(index < 0 || index > this.length) return false;
        if(index == this.length) return !!this.push(val);
        if(index == 0) return !!this.unshift(val);

        //! Actual code
        var previous = this.get(index - 1);
        var newNode = new node(val);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //! Remove, Takes a item at a given index and removes it.

}

let list = new singlyLinkedList()
list.push('hello');
list.push('goodbye');
list.push('!');




