class TransactionHistory {
  constructor(){
    this.recordOfTransaction = {};
    this.transactionIndex = 0 

  } 

  balance(amount){
    this.amount = amount
    return this.amount
  };
}