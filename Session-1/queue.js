class Queue {
    constructor() {
      this.items = []
    }
  
    enqueue(item) {
      this.items.push(item)
    }
  
    dequeue() {
      if (this.items.length === 0) {
        return 'Queue is currently empty'
      }
      return this.items.shift()
    }
  
    print() {
      console.log(this.items)
    }
  }
  
  
  const queue = new Queue()
  queue.print()
  queue.enqueue('Milk')
  queue.print()
  queue.enqueue('Eggs')
  queue.print()
  console.log(queue.dequeue())
  queue.print()
  console.log(queue.dequeue())
  queue.print()
  console.log(queue.dequeue())
  
  