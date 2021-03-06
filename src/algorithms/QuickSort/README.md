# Быстрая сортировка

Сложность алгоритма O(n log n). В худшем случае O(n2).

Это не стабильный алгоритм, так как скорость выполнения зависит от того как выбран опорный элемент (pivot).

###Как это работает?

Quicksort работает, выбирая элемент из массива и обозначая его как «pivot». Все остальные элементы в массиве делятся на две категории - они меньше или больше, чем этот элемент сводки.
Каждый из двух результирующих массивов (массив значений, меньших, чем pivot, и массив значений, превышающих pivot), затем обрабатывается по тому же алгоритму. Опорная точка выбрана, и все остальные значения разделены на два массива значений меньше и больше.

В конце концов, подмассив будет содержать одно значение или не иметь значения вообще, так как больше не будет значений, с которыми его можно сравнивать. Все остальные значения были обозначены как «pivot» в некоторой предыдущей точке и не опускались до этого нижнего подмассива. В этот момент значения будут отсортированы, поскольку все значения теперь объявлены как меньшие или большие, чем все другие значения в массиве.

