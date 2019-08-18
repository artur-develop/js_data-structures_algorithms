export default class BinaryHeap {
  constructor(compare) {
    this.heap = [];         // массив
    this.compare = compare; // функция для сравнения
  }

  add(value) {
    this.heap.push(value);  // добавляем значение в массив
    let i = this.heap.length - 1;
    let parent = (i - 1) / 2; // формула для поиска родителя
    while (i > 0 && this.heap[parent] < this.heap[i]) {
      this.swap(this.heap, i, parent);
      i = parent;
      parent = (i - 1) / 2;
    }
  }

  // Если в куче изменяется один из элементов, то она может перестать удовлетворять свойству упорядоченности. Для восстановления этого свойства служит процедура Heapify
  heapify(index) {
    let leftChild;
    let rightChild;
    let topChild;
    while (true) {
      leftChild = 2 * index + 1;  // Первый ребенок
      rightChild = 2 * index + 2; // Второй ребенок
      topChild = index;
      if (
        leftChild < this.heap.length &&
        this.compare(this.heap[leftChild], this.heap[topChild])
      ) {
        topChild = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.compare(this.heap[rightChild], this.heap[topChild])
      ) {
        topChild = rightChild;
      }
      if (topChild === index) {
        break;
      }
      this.swap(this.heap, index, topChild);
      index = topChild;
    }
  }

  build(sourceArray) {
    this.heap = [...sourceArray];
    for (let i = this.heap.length / 2; i >= 0; i--) {
      this.heapify(i);
    }
  }

  getTop() {
    let result = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1, this.heap.length);
    return result;
  }

  heapSort(array) {
    this.build(array);
    for (let i = array.length - 1; i >= 0; i--) {
      array[i] = this.getTop();
      this.heapify(0);
    }
    return array;
  }

  swap(array, firstIndex, secondIndex) {
    const tmp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tmp;
  }

  print() {
    console.log(`root -> ${this.heap[0]}`);
    for (let i = 0; i < this.heap.length; i++) {
      let left = this.heap[2 * i + 1];
      let right = this.heap[2 * i + 2];
      if (!!left || right) {
        console.log(
          `left ${!!left ? left : ""} -- right ${!!right
            ? right
            : ""}`
        );
        if (i % 2 === 0) {
          console.log("__level__");
        }
      }
    }
  }
}
