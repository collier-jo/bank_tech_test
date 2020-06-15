class Bank{
   constructor() {
      this.balance = 0;
   }

   getCurrentBalance(){
      return this.balance;
   }

   depositMoney(amount){
      this.balance += amount;
   }
}