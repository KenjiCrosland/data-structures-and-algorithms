var expect = require('chai').expect;
require(__dirname + '/../array-methods.js');

describe('the Array.myPush method', function(){
  it('should return an with an extra element that we pass into it', function() {
    myArray = [1,2,3];
    myArray.myPush(4);

    expect(myArray[myArray.length - 1]).to.equal(4)
    expect(myArray.length).to.equal(4);
  });
});

describe('the Array.myPop method', function(){
  var myArray = [1,2,3];
  var popped = myArray.myPop();

  it('should return the last element in the array', function(){
    expect(popped).to.equal(3);
  });

  it('should remove the last element in the array', function(){
    expect(myArray.length).to.equal(2);
  });
});

describe('the Array.myShift method', function(){
  var myArray = [1,2,3];
  var shifted = myArray.myShift();

  it('should return the first element in the array', function(){
    expect(shifted).to.equal(1);
  });

  it('should remove the first element in the array', function(){
    expect(myArray.length).to.equal(2);
  });
});

describe('the Array.myUnshift method', function(){
  it('should return an with an extra element that we pass into it', function() {
    myArray = [1,2,3];
    myArray.myUnshift(0);

    expect(myArray[0]).to.equal(0);
    expect(myArray.length).to.equal(4);
  });
});

describe('the Array.unique method', function(){
  it('should return an with an extra element that we pass into it', function() {
    myArray = [2,2,3,2,2,2,2];

    expect(true).to.equal(false);
  });
});
