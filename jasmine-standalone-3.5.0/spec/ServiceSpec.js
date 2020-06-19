'use strict';

describe('Service', function(){
  var service
  var transactionHistory, bar, fetchedBar;


  beforeEach(function(){
    var transactionDouble = {amount: 1000, date: "11/11/2011"}
    transactionHistory = {
      addTransaction: function(transaction) {
        let amount = transaction.amount
        let date = transaction.date 
        bar = {0: {date: date, credit: amount, debit: "", balance: 1000}}
        return bar
      }
    };

    spyOn(transactionHistory, "addTransaction").and.returnValue({0: {date: "11/11/2011", credit: 1000, debit: "", balance: 1000}});

    transactionHistory.addTransaction(transactionDouble);
    fetchedBar = transactionHistory.addTransaction();
    
    service = new Service(transactionHistory) 
  });

  it("Interacts with transactionhistory for deposit class", function(){
    expect(service.deposit(1000)).toEqual({0: {date: "11/11/2011", credit: 1000, debit: "", balance: 1000 }})
  });

});

     

      

