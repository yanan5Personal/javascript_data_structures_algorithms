function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  if (items.length > 1) {
    let index = partition(items, left, right);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (pivot > items[left]) {
      left++;
    }

    while (pivot < items[right]) {
      right--;
    }

    if (left <= right) {
      let temp = items[left];
      items[left] = items[right];
      items[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));
