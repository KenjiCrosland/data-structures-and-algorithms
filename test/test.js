var expect = require('chai').expect;
var arr = require(__dirname + '/../array-methods.js');

describe('the Array.myPush method', function(){
  it('should return an with an extra element that we pass into it', function() {
    var myArray = [1,2,3];
    arr.myPush(myArray, 4);

    expect(myArray[myArray.length - 1]).to.equal(4)
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

describe('the Array.myUnshift method', function(){
  it('should return an with an extra element that we pass into it', function() {
    var myArray = [1,2,3];
    arr.myUnshift(myArray, 0);

    expect(myArray[0]).to.equal(0);
    expect(myArray.length).to.equal(4);
  });
});

describe('the unique method', function(){
  it('should return an with an extra element that we pass into it', function() {
    var myArray = [2,2,3,2,2,2,2];
    //expect(myArray).to.eql([2,2,3,2,2,2,2]);
    var unique = arr.unique(myArray);
    expect(unique).to.eql([2,3]);
  });
});
