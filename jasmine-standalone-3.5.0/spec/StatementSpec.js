'use strict';

describe("Statement", function(){
  var statement 

  it("Prints out a statement of users transaction, x1 deposit", function(){
    var transactionDouble = jasmine.createSpyObj('transaction', ['getTransactionRecord']);
    transactionDouble.getTransactionRecord.and.returnValue({1: {date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}})
    statement = new Statement(transactionDouble) 

    expect(statement.printBankStatement()).toEqual("date||credit||debit||balance\n01/01/2000||2000.00||||2000.00\n")
  });

  it("Prints out a statement of users transaction, x1 deposit", function(){
    var transactionDouble2 = jasmine.createSpyObj('transaction', ['getTransactionRecord']);
    transactionDouble2.getTransactionRecord.and.returnValue({1: {date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}, 2: {date: "01/01/2000", credit: "", debit: "1000.00", balance: "1000.00"}})
    statement = new Statement(transactionDouble2) 

    expect(statement.printBankStatement()).toEqual("date||credit||debit||balance\n01/01/2000||||1000.00||1000.00\n01/01/2000||2000.00||||2000.00\n")
  });
});