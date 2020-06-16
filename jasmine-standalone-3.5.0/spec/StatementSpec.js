// it("Prints out a statement of users transaction, x1 deposit", function(){
  //   var date = new Date('02 January 2000 00:00 UTC');
  //   bank.depositMoney(2000, date)
  //   expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n02/01/2000||2000.00||||2000.00\n")
  // });

  // it("Prints out a statement of users transaction, x1 desposit x1 withdrawal(ORDERED)", function(){
  //   var date = new Date('02 January 2000 00:00 UTC');
  //   var date2 = new Date('03 January 2000 00:00 UTC');
  //   var date3 = new Date('04 January 2000 00:00 UTC');
  //   bank.depositMoney(2000, date)
  //   bank.withdrawMoney(1000, date2)
  //   bank.withdrawMoney(1000, date3)
  //   expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n04/01/2000||||1000.00||0.00\n03/01/2000||||1000.00||1000.00\n02/01/2000||2000.00||||2000.00\n")
  // });



  // it("Fixed double zero for deposit", function(){
  //   var date = new Date('02 January 2000 00:00 UTC');
  //   bank.depositMoney(2000.50, date)
  //   expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n02/01/2000||2000.50||||2000.50\n")
  // });

  // it("Fixed double zero for withdrawal", function(){
  //   var date = new Date('02 January 2000 00:00 UTC');
  //   var date2 = new Date('03 January 2000 00:00 UTC');
  //   bank.depositMoney(2000, date)
  //   bank.withdrawMoney(50.50, date2)
  //   expect(bank.printBankStatement()).toEqual("date||credit||debit||balance\n03/01/2000||||50.50||1949.50\n02/01/2000||2000.00||||2000.00\n")
  // });

  // double.recordDeposit.and.returnValue({
  //   date: "15/06/2020",
  //   credit: "1000.00",
  //   debit: "",
  //   balance: "1000.00"
  // })
  // spyOn(Transaction, "depositMoney").withArgs(1000)
  // spyOn(Transaction, "withdrawMoney").withArgs(500)

  //     var transactionDouble = jasmine.createSpyObj('transaction', ['depositMoney', 'transactionIndex']);
    // transactionDouble.depositMoney.and.returnValue({1: {date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}})
    // transactionDouble.transactionIndex.and.returnValue(1)
    // var transactionDouble = jasmine.createSpyObj('transaction', ['depositMoney', 'transactionIndex']);
    // transactionDouble.depositMoney.and.returnValue({1: {date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}})

'use strict';

describe("Statement", function(){
  var statement 

  beforeEach(function(){
    var transactionDouble = jasmine.createSpyObj('transaction', ['getTransactionRecord']);
    transactionDouble.getTransactionRecord.and.returnValue({1: {date: "01/01/2000", credit: "2000.00", debit: "", balance: "2000.00"}})


    statement = new Statement(transactionDouble) 
  });

  it("Prints out a statement of users transaction, x1 deposit", function(){
    expect(statement.printBankStatement()).toEqual("date||credit||debit||balance\n01/01/2000||2000.00||||2000.00\n")
  });


});