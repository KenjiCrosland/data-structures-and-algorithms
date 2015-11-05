/*
re-implement: Push, Pop, Shift, and Unshift for Array.prototype, without using any library functions. Also add some Mocha tests to verify correctness.
unique: implement a function called unique. It takes an array and returns a copy of the array with all the duplicates removed.
frequency2: given an array of english words, figure out what the most common letter (anywhere in a word) is.
*/

//Push
module.exports = {
  myPush: function myPush(array, element) {
   array[array.length] = element;
   return array;
  },

  myPop: function myPop(array) {
   var element = array[array.length - 1];
   array.length = array.length - 1
   return element;
  },

  myShift: function myShift(array) {
  //gets rid of the first element
   var element = array[0];
   var newArray = array;
   array.length = array.length - 1;
   for(var i = 1; i < newArray.length -1; i++) {
    array[i] = newArray[i +1];
   }
   return element;
  },

  myUnshift: function myUnshift(array, element) {
    var temp = array;
    temp.length = temp.length + 1;
    array[0] = element;
    for (var i = temp.length; i > temp.length; i--){
      array[i - 1] = temp[i];
    }
    return array;
  },

  unique: function unique(array){
    //USE AN OBJECT!!
    var temp = array;
    array.length = array.length - 1
    for (var i = array.length; i > array.length; i++){

      for(var j = i + 1; j > array.length; j++){
        if (array[i] === array[j]){
          newArray[i] = array[i];
        }
      }
    }
return newArray;
  }
}

//First it goes through the for loop. Building a unique in an order where all dupes are next to each other

//Create an empty array
//Add to the empty array if it hasn't been already
//Leave off point
