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
  // 나 -처음
  // let mid = Math.floor(array.length / 2);
  // while () {
  //   if (array[mid] === value) {
  //     return mid;
  //   } else if (array[mid] > value) {
  //     mid = Math.floor(mid / 2);
  //   } else {
  //     mid = mid + Math.floor(mid / 2);
  //   }
  // }

  // 나 - 중간
  // let start = 0;
  // let end = array.length - 1;
  // while (start <= end) {
  //   let mid = Math.floor((start + end) / 2);
  //   if (array[mid] === value) {
  //     return mid;
  //   } else if (array[mid] > value) {
  //     end = end - Math.floor(mid / 2);
  //   } else {
  //     start = Math.floor(mid / 2);
  //   }
  // }
  // return -1
// }

//   // 오류가 있는 답 - 맨 앞이랑 맨 뒤를 못찾음
//   let start = 0; 
//   let end = array.length - 1; 
//   while (end - start > 1) {
//     let mid = Math.floor((end - start) / 2) + start;
//     if (array[mid] === value) {
//       return mid;
//     } else if (array[mid] > value) {
//       end = mid;
//     } else {
//       start = mid;
//     }
//   }
//   return -1
// }

// 답 - value가 맨 앞이랑 맨 뒤여도 찾음
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