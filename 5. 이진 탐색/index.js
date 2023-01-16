// const CountingArray = (...values) => {
//   let accessCount = 0;

//   return new Proxy(values, {
//     get(target, key) {
//       if (key === 'accessCount') return accessCount;
//       if (/^[0-9]+$/.test(key)) accessCount++;
//       return target[key];
//     }
//   })
// }

const binarySearch = (array, value) => {
  let start = -1; 
  let end = array.length; 
  while (end - start > 1) {
    let mid = Math.floor((end - start) / 2) + start;
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] > value) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return -1
}

const dataA = [1, 2, 3, 4, 5]
console.log(binarySearch(dataA, 2)) // 1

const dataB = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearch(dataB, 7)) // 3

const dataC = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearch(dataC, 4)) // -1

const dataD = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearch(dataD, 17)) // 8

const dataE = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(binarySearch(dataE, 1)) // 0

const dataF = [1, 2]
console.log(binarySearch(dataF, 1)) // 0

const dataG = [1, 2]
console.log(binarySearch(dataG, 2)) // 1

const dataH = [1, 2, 5]
console.log(binarySearch(dataH, 6)) // -1