'use strict';

describe("Statement", function(){
  var statement, double 

  beforeEach(function(){
    spyOn(Date, "now").and.returnValue("01/01/2000")
    double = {
      setBar: function(amount){
        bar = amount
      },
      getBar: function(){
        return bar
      }
    }
    statement = new Statement 
  });

  spyOn(double, "getbar").and.returnValue()

  double.setBar();
  fetchedBar = double.getBar();

  it("Prints a statement with one deposit", function(){
    transactionHistory.addTransction(1000, "deposit")
    expect(statement.print()).toEqual("date||credit||debit||balance\n01/01/2000||1000.00||||1000.00\n")
  });

  // it("Prints a statement with one withdrawal", function(){
  //   transactionHistory.addTransction(1000, "withdrawal")
  //   expect(statement.print()).toEqual("date||credit||debit||balance\n01/01/2000||||1000.00||-1000.00\n")
  // });

  // it("Prints a statement with one deposit and one withdrawal", function(){
  //   transactionHistory.addTransction(1000, "deposit")
  //   transactionHistory.addTransction(1, "withdrawal")
  //   expect(statement.print()).toEqual("date||credit||debit||balance\n01/01/2000||1000.00||||1000.00\n01/01/2000||||1.00||999.00\n")
  // });
  
});


// The only place that holds the record is transactionHistory.recordOfTransactions 
// This is intialized in Services 
// 