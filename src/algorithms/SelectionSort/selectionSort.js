// Сортировка выбором
function selectionSort(arr) {
  let n = arr.length;
  // Выполняется для каждого элемента массива, кроме последнего.
  for (let i = 0; i < n - 1; i++) {
    let min = i; // В качестве текущего минимального устанавливается текущий элемент,
    for (let j = i + 1; j < n; j++) { // а для всех последующих элементов
      if (arr[j] < arr[min]) min = j; // выпоняется проверка: если следующий элемент меньше текущего, он устанавливается в качестве минимального значения.
      let t = arr[min];
      arr[min] = arr[i];
      arr[i] = t; // Минимальный и текущий элементы меняются местами (если текущий = минимальный, то ничего страшного не случится).
    }
  }
  return arr;
}

console.log(selectionSort([0, 3, 2, 6, 9, 3, 2]));
