class Service{
  constructor(history = new TransactionHistory, statement = new Statement){
    this.history = history;
    this.statement = statement
  }

  deposit(amount){
    var transaction = this.history.addTransaction(new Transaction(amount, "deposit"))
    return transaction
  };

  withdrawal(amount){
    var transaction = this.history.addTransaction(new Transaction(amount, "withdrawal"))
    return transaction
  };

  printStatement(){
    return this.statement.print(this.history.recordOfTransaction)
  }
};
