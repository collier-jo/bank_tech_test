class Bank{
  constructor() {
    this.balance = 0;
    this.transactionRecord  = {}
    this.transactionIndex = 1
    this.MINBALANCE = 0
  }

  // var num = 5.56789;
// var n = num.toFixed(2);

  getCurrentBalance(){
    return this.balance;
  }

  depositMoney(amount, date = new Date){

    this.balance += amount;

    var fixedAmount = amount.toFixed(2)
    var fixedBalance = this.balance.toFixed(2)

    var stringDate = date.toLocaleDateString()
    this.transactionRecord[this.transactionIndex] = {date: stringDate, credit: fixedAmount, debit: "", balance: fixedBalance}
    this.transactionIndex ++ 
  }

  withdrawMoney(amount, date = new Date){
    if(this.balance === this.MINBALANCE){
      throw new Error(`Insufficent Funds. Your balance is: ${this.balance}`)
    } else {
      this.balance -= amount;
      var stringDate = date.toLocaleDateString()
      this.transactionRecord[this.transactionIndex] = {date: stringDate, credit: "", debit: amount, balance: this.balance}
      this.transactionIndex ++ 
    }
  }

  getTransactionRecord(){
    return this.transactionRecord 
  }

  printBankStatement(){
    var header = ["date||credit||debit||balance\n"]
    var counter = (this.transactionIndex - 1)
  
    for(var index = 1; index <= (this.transactionIndex - 1); index ++){
      var date = this.transactionRecord[counter]["date"]
      var credit = this.transactionRecord[counter]["credit"]
      var debit = this.transactionRecord[counter]["debit"]
      var balance = this.transactionRecord[counter]["balance"]
  
      header.push(`${date}||${credit}||${debit}||${balance}\n`)
  
      counter = counter - 1  
    }
  
    var fullStatement = header.join("")
    return fullStatement
  }
}