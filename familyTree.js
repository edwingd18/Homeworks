class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    isLeaf() {
      if (this.children.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class NaryTree {
    constructor() {
      this.root = null;
    }
  
    search(value, node = this.root) {
      if (!this.root) {
        return null;
      }
  
      if (this.root.value === value) {
        return this.root;
      } else {
        const children = node.children;
  
        const inChildren = children.find((item) => item.value === value);
  
        if (inChildren) {
          return inChildren;
        } else {
          let hasChild;
          children.forEach((item) => {
            if (hasChild) {
              return;
            }
  
            hasChild = this.search(value, item);
          });
  
          return hasChild;
        }
      }
    }
  
    insert(value, parent) {
      const newNode = new Node(value);
  
      if (!parent) {
        if (!this.root) {
          this.root = newNode;
        } else {
          return null;
        }
      } else {
        const parentNode = this.search(parent);
        parentNode.children.push(newNode);
      }
    }
  
    preOrder(node = this.root) {
      if (!node) {
        return;
      }
      console.log(node.value, node.children);
  
      node.children.forEach((element) => {
        this.preOrder(element);
      });
    }
  
    postOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      node.children.forEach((element) => {
        this.postOrder(element);
      });
      console.log(node.value)
    }
  
    inOrder(node = this.root) {
      if (!node) {
        return;
      }
  
      if (node.children.length === 0) {
        console.log(node.value);
      } else {
        this.inOrder(node.children[0]);
        console.log(node.value);
  
        for (let i = 0; i < node.children.length; i++) {
          this.inOrder(node.children[i]);
        }
      }
    }
  }
  
  class Person {
    constructor(firstName, lastName, birthdate) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdate = birthdate;
      this.children = [];
    }
  
    addChild(child) {
      this.children.push(child);
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    toString() {
      return `${this.getFullName()} (Born: ${this.birthdate})`;
    }
  }
  
  // Create family members
  const yo = new Person("Edwin", "Guerrero", "18-08-2005");
  const mama = new Person("Dora", "Diaz", "07-05-1974");
  const papa = new Person("Edwin", "Guerrero Lopez", "21-04-1970");
  const abuela = new Person("Maria", "Lopez", "30-07-1940");
  const abuelo = new Person("Octavio", "Guerrero", "26-01-1952");
  
  // Crear el árbol genealógico
  const familyTree = new NaryTree();
  
  // Insertar miembros de la familia en el árbol genealógico
  familyTree.insert(yo.getFullName(), null); // Yo soy la raíz del árbol
  familyTree.insert(papa.getFullName(), yo.getFullName()); // Mi papá es hijo mío
  familyTree.insert(mama.getFullName(), yo.getFullName()); // Mi mamá es hija mía
  familyTree.insert(abuela.getFullName(), papa.getFullName()); // Mi abuela es hija de mi mamá
  familyTree.insert(abuelo.getFullName(), papa.getFullName()); // Mi abuelo es hijo de mi mamá
  
  // Imprimir el árbol genealógico en preorden, postorden e inorden
  console.log("Preorden:");
  familyTree.preOrder();
  console.log("\nPostorden:");
  familyTree.postOrder();
  console.log("\nInorden:");
  familyTree.inOrder();