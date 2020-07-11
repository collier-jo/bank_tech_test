'use strict';

describe("Statement", function(){

  var statement

  beforeEach(function(){
    statement = new Statement
  })

  it("Prints a 'desposit'", function(){
    var transactionRecordDouble = {0: {date: "11/11/2011", credit: 1000, debit: "", balance: 1000}}
    expect(statement.print(transactionRecordDouble)).toEqual(("date||credit||debit||balance\n11/11/2011||1000||||1000\n"))
  });
});
