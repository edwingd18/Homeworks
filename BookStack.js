class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  const bookStack = new Stack();
  
  const newBook1 = { name: "The Silent Patient", isbn: 9781250301697, author: "Alex Michaelides", editorial: "Celadon Books" };
  const newBook2 = { name: "Where the Crawdads Sing", isbn: 9780735219090, author: "Delia Owens", editorial: "G.P. Putnam's Sons" };
  const newBook3 = { name: "Educated", isbn: 9780399590504, author: "Tara Westover", editorial: "Random House" };
  const newBook4 = { name: "The Night Circus", isbn: 9780307744432, author: "Erin Morgenstern", editorial: "Anchor" };
  const newBook5 = { name: "The Girl on the Train", isbn: 9781594634024, author: "Paula Hawkins", editorial: "Riverhead Books" };
  const newBook6 = { name: "Sapiens: A Brief History of Humankind", isbn: 9780062316110, author: "Yuval Noah Harari", editorial: "Harper" };
  const newBook7 = { name: "Becoming", isbn: 9781524763138, author: "Michelle Obama", editorial: "Crown Publishing Group" };
  const newBook8 = { name: "The Alchemist", isbn: 9780061122415, author: "Paulo Coelho", editorial: "HarperOne" };
  const newBook9 = { name: "Circe", isbn: 9780316556347, author: "Madeline Miller", editorial: "Back Bay Books" };
  const newBook10 = { name: "The Goldfinch", isbn: 9780316055444, author: "Donna Tartt", editorial: "Back Bay Books" };
  
  bookStack.push(newBook1);
  bookStack.push(newBook2);
  bookStack.push(newBook3);
  bookStack.push(newBook4);
  bookStack.push(newBook5);
  bookStack.push(newBook6);
  bookStack.push(newBook7);
  bookStack.push(newBook8);
  bookStack.push(newBook9);
  bookStack.push(newBook10);
  
  bookStack.print();