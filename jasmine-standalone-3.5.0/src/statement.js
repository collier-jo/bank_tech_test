class Statement{

  print(record){
    //record will be a hash 

    var i = (Object.keys(record).length)
    var counter = (Object.keys(record).length - 1)
    this.header =  ["date||credit||debit||balance\n"]

    for(var index = 1; index <= i; index ++){
      var date = record[counter].date
      var credit = record[counter].credit
      var debit = record[counter].debit
      var balance = record[counter].balance

      this.header.push(`${date}||${credit}||${debit}||${balance}\n`)

      counter = counter - 1  
    }


    var fullStatement = this.header.join("")
    return fullStatement
  }
}