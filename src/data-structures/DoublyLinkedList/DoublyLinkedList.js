class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Добавить в конец списка
  append(item) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  // Добавить по позиции
  appendAt(pos, item) {
    let current = this.head;
    let counter = 1;
    let node = new Node(item);
    if (pos === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      while (current) {
        current = current.next;
        if (counter === pos) {
          node.prev = current.prev;
          current.prev.next = node;
          node.next = current;
          current.prev = node;
        }
        counter++;
      }
    }
  }

  // Удалить по значению
  remove(item) {
    let current = this.head;
    while (current) {
      if (current.data === item) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
  }

  // Удалить по позиции
  removeAt(pos) {
    let current = this.head;
    let counter = 1;
    if (pos === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      while (current) {
        current = current.next;
        if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else if (counter === pos) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          break;
        }
        counter++;
      }
    }
  }

  // Вывести в обратном порядке
  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  // Поиск по элементу
  search(item) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.data === item) {
        return counter;
      }
      current = current.next;
      counter++;
    }
    return false;
  }

  // Количество элементов в LinkedList
  length() {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  // LinkedList пустой?
  isEmpty() {
    return this.length() < 1;
  }

  // Распечатать содержимое списка
  print() {
    let current = this.head;
    let elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(' '));
    return elements.join(' ');
  }
}
