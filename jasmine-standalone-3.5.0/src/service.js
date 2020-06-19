class Service{
  constructor(history = new TransactionHistory){
    this.history = history;
  }

  deposit(amount){
    var balance = this.history.addTransaction(new Transaction(amount, "deposit"))
    return balance
  };
};
