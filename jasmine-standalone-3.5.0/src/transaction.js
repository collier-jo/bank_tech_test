class Transaction{
  constructor( ) {
    this.balance = 0;
    this.transactionRecord  = {}
    this.transactionIndex = 1
    this.MINBALANCE = 0
  }

  getCurrentBalance(){
    return this.balance;
  }

  getTransactionRecord(){
    return this.transactionRecord 
  }

  depositMoney(amount){
    this.balance += amount;
    return this._updateTransactionRecord("deposit", amount)
  }

  withdrawMoney(amount){
    if(this.balance - amount <= this.MINBALANCE){
      throw new Error(`Insufficent Funds. Your balance is: ${this.balance}`)
    } else {
      this.balance -= amount;
      return this._updateTransactionRecord("withdrawal", amount)
    }
  }

  _updateTransactionRecord(action, amount){
    var fixedAmount = amount.toFixed(2)
    var fixedBalance = this.balance.toFixed(2)
    var date = this._formatDate()

    if(action === "deposit"){
      this.transactionRecord[this.transactionIndex] = {date: date, credit: fixedAmount, debit: "", balance: fixedBalance}
    }else{
      this.transactionRecord[this.transactionIndex] = {date: date, credit: "", debit: fixedAmount, balance: fixedBalance}
      
    }
    this.transactionIndex ++  
    console.log(this.transactionRecord[(this.transactionIndex - 1)]) 
    return this.transactionRecord[(this.transactionIndex - 1)]
 
  }

  _formatDate(){
    return new Date(Date.now()).toLocaleDateString();
  }

  // printBankStatement(){
  //   var header = ["date||credit||debit||balance\n"]
  //   var counter = (this.transactionIndex - 1)
  
  //   for(var index = 1; index <= (this.transactionIndex - 1); index ++){
  //     var date = this.transactionRecord[counter]["date"]
  //     var credit = this.transactionRecord[counter]["credit"]
  //     var debit = this.transactionRecord[counter]["debit"]
  //     var balance = this.transactionRecord[counter]["balance"]
  
  //     header.push(`${date}||${credit}||${debit}||${balance}\n`)
  
  //     counter = counter - 1  
  //   }
  
  //   var fullStatement = header.join("")
  //   return fullStatement
  // }
}
