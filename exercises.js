// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// function newArray(str, n) {
//
//   var array2 = [];
//
//   for (let i = 0; i < n; i++) {
//
//     array2.push(str);
//   }
//
//   return array2;
// }


Answer:

function myFunction(str, i) {
  const result = [];

  for (let j = 0; j < i; j++) {
    result.push(str);
  }

  return result;
}


// //another newArray with function expersion, which means assign it to a variabe
// const myRunction = function (str, i) {
//   return Array.from({length:i}, function() {
//     return str;
//   });
//
// }


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

function reverseArray(arr) {

  let result = [];

  for (let i = arr.length - 1; i > 0; i--) {
    result.push(arr[i]);
  }
  return result;
}


const reverseArrayResult = reverseArray([1, 2, 3]);
console.log(reverseArrayResult);


// //Solution: You can do it i-- as well
//
// function reverseArray(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i ++) {
//     result.unshift(arr[i]);
//   }
//   return result;
// }


//the other newArray

// function reverseArray(arr) {
//   const result = [];
//   for (let i = arr.length; i > 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function filterArray(arr) {

  let filterArray = arr.filter(Boolean);
  console.log(filterArray);

}


//solution
//
// function removeFalsyValues(arr) {
//   const result = [];
//
//   for (let i = 0; i <arr.length; i++){
//     if (arr[i]) {       //it will run only if it's truthy
//       result.push(arr[i]);
//     }
//   }
// }
//
// EX: [0, 'Happy', 32].. So here, 0 is falsy, so it won't excute.. 'Happy' is truthy, so it will excute
// so the function won't excute if it's falsy
//
//
// //another way:
//
// function removeFalsyValues(arr) {
//   const result = [];
//
//   for (let i = 0; i <arr.length; i++){
//     if (!!0 === false) {
//       resuly.push(arr[i]);
//     }
//   }
// }

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function createObj1(arr) {
  const result = {};

  for(let i = 0; i <arr.length; i++) {
    result[arr[i][0]] = arr[i][1];
  }
  return results
}


// function createofb1(arr) {
//   const result = {};
//
//   for(let i = 0; i <arr.length; i++) {
//
//     let nestedArray = arr[i];
//     let key = nestedArray[0];
//     let value = nestedArray[1];
//
//     result [key] = value;
//   }
//   return results
// }






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

// function duplicates(arr) {
//
//   const removeDuplicates = new Set(arr);
//
//   console.log(removeDuplicates);
//
// }

// function duplicates(arr) {
//
//   const removeDuplicates = Object.assign({}, arr);
//   console.log(removeDuplicates);
// }


// //answer:
//
// function removeDuplicates(arr) {
//   return [...new Set(arr)]];
// }


//Another way
function removeDuplicates(arr) {
const set = new set(arr);
  return [... Set];
}



// //another newArray
// function removeDuplicates(arr) {
//
//   const obj = {};
//
//   for (let i = 0, i < arr.length; i++){
//     obj[arr[i]] = arr[i];
//   }
//   return Array.from(object.values(obj));
// }
// // -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
//
// function compareArrays(arr1, arr2) {
//
//   for (let i = 0; i <= arr1.length; i++) {
//
//     for (let j = 0; j <= arr2.length; j++) {
//
//       if (arr1.length === arr2.length && arr1[i] === arr2[j]) {
//
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }

// compareArrays = [1, 2, 3], [4, 5, 6];
// compareArrays();
// console.log(compareArrays);


//solution:
//The idea is to sort the arrays first so that you can compare them as order doesn't mattar

function compareArrays(arr1, arr2) {

  if(arr1.length !== arr2.length) {
    return false;
  }

arr1.sort(function(a,b) { // this here sort the arrays
    return a-b;
});

arr2.sort(function(a,b) { // this here sort the arrays
    return a-b;
});

for(let i = 0; i<arr1.length; i++) {

  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
return true;
}


// // Be mideful that the .sort actually converts the array values to strings, then sort them..
// so if you want it to return back numbers that are sorted in a numiric order, then you have
// to pass this functiom.. function(a,b) {return a-b}


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------









// -----------------------------------------------
