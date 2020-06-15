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
  });

  it("Deposit method turns a new Date to string for transaction record", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/01/2000", credit: 2000, debit: "", balance: 2000}} )
  });

  it("Withdrawal method turns a new Date to string for transaction record", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    var date2 = new Date('03 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    bank.withdrawMoney(1000, date2)
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/01/2000", credit: 2000, debit: "", balance: 2000}, 2: {date: "03/01/2000", credit: "", debit: 1000, balance: 1000}} )
  });

  it("Prints out a statement of users transactions", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n02/01/2000||2000|| ||2000")
  })

});




// date       || credit  || debit  || balance
// 14/01/2012 ||         || 500.00 || 2500.00
// 13/01/2012 || 2000.00 ||        || 3000.00
// 10/01/2012 || 1000.00 ||        || 1000.00
