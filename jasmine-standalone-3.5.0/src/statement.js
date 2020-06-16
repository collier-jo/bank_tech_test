class Statement{
  constructor(transaction = new Transaction){
    this.transaction = transaction
  }

  printBankStatement(){

    console.log(this.transaction.getTransactionRecord())

    var transactionRecord = this.transaction.getTransactionRecord()

    console.log(transactionRecord[1].date)

    var date = transactionRecord[1].date
    var credit = transactionRecord[1].credit
    var debit = transactionRecord[1].debit
    var balance = transactionRecord[1].balance
    
    return `date||credit||debit||balance\n${date}||${credit}||${debit}||${balance}\n`



    
  }
}


// var header = ["date||credit||debit||balance\n"]
//     var counter = (this.transaction.transactionIndex - 1)

//     for(var index = 1; index <= (counter); index ++){
//       var date = transactionRecord[counter].date
//       var credit = transactionRecord[counter].credit
//       var debit = transactionRecord[counter].debit
//       var balance = transactionRecord[counter].balance
  
//       header.push(`${date}||${credit}||${debit}||${balance}\n`)
  
//       counter = counter - 1  
//     }
  
//     var fullStatement = header.join("")
//     return fullStatement

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
