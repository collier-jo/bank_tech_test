'use strict';

describe("Statement", function(){

  var statement

  beforeEach(function(){
    spyOn(Date, 'now').and.returnValue('11/11/2011');
    statement = new Statement
  })

  it("Prints a 'deposit'", function(){
    var date = new Date(Date.now())
    var transactionRecordDouble = {0: {date: date, credit: 1000, debit: "", balance: 1000}}
    expect(statement.print(transactionRecordDouble)).toEqual(("date||credit||debit||balance\n11/11/2011||1000.00||||1000.00\n"))
  });

  it("Prints a 'deposit' and 'withdrawal'", function(){
    var date = new Date(Date.now())
    var transactionRecordDouble = {0: {date: date, credit: 1000, debit: "", balance: 1000}, 1: {date: date, credit: "", debit: 500.5, balance: 499.5}}
    expect(statement.print(transactionRecordDouble)).toEqual(("date||credit||debit||balance\n11/11/2011||||500.50||499.50\n11/11/2011||1000.00||||1000.00\n"))
  });
});
