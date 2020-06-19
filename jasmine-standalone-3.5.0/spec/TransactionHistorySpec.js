describe("TransactionHistory", function(){
  var transactionHistory 

  beforeEach(function(){ 
    spyOn(Date, 'now').and.returnValue('01/01/2000');
    transactionHistory = new TransactionHistory
  });

  it("records a transaction into an object constructor", function(){
    transactionHistory.balance(1000)
    expect(transactionHistory.totalBalance).toEqual(1000)
  });

  it("records a transaction into an object constructor", function(){
    transactionHistory.balance(1000)
    transactionHistory.balance(1000)
    expect(transactionHistory.totalBalance).toEqual(2000)
  });

  describe("#addTransaction", function() {
    var double, bar, fetchedBar;

    var transactionHistory2

    beforeEach(function() {
      transactionHistory2 = new TransactionHistory
      spyOn(transactionHistory2, 'balance').and.returnValue(1000)
    
      double = {
        setBar: function(amount, type, date) {
          bar = {amount: amount, type: type, date: date};
        },
        getBar: function() {
          return bar;
        }
      };

      spyOn(double, "getBar").and.returnValue({amount: 1000, type: "deposit", date: "11/11/2011"});

      double.setBar(1000, "deposit", "11/11/2011");
      fetchedBar = double.getBar();
    });

    it("addTransaction should add transaction to recordOfTransaction", function(){
      transactionHistory2.addTransaction(fetchedBar)
      expect(transactionHistory2.recordOfTransaction).toEqual({0: {date: "11/11/2011", credit: 1000, debit: "", balance: 1000}})
      expect(transactionHistory2.transactionIndex).toEqual(1)
    });
  });
});

// 1: {date: 10.01.2012, credit: 1000.00, debit: "", balance: 1000 }
