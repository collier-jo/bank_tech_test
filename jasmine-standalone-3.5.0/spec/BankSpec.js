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
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/02/2000", credit: 1000, debit: "", balance: 1000}} )
    expect(bank.transactionIndex).toEqual(2)
  })

  it("Has an active record of withdrawals with dates", function(){
    bank.depositMoney(1000, "02/02/2000");
    bank.withdrawMoney(500, "03/02/2000");
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/02/2000", credit: 1000, debit: "", balance: 1000}, 2:{date: "03/02/2000", credit: "", debit: 500, balance: 500} })
  })

  it("Deposit method turns a new Date to string for transaction record", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/01/2000", credit: 2000, debit: "", balance: 2000}} )
  })

  

});



// date3 = new Date('02 January 2000 00:00 UTC');
// Sun Jan 02 2000 00:00:00 GMT+0000 (Greenwich Mean Time)
// date3.toLocaleDateString()
// "02/01/2000"