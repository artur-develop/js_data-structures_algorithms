class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.top = null;
  }

  // Добавляем значение в стек
  push(item) {
    const node = new Node(item);
    if (this.top) {         // если стек не пустой
      node.next = this.top; // у созданного node меняем указатель next на узел (node) который на вершине
      this.top = node;      // на вершине теперь хранится наш node
    } else {                // если стек пустой
      this.top = node;      // то указатель на вершину будет на нашем узле (node)
    }
  }

  // Достаем значение из стека
  pop() {
    if (this.top) {               // если указатель на вершину стека есть
      const topItem = this.top;   // записываем его в переменную, чтобы позже возвратить
      this.top = this.top.next;   // новым топом становится следующий узел
      return topItem.data;        // возвращаем значение с вершины
    } else {
      console.log('Stack is empty!');
      return false;
    }
  }

  // Количество элементов в стеке
  length() {
    let current = this.top;     // в переменную current присваиваем узел который на вершине
    let counter = 0;            // счетчик элементов
    while (current) {           // пока есть узлы
      counter++;                // увеличиваем счетчик
      current = current.next;   // переходим на следующий узел
    }
    return counter;
  }

  // Обратный порядок
  reverse() {
    let current = this.top;     // в переменную current присваиваем узел который на вершине
    let prev = null;            // предыдущего узла пока нет
    while (current) {           // цикл пока есть следующий узел
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.top = prev;
  }

  // Значение с вершины стека без извлечения (удаления указателя)
  peek() {
    return (this.top) ? this.top.data : null;
  }

  traverse(fn) {              // получаем функцию
    let current = this.top;   // в переменную current присваиваем узел который на вершине
    while (current) {         // цикл пока есть узел
      fn(current);            // выполняем функцию для текущего узла
      current = current.next; // записываем следующий узел в current
    }
  }

  // Распечатаем стек
  print() {
    let iterator = this.top;
    while (iterator !== null) {
      console.log(iterator.data);
      iterator = iterator.next;
    }
  }
}
