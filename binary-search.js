const print = (...args) => console.log(args.join(' '))

const arr = [1, 2, 3, 4, 5, 6, 7]


binarySearch(arr, 3)




// arr must be sorted
function binarySearch (arr, needle) {
  print('searching for', needle, 'in [', arr.join(' '), ']')

  let left = 0
  let right = arr.length - 1

  let found = -1
  let its = 0

  while (found === -1 && left <= right) {
    its++
    const mid = Math.floor((left + right) / 2)
    const midValue = arr[mid]

    print('iteration', its, '>> L:', left, '| R:', right, '| M', mid, '| arr[M]:', midValue)

    if (needle === midValue) {
      found = mid
    } else if (needle > midValue) {
     left = mid + 1
    } else {
     right = mid - 1
    }
  }

  print('found at [', found, '] after', its, 'iterations')

  return found
}
