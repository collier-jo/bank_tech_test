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
    if (transaction.type === "deposit"){
      let balance = this.balance(amount)
      this.recordOfTransaction[this.transactionIndex] = {date: date, credit: amount, debit: "", balance: balance}
    }else{
      let balance = this.balance(-amount)
      this.recordOfTransaction[this.transactionIndex] = {date: date, credit: "", debit: amount, balance: balance}
    }
    this.transactionIndex ++ 
  }
} 

