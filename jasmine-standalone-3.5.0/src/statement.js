class Statement{
  constructor(transaction = new Transaction){
    this.transaction = transaction
  }

  printBankStatement(){
    var transactionRecord = this.transaction.getTransactionRecord()

    var header = ["date||credit||debit||balance\n"]
    var i = (Object.keys(transactionRecord).length)
    var counter = (Object.keys(transactionRecord).length)

    for(var index = 1; index <= i; index ++){
      var date = transactionRecord[counter].date
      var credit = transactionRecord[counter].credit
      var debit = transactionRecord[counter].debit
      var balance = transactionRecord[counter].balance
  
      header.push(`${date}||${credit}||${debit}||${balance}\n`)
    
      counter = counter - 1  
    }
  
    var fullStatement = header.join("")
    return fullStatement
  }
}
