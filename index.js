class Stack {
    constructor() {
      this.items = []; //array is used to implement stack data structure
    }
    push(element) {
      this.items.push(element); // pushes element into items array
    }
    pop() {
      if (this.items.length === 0) return 'empty'; // if empty, returns "Empty"
      return this.items.pop(); // returns top most element in items array and deletes it
    }
    peek() {
      return this.items[this.items.length - 1]; // returns top most item, doesn't delete the item
    }
    isEmpty() {
      return this.items.length == 0; // returns true if stack is empty
    }
    printStack() {
      var string = '';
      for (var i = 0; i < this.items.length; i++) string += this.items[i] + ' ';
      return string;
    }
  }
  
  var stack = new Stack(); //creates object for new stack class
  
  console.log(stack.isEmpty()); // true, stack is empty
  console.log(stack.pop()); // Empty, stack is currently empty
  
  stack.push(10); //push integers into [items]
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  
  console.log(stack.printStack()); // prints elements in [items] onto the console
  console.log(stack.peek()); // prints top most element in stack
  console.log(stack.pop()); // prints top most element and removes it from stack
  console.log(stack.printStack()); // prints elements remaining in stack
  console.log(stack.pop());
  console.log(stack.printStack());
  
  console.log(stack.isEmpty()); // false, stack is not empty
  