'use strict';

describe('Bank', function(){
  var bank

  beforeEach(function(){
    bank = new Bank;
  })
  it("Has a default balance of 0", function(){
    expect(bank.getCurrentBalance()).toEqual(0);
  });

  it("Can deposit money into the bank", function(){
    bank.depositMoney(1000);
    expect(bank.getCurrentBalance()).toEqual(1000);
  });

  it("Can withdraw money from bank", function(){
    bank.depositMoney(1000);
    bank.withdrawMoney(500);
    expect(bank.getCurrentBalance()).toEqual(500);
  })

  it("Has an active record of deposits with dates", function(){
    bank.depositMoney(1000, "02/02/2000");
    expect(bank.getTransactionRecord ()).toEqual({1: {date: "02/02/2000", credit: 1000, debit: "", balance: 1000}} )
  })
});