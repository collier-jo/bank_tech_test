class Statement{

  _display(formattedRecord){
    this.header = ["date||credit||debit||balance\n"]
    this.header.push(formattedRecord)
    var fullStatement = this.header.join("")
    return fullStatement.replace( /,/g, "" );

  }

  print(record){

    var i = (Object.keys(record).length)
    var counter = (Object.keys(record).length - 1)
    var formattedRecord = []

    for(var index = 1; index <= i; index ++){
      var date = record[counter].date
      var balance = record[counter].balance.toFixed(2)

      if (record[counter].credit === ""){
        var credit = record[counter].credit
        var debit = record[counter].debit.toFixed(2)
      } else {
        var credit = record[counter].credit.toFixed(2)
        var debit = record[counter].debit
      }

      formattedRecord.push(`${date}||${credit}||${debit}||${balance}\n`)

      counter = counter - 1  
    }
    return this._display(formattedRecord)

  }
}