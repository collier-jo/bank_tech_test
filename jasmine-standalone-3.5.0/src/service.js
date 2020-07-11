class Service{
  constructor(history = new TransactionHistory){
    this.history = history;
  }

  deposit(amount){
    var transaction = this.history.addTransaction(new Transaction(amount, "deposit"))
    return transaction
  };

  withdrawal(amount){
    var transaction = this.history.addTransaction(new Transaction(amount, "withdrawal"))
    return transaction
  };

  //printStatement(){

    // var statement = new Statement 
    // return statement.print(this.history.recordOfTransaction)
    
  //}
};
