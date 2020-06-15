class Bank{
   constructor() {
      this.balance = 0;
      this.transactionRecord  = {}
      this.transactionIndex = 1
   }

   getCurrentBalance(){
      return this.balance;
   }

   depositMoney(amount, date){
      this.balance += amount;
      this.transactionRecord[this.transactionIndex] = {date: date, credit: amount, debit: "", balance: this.balance}
      this.transactionIndex ++ 
   }

   withdrawMoney(amount, date){
      this.balance -= amount;
      this.transactionRecord[this.transactionIndex] = {date: date, credit: "", debit: amount, balance: this.balance}
      this.transactionIndex ++ 
   }

   getTransactionRecord (){
      return this.transactionRecord 
   }
}