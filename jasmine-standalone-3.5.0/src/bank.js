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

   withdrawMoney(amount){
      this.balance -= amount;
      this.transactionRecord[this.transactionIndex] = {date: date, credit: "", debit: amount, balance: this.balance}
      this.transactionIndex ++ 
   }

   getTransactionRecord (){
      return this.transactionRecord 
   }
}