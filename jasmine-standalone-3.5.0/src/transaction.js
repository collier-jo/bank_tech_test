class Transaction {
  constructor(amount, type, date = new Date(Date.now())){
    this.amount = amount;
    this.type = type; 
    this.date = date;
  };
};