///Soal no 1

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(ar) {
  return ar.slice().reverse();
}
const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

///Soal no 2

const arr1 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let Total = 0;
    for (let i = 0; i < arr.length; i++) {
      Total = Total + arr[i];
    }
    let avr = Total / arr.length;
    let j = 0;
    let c = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > avr) {
        c.push(arr[j]);
      }
    }
    return c.length;
  }

console.log(getAverage(arr1))
console.log(getAverage(arr3))


///Soal no 3

const arr4 = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
      for (let index = 0; index < arr.length; index++) {
          for (let j = 0; j < arr[index].length; j++) {
            if (arr[index][j] == num) {
                return index + j + 1;
              }
          }
      }
      return null
  }
  
  console.log(searchInArray(arr4, 3));
  console.log(searchInArray(arr4, 2));
  console.log(searchInArray(arr4, 4));
  console.log(searchInArray(arr4, 8));
  