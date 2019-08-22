function linearSearch(t, arr) { // t - искомый элемент, arr - массив, в котором ищем.
  let n = arr.length, i = 0;
  arr[n] = t;
  while (arr[i] !== t) i++;
  if (i < n) return i; // На выходе индекс искомого элемента.
  else return -1;      // Если искомого элемента нет в массиве, то -1.
}

console.log(heapSort(9, [1, 4, 3, 9, 6, 0, 4]));
