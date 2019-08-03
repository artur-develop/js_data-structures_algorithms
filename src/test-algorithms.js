import LinkedList from './data-structures/LinkedList/LinkedList';
import DoublyLinkedList from './data-structures/DoublyLinkedList/DoublyLinkedList';
import Stack from './data-structures/Stack/Stack';
import Queue from './data-structures/Queue/Queue';
import HashTable from './data-structures/HashTable/HashTable';
import BinaryHeap from './data-structures/BinaryHeap/BinaryHeap';
import PriorityQueue from './data-structures/PriorityQueue/PriorityQueue';
import BinaryTree from './data-structures/BinaryTree/BinaryTree';

console.log('========== LinkedList ==========');
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.appendAt(1, 10);
linkedList.removeAt(0);
// linkedList.reverse();
linkedList.print();
console.log('Длинна LinkedList = ' + linkedList.length());


console.log('========== DoublyLinkedList ==========');
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.append(4);
doublyLinkedList.append(5);
doublyLinkedList.appendAt(1, 10);
doublyLinkedList.removeAt(0);
doublyLinkedList.print();


// Stack
console.log('========== Stack ==========');
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log('В стеке элементов:' + stack.length());
console.log('В стеке peek:' + stack.peek());
stack.traverse(item => {item.data % 2 === 0 ? console.log(item.data + ' - четное') : console.log(item.data + ' - не четное')});


// Queue
console.log('========== Queue ==========');
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log('Достаем из очереди');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


// HashTable
console.log('========== HashTable ==========');
const hashTable = new HashTable(7);
hashTable.put('Steave');
hashTable.put('Bill');
hashTable.put('Linus');
hashTable.put('Elon');
hashTable.put('Mark');
hashTable.show();


// BinaryHeap
console.log('========== BinaryHeap ==========');
const binaryHeap = new BinaryHeap((a, b) => {
  return a > b;
});

// https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010
binaryHeap.build([20, 19, 17, 13, 15, 8, 5, 11, 9, 10]);
binaryHeap.add(5);
binaryHeap.print();



// PriorityQueue
console.log('========== PriorityQueue ==========');
const priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty()); // testing isEmpty and front on an empty queue. return true
console.log(priorityQueue.front()); // returns "No elements in Queue"
// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);
console.log(priorityQueue.printPQueue()); // prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.front().element); // prints Gourav
console.log(priorityQueue.rear().element); // pritns Sheru
console.log(priorityQueue.dequeue().element); // removes Gouurav. priorityQueue contains [Piyush Sumit Sunny Sheru]
priorityQueue.enqueue("Sunil", 2); // Adding another element to the queue
console.log(priorityQueue.printPQueue()); // prints [Piyush Sumit Sunny Sunil Sheru]


// BinarySearchTree
console.log('========== BinarySearchTree ==========');
const binaryTree = new BinaryTree();
binaryTree.add(50);
binaryTree.add(12);
binaryTree.add(26);
binaryTree.add(50);
binaryTree.add(19);
binaryTree.add(88);
binaryTree.add(55);


