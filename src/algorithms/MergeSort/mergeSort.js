let merge_sort = function(array){

  function merge(left, right){
    let result = [];
    let il = 0;
    let ir = 0;
    while (il < left.length && ir < right.length){
      if (left[il] < right[ir]){
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    //merge what is left
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }
  function merge_sort(items){
    //well it is only 1 element
    if (items.length < 2){
      return items;
    }
    let middle = Math.floor(items.length / 2);
    //create two arrays
    let left = items.slice(0, middle);
    let right = items.slice(middle);
    return merge(merge_sort(left), merge_sort(right));
  }
  return merge_sort(array);
};

const arr = [1, 213, 213, 3, 5, 2, 8, 7, 90];
console.log(merge_sort(arr));
