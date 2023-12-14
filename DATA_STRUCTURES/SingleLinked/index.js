class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//understand how it works
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

// let first = new Node("hello");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
const list = new SinglyLinkedList();
list.push("HELLO WORLD");
list.push("SALAM YURT");
