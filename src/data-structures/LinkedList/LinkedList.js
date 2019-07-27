class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null; // По умолчанию, каждый узел не имеет указателя на следующий узел
  }
}

export default class LinkedList {
  constructor() {
    this.head = new Node(); // Создать головной узел всякий раз, когда создается экземпляр LinkedList
  }

  // Добавить в конец списка
  append(item) {
    let current = this.head;
    let newNode = new Node(item);
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return true;
  }

  // Добавить по позиции
  appendAt(pos, item) {
    let counter = 0;
    let current = this.head;
    let newNode = new Node(item);
    while (current.next !== null) {
      if (counter === pos) {
        newNode.next = current.next;
        current.next = newNode;
        return true;
      }
      current = current.next;
      counter++;
    }
    return false;
  }

  // Удалить по значению
  remove(item) {
    let current = this.head;
    while (current !== null) {
      let previous = current;
      current = current.next;
      if (current.data === item) {
        previous.next = current.next;
        return true;
      }
    }
    return false;
  }

  // Удалить по позиции
  removeAt(pos) {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      let previous = current;
      current = current.next;
      if (counter === pos) {
        previous.next = current.next;
        return true;
      }
      counter++;
    }
    return false;
  }


  // Вывести в обратном порядке
  reverse() {
    let current = this.head.next;
    let prev = null;
    let next;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head.next = prev;
    return true;
  }

  // Поиск по элементу
  search(item) {
    let current = this.head.next;
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
    while (current.next !== null) {
      current = current.next;
      counter++;
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
