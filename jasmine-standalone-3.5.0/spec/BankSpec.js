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
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}} )
  });

  it("Withdrawal method turns a new Date to string for transaction record", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    var date2 = new Date('03 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    bank.withdrawMoney(1000, date2)
    expect(bank.getTransactionRecord()).toEqual({1: {date: "02/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}, 2: {date: "03/01/2000", credit: "", debit: 1000, balance: 1000}} )
  });

  it("Prints out a statement of users transaction, x1 deposit", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n02/01/2000||2000.00||||2000.00\n")
  });

  it("Prints out a statement of users transaction, x1 desposit x1 withdrawal(ORDERED)", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    var date2 = new Date('03 January 2000 00:00 UTC');
    var date3 = new Date('04 January 2000 00:00 UTC');
    bank.depositMoney(2000, date)
    bank.withdrawMoney(1000, date2)
    bank.withdrawMoney(1000, date3)
    expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n04/01/2000||||1000||0\n03/01/2000||||1000||1000\n02/01/2000||2000.00||||2000.00\n")
  });

  it("Does not allow balance to be in minus", function(){
    expect(function() { bank.withdrawMoney(1000); }).toThrow(new Error("Insufficent Funds. Your balance is: 0")); 
  });

  it("Fixed double zero", function(){
    var date = new Date('02 January 2000 00:00 UTC');
    bank.depositMoney(2000.50, date)
    expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n02/01/2000||2000.50||||2000.50\n")
  })
});
