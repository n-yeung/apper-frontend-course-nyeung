class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop the top element from the stack and return it
  pop() {
    if (this.stack.length === 0) {
      console.log("Stack is empty");
    }
    return this.stack.pop();
  }

  check() {
    console.log(this.stack)
  }
}

const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”