'use strict';

describe('Bank', function(){
  var bank

  beforeEach(function(){
    bank = new Bank;
  })
  it("Has a default balance of 0", function(){
    expect(bank.getCurrentBalance()).toEqual(0);
  });
})