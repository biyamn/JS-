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

const dataA = [1, 2, 3, 4, 5];
valueA = 2;
console.log('array: ', dataA, 'value: ', valueA, 'result: ', binarySearch(dataA, valueA)) // 1

const dataB = [1, 3, 5, 7, 9, 11, 13, 15, 17]
valueB = 7
console.log('array: ', dataB, 'value: ', valueB, 'result: ', binarySearch(dataB, valueB)) // 3

const dataC = [1, 3, 5, 7, 9, 11, 13, 15, 17]
valueC = 4
console.log('array: ', dataC, 'value: ', valueC, 'result: ', binarySearch(dataC, valueC)) // -1

const dataD = [1, 3, 5, 7, 9, 11, 13, 15, 17]
valueD = 17
console.log('array: ', dataD, 'value: ', valueD, 'result: ', binarySearch(dataD, valueD)) // 8

const dataE = [1, 3, 5, 7, 9, 11, 13, 15, 17]
valueE = 1
console.log('array: ', dataE, 'value: ', valueE, 'result: ', binarySearch(dataE, valueE)) // 0

const dataF = [1, 2]
valueF = 1
console.log('array: ', dataF, 'value: ', valueF, 'result: ', binarySearch(dataF, valueF)) // 0

const dataG = [1, 2]
valueG = 2
console.log('array: ', dataG, 'value: ', valueG, 'result: ', binarySearch(dataG, valueG)) // 1

const dataH = [1, 2, 5]
valueH = 6
console.log('array: ', dataH, 'value: ', valueH, 'result: ', binarySearch(dataH, valueH)) // -1