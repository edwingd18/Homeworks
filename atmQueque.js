class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    print() {
      return this.queue;
    }
  }
  
  const atmQueue = new Queue();
  
  const persona1 = {
    nombre: "Alberto",
    horaLlegada: "9:00 AM",
  };
  
  const persona2 = {
    nombre: "María",
    horaLlegada: "8:30 AM",
  };
  
  const persona3 = {
    nombre: "Carlos",
    horaLlegada: "9:15 AM",
  };
  
  const persona4 = {
    nombre: "Ana",
    horaLlegada: "8:45 AM",
  };
  
  const persona5 = {
    nombre: "Luis",
    horaLlegada: "9:30 AM",
  };
  
  atmQueue.enqueue(persona1)
  atmQueue.enqueue(persona2)
  atmQueue.enqueue(persona3)
  atmQueue.enqueue(persona4)
  atmQueue.enqueue(persona5)
  
  atmQueue.print()