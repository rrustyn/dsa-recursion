/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }

  return nums[0] * product(nums.slice(1));
}

// function product(nums, )

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //compare length of two words
  //hi hello hola
  //hi [hello hola]
  //hello [hola]
  //hola []
  //return ""

  if (words.length === 0) {
    return 0
  }

  return words[0].length > longest(words.slice(1))
          ? words[0].length
          : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  //if statement
  return arr[0] === val ? true : find(arr.slice(1), val);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  
  //if statement
  return str[0] === str.slice(-1) ? isPalindrome(str.slice(1,-1)) : false

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return revString(str.slice(1)) + str[0];

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;

  //if statement
  return arr[i] === val ? i : findIndex(arr, val, i+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      gatherStrings(obj[key], out);
    } else {
      if (typeof obj[key] === "string"){ 
        out.push(obj[key]);
      }
    }
  }
  
  return out;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left === right) return false;
  
  let halfway = Math.floor((left + right) / 2);
  
  if (arr[halfway] === val) {
    return true;
    //want left to be halfway + 1 and right to be end
  } else if (arr[halfway] < val) {
    return binarySearch(arr, val, halfway + 1, right);
    //left to be start and right to be halfway
  } else {
    return binarySearch(arr, val, left, halfway);
  }

}
//12345
//45
//4

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (left === right) return -1;
  
  let halfway = Math.floor((left + right) / 2);
  
  if (arr[halfway] === val) {
    return halfway;
  } else if (arr[halfway] < val) {
    return binarySearchIndex(arr, val, halfway + 1, right);
  } else {
    return binarySearchIndex(arr, val, left, halfway);
  }

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
