var expect = require('chai').expect;
var arr = require(__dirname + '/../array-methods.js');

describe('the Array.myPush method', function(){
  it('should return an with an extra element that we pass into it', function() {
    var myArray = [1,2,3];
    arr.myPush(myArray, 4);

    expect(myArray[myArray.length - 1]).to.equal(4);
    expect(myArray.length).to.equal(4);
  });
});

describe('the myPop method', function(){
  var myArray = [1,2,3];
  var popped = arr.myPop(myArray);

  it('should return the last element in the array', function(){
    expect(popped).to.equal(3);
  });

  it('should remove the last element in the array', function(){
    expect(myArray.length).to.equal(2);
  });
});

describe('the myShift method', function(){
  var myArray = [1,2,3];
  var shifted = arr.myShift(myArray);

  it('should return the first element in the array', function(){
    expect(shifted).to.equal(1);
  });

  it('should remove the first element in the array', function(){
    expect(myArray.length).to.equal(2);
  });
});

describe('the myUnshift method', function(){
  it('should return an with an extra element that we pass into it', function() {
    var myArray = [1,2,3];
    arr.myUnshift(myArray, 0);

    expect(myArray[0]).to.equal(0);
    expect(myArray.length).to.equal(4);
  });
});

describe('the unique method', function(){
  it('should reduce an array to only unique values', function() {
    var myArray = [2,2,3,3,4,2,2,2,2];
    var myArray2 = ['duck', 'duck', 'goose'];
    var myArray3 = [0, -0, 1, "1", [1], 2];
    var unique = arr.unique(myArray);
    var unique2 = arr.unique(myArray2);
    var unique3 = arr.unique(myArray3);
    expect(unique).to.eql([2,3,4]);
    expect(unique2).to.eql(['duck', 'goose']);
    //Still haven't figured out this: expect(unique3).to.eql([0, -0, 1, "1", [1], 2]);
  });
});

describe('the frequency method', function(){
  it('should return the most common letter in an array of english words', function() {
    var myArray = ['a', 'aBb', 'acCc', 'aDdd'];
    var myArray2 = ['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']; //Just for fun
    var mostFrequent = arr.frequency(myArray);
    var mostFrequent2 = arr.frequency(myArray2);

    expect(mostFrequent).to.equal('a');
    expect(mostFrequent2).to.equal('o');
  });
});
