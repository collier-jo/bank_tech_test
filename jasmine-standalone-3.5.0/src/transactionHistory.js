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
    let date = transaction.date 
    let amount = transaction.amount
    let balance = 1000
    this.recordOfTransaction[this.transactionIndex] = {date: date, credit: amount, debit: "", balance: balance}
    this.transactionIndex ++ 

  }
} 

