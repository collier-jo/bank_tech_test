describe("TransactionHistory", function(){
  var transactionHistory 
  
  beforeEach(function(){ 
    spyOn(Date, 'now').and.returnValue('01/01/2000');
    transactionHistory = new TransactionHistory
  })

  it("records a transaction into an object constructor", function(){
    expect(transactionHistory.balance(1000)).toEqual(1000)
  })
});



















// TransactionHistory
// ||      - index 
// ||      - this.recordOfTransaction = {
// ||          1: {date: 10.01.2012, credit: 1000.00, debit: "", balance: 1000 }
// ||          2: {date: 13.01.2012, credit: 2000.00, debit: , balance: 3000 }
// ||          3: {date: 14.01.2012, credit: "", debit: 500.00, balance: 2500.00}}
// || .addTransaction(transaction)
// ||      if type === deposit 
// ||       - var balance = balance(-amount)
// ||       - push to record[index ++ ] = {date: transaction.date, credit: transaction.amount, debit: "", balance: balance}
// ||      else 
// ||       - var balance = balance(amount)
//          - push to record[index ++ ] = {date: transaction.date, credit: "" , debit: transaction.amount, balance: balance}
// || .balance(amount)
// ||       - return this.balance += amount