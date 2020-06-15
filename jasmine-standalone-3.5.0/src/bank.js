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
      this.transactionRecord[this.transactionIndex] = {date: "02/02/2000", credit: 1000, debit: "", balance: 1000}
   }

   withdrawMoney(amount){
      this.balance -= amount;
   }

   getTransactionRecord (){
      return this.transactionRecord 
   }
}