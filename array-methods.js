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
   array.length = array.length - 1;
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
    var tempObject = {};
    var returnArray = [];
    for (var i = 0; i < array.length; i++){
      if (!tempObject.hasOwnProperty(array[i])){
        tempObject[array[i]] = array[i];
        //This final line with a little help my friends: http://stackoverflow.com/questions/33558271/looping-through-an-array-object-to-find-duplicates-why-is-one-element-returning#33558340
        returnArray[returnArray.length] = array[i];
      }
    }
    return returnArray;
  },

  frequency: function frequency(array){
    var tempObject = {};
    var letterArray = [];
    var myString = "";
    for(var i = 0; i < array.length; i++){
      myString +=  array[i].toLowerCase();
    }
    letterArray = myString.split("");
    for(i = 0; i < letterArray.length; i++){
      if(!tempObject.hasOwnProperty(letterArray[i])){
        tempObject[letterArray[i]] = 1;
      } else {
        tempObject[letterArray[i]] = tempObject[letterArray[i]] + 1;
      }
    }
    //some help here: http://stackoverflow.com/questions/2620922/get-the-largest-value-from-json-object-with-javascript
    var maxValue = 0;
    var frequent = "";
    for (var letter in tempObject){
      if (tempObject[letter] > maxValue){
        maxValue = tempObject[letter];
      }
    }
    for (letter in tempObject){
      if (tempObject[letter] === maxValue){
       frequent = letter;
      }
    }
    return frequent;
  }
};
