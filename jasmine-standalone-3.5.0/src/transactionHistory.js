class TransactionHistory {
  constructor(){
    this.recordOfTransaction = {};
    this.transactionIndex = 0 
    this.totalBalance = 0
  } 

  balance(amount){
    this.totalBalance += amount
    return this.totalBalance
  };

  addTransaction(transaction){
    let date = transaction.date 
    let amount = transaction.amount
    let balance = this.balance()
    this.recordOfTransaction[this.transactionIndex] = {date: date, credit: amount, debit: "", balance: balance}
    this.transactionIndex ++ 

  }
} 

