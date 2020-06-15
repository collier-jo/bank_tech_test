class Bank{
   constructor() {
    this.balance = 0;
    this.transactionRecord  = {}
    this.transactionIndex = 1
   }

   getCurrentBalance(){
    return this.balance;
   }

   depositMoney(amount, date = new Date){
    this.balance += amount;
    var stringDate = date.toLocaleDateString()
    this.transactionRecord[this.transactionIndex] = {date: stringDate, credit: amount, debit: "", balance: this.balance}
    this.transactionIndex ++ 
   }

   withdrawMoney(amount, date = new Date){
    this.balance -= amount;
    var stringDate = date.toLocaleDateString()
    this.transactionRecord[this.transactionIndex] = {date: stringDate, credit: "", debit: amount, balance: this.balance}
    this.transactionIndex ++ 
   }

   getTransactionRecord(){
    return this.transactionRecord 
   }

   printBankStatement(){
// {1: {date: "02/01/2000", credit: 2000, debit: "", balance: 2000}
      for(var index = 1; index = (this.transactionIndex - 1); index ++){
        var date = this.transactionRecord[index]["date"]
        var credit = this.transactionRecord[index]["credit"]
        var debit = this.transactionRecord[index]["debit"]
        var balance = this.transactionRecord[index]["balance"]


        return `date||credit||debit||balance\n${date}||${credit}||${debit}||${balance}`
      }
   }
}