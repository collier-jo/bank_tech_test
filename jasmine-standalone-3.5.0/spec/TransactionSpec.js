'use strict';

describe('Transaction', function(){
  var bank

  beforeEach(function(){
    bank = new Transaction;
    spyOn(Date, 'now').and.returnValue('01/01/2000');
    // spyOn(Statement, 'print').and.returnValue()
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

  it("Deposit method updates the transaction record", function(){
    expect(bank.depositMoney(2000)).toEqual({date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"})
    expect(bank.getCurrentBalance()).toEqual(2000)
  });

  it("Withdrawal method updates balance and triggers private method", function(){
    bank.balance = 2000
    expect(bank.withdrawMoney(1000)).toEqual({date: "01/01/2000", credit: "", debit: "1000.00", balance: "1000.00"})
    expect(bank.getCurrentBalance()).toEqual(1000)
  });

  it("Does not allow balance to be in minus", function(){
    expect(function() { bank.withdrawMoney(1000); }).toThrow(new Error("Insufficent Funds. Your balance is: 0")); 
  });  
});

