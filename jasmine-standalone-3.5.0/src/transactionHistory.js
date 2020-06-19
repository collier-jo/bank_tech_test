class TransactionHistory {
  constructor(){
    this.recordOfTransaction = {};
    this.transactionIndex = 0 
    this.totalBalance = 0
  } 

  balance(amount){
    this.totalBalance += amount
  };

  addTransaction(transaction){
    this.recordOfTransaction[this.transactionIndex] = transaction
    this.transactionIndex ++ 

  }
} 