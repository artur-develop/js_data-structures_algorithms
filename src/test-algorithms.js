import LinkedList from './data-structures/LinkedList/LinkedList';
import DoublyLinkedList from './data-structures/DoublyLinkedList/DoublyLinkedList';
import Stack from './data-structures/Stack/Stack';
import Queue from './data-structures/Queue/Queue';

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


