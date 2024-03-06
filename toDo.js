class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(node) {
      const newNode = new Node(node);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
    }
    peek(value, current = this.head) {
      if (this.head === null) {
        return false;
      }
  
      if (current != null) {
        if (current.value === value) {
          return true;
        } else {
          return this.peek(value, current.next);
        }
      }
      return false;
    }
  
    size(current = this.head, acum = 1) {
      if (this.head === null) {
        return 0;
      }
      if (current.next !== null) {
        return this.size(current.next, (acum = acum + 1));
      }
      return acum;
    }
  
    remove(value, current = this.head) {
      if (this.head === null) {
        return false;
      }
  
      if (this.head.value === value) {
        return (this.head = this.head.next);
      }
  
      if (current.next !== null) {
        if (current.next.value === value) {
          current.next === current.next.next;
          return true;
        } else {
          return this.remove(value, current.next);
        }
      }
    }
  
    print(){
      let node = this.head
      while(node != null){
          console.log(`
          Nombre: ${node.value.titulo}
          Descripcion:${node.value.descripcion}  
          | Next: ${node.next?.value.titulo || null}, ${node.next?.value.descripcion || null}`)
          node = node.next
      }
    }
  
  }
  
  const todoList = new LinkedList();
  
  const tarea1 = { 
    titulo: "Comprar víveres", 
    descripcion: "Hacer lista y adquirir víveres semanales." 
    };

  const tarea2 = {
     titulo: "Estudiar para examen",
      descripcion: "Repasar apuntes para próximo examen de historia." 
    };

  const tarea3 = {
     titulo: "Limpiar el garaje",
      descripcion: "Organizar y limpiar para liberar espacio y facilitar acceso a herramientas." 
    };

  const tarea4 = {
     titulo: "Llamar al médico",
      descripcion: "Programar cita de seguimiento y discutir resultados de análisis." 
    };

  const tarea5 = {
     titulo: "Preparar presentación",
      descripcion: "Crear diapositivas y contenido para presentación en el trabajo." 
    };
  
  
  
  todoList.append(tarea1)
  todoList.append(tarea2)
  todoList.append(tarea3)
  todoList.append(tarea4)
  todoList.append(tarea5)
  
  todoList.print()
  