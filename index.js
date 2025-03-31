 // helpers.js

// Utility functions for testing
function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
        if (!arraysEqual(arrA[idx], arrB[idx])) return false;
      } else if (arrA[idx] !== arrB[idx]) {
        return false;
      }
    }
    return true;
  }
  
  function objectsEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
  
  // Collection functions implementation
  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i];
      }
    } else {
      for (const key in collection) {
        if (predicate(collection[key])) return collection[key];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) result.push(item);
    });
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  // Uncomment these if you want to implement the bonus functions
  /*
  function mySortBy(array, callback) {
    const newArr = [...array];
    return newArr.sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  function myFlatten(array, shallow = false, result = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], false, result);
      } else if (Array.isArray(array[i]) && shallow) {
        for (let j = 0; j < array[i].length; j++) {
          result.push(array[i][j]);
        }
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
  */
  
  // Export functions if needed (for Node.js environment)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      myEach,
      myMap,
      myReduce,
      myFind,
      myFilter,
      mySize,
      myFirst,
      myLast,
      myKeys,
      myValues,
      // mySortBy,
      // myFlatten,
      arraysEqual,
      objectsEqual
    };
  }