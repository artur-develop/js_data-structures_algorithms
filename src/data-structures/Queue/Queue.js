class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return 'No item';
    } else {
      let itemToPop = this.head;
      this.head = this.head.next;
      return itemToPop;
    }
  }

  length() {
    let current, counter;
    [current, counter] = [this.head, 0];
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    } else {
      return 'Empty';
    }
  }

  isEmpty() {
    return this.length() < 1;
  }

  // Распечатаем очередь
  print() {
    let iterator = this.head;
    while (iterator !== null) {
      console.log(iterator.data);
      iterator = iterator.next;
    }
  }

}
