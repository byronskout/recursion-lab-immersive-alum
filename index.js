// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let sString = string.substring(1, string.length);
    printString(sString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";

  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
   if (string.length === 0 || string.length === 1) {
       return true;
    }
   if (string[0] === string[string.length - 1]) {
     return isPalindrome( string.slice(1, string.length - 1) );
   }
  return false;
}

function maxOf(arr) {
  if (arr.length === 1) {
      return arr[0]
 } else {
     return Math.max(arr.shift(), maxOf(arr));
 }
}

function addUpTo(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + addUpTo(array.slice(1));
  }
}

function includesNumber(array, n) {
  if (array[0] === n) {
    return true;
  } else if (!array.length) {
    return false;
  } else {
    return includesNumber(array.slice(1), n);
  }
}

function addUpTo(array, index) {
    if (index === 0) {
        return array[index];
    } else {
        return array[index] + addUpTo(array, --index);
    }
}
