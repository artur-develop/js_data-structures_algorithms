// Класс для элемента и приоритета.
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export default class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Функция enqueue для добавления элемента в очередь согласно приоритету
  enqueue(element, priority) {
    // Создаем элемент
    const qElement = new QElement(element, priority);
    let contain = false;

    // Итерация по всему массиву элементов для добавления элемента в правильное место очереди
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        // Как только правильное местоположение найдено, оно ставится в очередь
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    // Если элемент имеет самый высокий приоритет, он добавляется в конец очереди
    if (!contain) {
      this.items.push(qElement);
    }
  }

  // Метод dequeue для удаления элемента из очереди
  dequeue() {
  // Возвращаем извлеченный элемент и удаляем его. Если очередь пуста, возвращается Underflow.
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  // Возвращает элемент с наивысшим приоритетом в очереди Priority, не удаляя его.
  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  // Возвращает элемент с наименьшим приоритетом в очереди
  rear() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  // Функция которая возвращает true если очередь пуста.
  isEmpty() {
    return this.items.length === 0;
  }


  // Распечатать очередь
  printPQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++)
      str += this.items[i].element + " ";
    return str;
  }


  // functions to be implemented
  // enqueue(item, priority)
  // dequeue()
  // front()
  // isEmpty()
  // printPQueue()
}
