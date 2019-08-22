// t - искомый элемент, arr - упорядоченный массив, в котором ищем.
function binarySearch(t, arr) {
  let i = 0, j = arr.length, k;

  while (i < j) {
    k = Math.floor((i + j) / 2);
    if (t <= arr[k]) j = k;
    else i = k + 1;
  }

  if (arr[i] === t) return i;     // На выходе индекс искомого элемента.
  else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

console.log(binarySearch(9, [1, 4, 3, 9, 6, 0, 4]));
